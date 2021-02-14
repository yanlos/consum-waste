import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    null
  );
}

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    // color: 'white',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <img style={{maxWidth: '100%'}} src='./img/bg2.jpg'/>
      <div class={classes.container}> 
        <div class={classes.content} style={{fontFamily:'"Montserrat"' }}>
          
          <h1 style={{ color: 'green'}}>Our Mission</h1>
          <p>
            To promote environmentally friendly brands to a group of environmentally concerned customers, 
            by so doing encourage companies that do not use sustainable packaging to make the switch.
          </p>

          <h2 style={{ color: 'green'}}> Features </h2>
          <p>
            Barcode Scanning: Simply scan the barcode on the back of your product to learn 
            more details about the product, such as packaging, CO2 emission levels, and 
            potential more eco-friendly alternatives!
          </p>
        </div>
      </div>
    </div>

  );
}