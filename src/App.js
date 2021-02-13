import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './Result';
import Scanner from './Scanner';

function App() {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState([]);
  const scannerRef = useRef(null);

  return (
    <div>
      <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Start'}</button>
      <div ref={scannerRef} style={{position: 'relative', border: '3px solid red'}}>
        <ul className="results">
          {results.map(result => (result.codeResult && <Result key={result.codeResult.code} result={result} />))}
        </ul>
        <canvas className="drawingBuffer" style={{
          position: 'absolute',
          top: '0px',
          border: '3px solid green',
        }} width="640" height="480" />
        {scanning ? <Scanner scannerRef={scannerRef} onDetected={result => setResults([...results, result])} /> : null}
      </div>
    </div>
  );
}

export default App;