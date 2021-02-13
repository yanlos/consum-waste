import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Scanner from './Scanner';

function App() {
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);

  return (
    <div>
      <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Start'}</button>
      <div ref={scannerRef} style={{position: 'relative', border: '3px solid red'}}>
        <canvas className="drawingBuffer" style={{
          position: 'absolute',
          top: '0px',
          border: '3px solid green',
        }} width="640" height="480" />
        {scanning ? <Scanner scannerRef={scannerRef} onDetected={result => setScanning(false)} /> : null}
      </div>
    </div>
  );
}

export default App;