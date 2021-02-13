import React, { useCallback, useLayoutEffect } from 'react';
import Quagga from '@ericblade/quagga2';

function getMedian(array) {
  array.sort((a, b) => a - b);
  const half = Math.floor(array.length / 2);
  if (array.length % 2 === 1) return array[half];
  return (array[half - 1] + array[half]) / 2;
}

function getMedianOfCodeErrors(decodedCodes) {
  const errors = decodedCodes.filter(x => x.error).map(x => x.error);
  const medianOfErrors = getMedian(errors);
  return medianOfErrors;
}

const Scanner = ({ onDetected, scannerRef }) => {
  const errorCheck = useCallback(result => {
    if (getMedianOfCodeErrors(result.codeResult.decodedCodes) < 0.2) onDetected(result.codeResult.code);
  }, [onDetected]);

  const handleProcessed = result => {
    const drawingCtx = Quagga.canvas.ctx.overlay;
    const drawingCanvas = Quagga.canvas.dom.overlay;
    drawingCtx.font = "24px Arial";
    drawingCtx.fillStyle = "green";

    if (result?.boxes) {
      drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
      result.boxes.filter(box => box !== result.box).forEach(box => {
        Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "purple", lineWidth: 2 });
      });
    }
    if (result?.box) {
      Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "blue", lineWidth: 2 });
    }
    if (result?.codeResult?.code) {
      // This is where we get the product code
      console.log(result.codeResult.code);
    }
  };

  useLayoutEffect(() => {
    Quagga.init({
      inputStream: {
        type: "LiveStream",
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment"
        },
        target: scannerRef.current,
      },
      locator: {
        patchSize: "medium",
        halfSample: true,
      },
      decoder: {
        readers: ["ean_reader", "upc_reader"]
      }
    }, error => {
      Quagga.onProcessed(handleProcessed);

      if (error) return console.log("Error starting Quagga:", error);
      Quagga.start();
    });
    Quagga.onDetected(errorCheck);
    return () => {
      Quagga.offDetected(errorCheck);
      Quagga.offProcessed(handleProcessed);
      Quagga.stop();
    };
  });
  return null;
}

export default Scanner;