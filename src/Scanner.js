import { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Camera from './Camera';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import Impact from './impact.png';

const buttonStyle = {
  fontSize: "20px",
  padding: "30px",
  fontWeight: "bold",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  justifyContent: 'center'
};
const useStyles = makeStyles(theme => ({
  scanner: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}));


function Scanner({ setActivePage, setItem }) {
  const classes = useStyles();
  const [scanning, setScanning] = useState(false);
  const scannerRef = useRef(null);
  const handleItem = item => {
    setScanning(false);
    setActivePage("footprint");
    setItem(item);
  }

  return (
    <main>
    <div class={classes.scanner}>
      <h2> Hold barcode up to scanner:</h2>

      <div ref={scannerRef} style={{position: "relative"}}>
        <canvas className="drawingBuffer" style={{
          position: "absolute"
        }} />
        {scanning ? <Camera scannerRef={scannerRef} onDetected={item => handleItem(item)} /> : null}
      </div>

      <Button
        onClick={() => setScanning(!scanning) }
        variant="contained"
        style={{marginTop: 130}}
        style={buttonStyle}
        >
          {scanning ? 'Stop Scanning' : 'Start Scanning'}
      </Button>
      
      <img src={Impact} alt="How to make an impact"/>
    </div>
    </main>
  );
}

export default Scanner;