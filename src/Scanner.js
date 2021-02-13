import { useState, useRef } from 'react';
import './App.css';
import Camera from './Camera';
import './css/style.css'

function Scanner() {
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);

  return (
    <div id="scanner">
      <button onClick={() => setScanning(!scanning) } style={{marginTop: 100}}>{scanning ? 'Stop' : 'Start'}</button>
      <div ref={scannerRef} style={{position: "relative"}}>
        <canvas className="drawingBuffer" style={{
  
          margin: "auto",
          border: '3px solid green',
        }} width="640" height="480" />
        {scanning ? <Camera scannerRef={scannerRef} onDetected={result => setScanning(false)} /> : null}
      </div>
    </div>
  );
}

export default Scanner;