import { useState, useRef } from 'react';
import './App.css';
import Camera from './Camera';
import './css/style.css'
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const buttonStyle = {
  fontSize: "20px",
  padding: "30px",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  justifyContent: 'center',
};


function Scanner() {
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);

  return (
    <main>

      
    <div id="scanner">

      <div>
        " "
      </div>
      <div>
        " "
      </div>
      <div>
        " "
      </div>
      <div>
        " "
      </div>
      <div>
        " "
      </div>
      <div ref={scannerRef} style={{position: "relative"}}>
        <canvas className="drawingBuffer" style={{
  
          margin: "auto",
          position: "absolute",
          border: 'solid green',
        }} width="640" height="480" />
        {scanning ? <Camera scannerRef={scannerRef} onDetected={result => setScanning(false)} /> : null}
      </div>
      
      <Button 
        onClick={() => setScanning(!scanning) }
        variant="contained" 
        style={{marginTop: 30}}  
        style={buttonStyle} 
        
        >
          {scanning ? 'Stop Scanning' : 'Start Scanning'}
      </Button>
    </div>
    </main>
  );
}

export default Scanner;