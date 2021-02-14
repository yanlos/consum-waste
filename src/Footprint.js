import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';


const items = {
  "water bottle": {
    co2: 3,
    recycle: "recycle", //the recycle variable should either be false, recycle, or decompose,.
    alternatives: [
      {
        name: "boxed water",
        advantage: "releases 0.2 ounces of C02"
      },
      {
        name: "boxed water",
        advantage: "no C02 emissions and 92% recyclable "
      }
    ]
  }


  

}

const useStyles = makeStyles(theme => ({
  backgroundContainer: {
    width: "100vw",
    height: "500vh",
    position: "relative"
  },
  background: {
    width: "100%",
    height: "100%",
    backgroundPosition: "0, 0",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundImage: "url(./intro-bg.jpg)",
    filter: "brightness(70%)"
  },
  chunk: {
    height: 200,
    fontSize: '2vw'
  },
  text: {
    position: "absolute",
    top: "300px",
    left: "50%",
    transform: "translateX(-50%)",
    width: 850,
    color: "#efefef",
    fontWeight: 700,
    fontSize: 64,
    backgroundColor: "transparent"
  }
}));

export default function Footprint({ item }) {
  const classes = useStyles();

  return (
    <div class={classes.backgroundContainer}>
      <div class={classes.background} />

      <div class={classes.text} style={{fontFamily:'"Montserrat"' }}>
        <div class={classes.chunk} style={{fontSize: 66}}>Ditch the {item}!</div>
        <div class={classes.chunk}>
          <div>This product releases {items[item].co2} ounces of CO<sub>2</sub> into the environment.</div>
          <br></br>
          <div>{items[item].recycle ? `You can ${ items[item].recycle } this item.` : "This item is not recyclable"}</div>

        </div>
        <div class={classes.chunk} style={{"marginTop": 120}}>

          <div>Instead of buying this item, we recommend</div>
          <div>{items[item].alternatives[0].name} — {items[item].alternatives[0].advantage}</div>
          <div>{items[item].alternatives[1].name} — {items[item].alternatives[1].advantage}</div>
        </div>
      </div>
    </div>
  );
}