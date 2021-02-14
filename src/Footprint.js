import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';

const items = {
  "water bottle": {
    co2: 10,
    recycle: false,
    good: true,
    alternatives: [
      {
        name: "boxed water",
        advantage: "releases 0.2 ounces of C02",
        image: "https://cdn.shopify.com/s/files/1/0234/7341/products/500ml-cap-right_800x.jpg?v=1584043066"
      },
      {
        name: "boxed water",
        advantage: "no C02 emissions and 92% recyclable",
        image: "https://cdn.shopify.com/s/files/1/0234/7341/products/500ml-cap-right_800x.jpg?v=1584043066"
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
  item: {
    color: "#70c0ff"
  },
  chunk: {
    height: 200,
    fontSize: '2vw'
  },
  row: {
    display: "flex",
    justifyContent: "space-between"
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
      <div class={classes.text} style={{fontFamily: "Montserrat"}}>
        {items[item].good ? <div class={classes.chunk} style={{fontSize: 66}}>Ditch <span class={classes.item}>{item}</span>!</div> :
          <div class={classes.chunk} style={{fontSize: 66}}><span class={classes.item}>{item}</span> is a sustainable item!</div>}
        <div class={classes.chunk}>
          <div>This product releases {items[item].co2} ounce of CO<sub>2</sub> into the environment</div>
          {items[item].recycle ? <div>You can <span style={{textDecoration: "underline"}}>{items[item].recycle}</span> this item</div> :
            <div>This item is <span style={{textDecoration: "underline"}}>not</span> recyclable</div>}
        </div>
        <div class={classes.chunk} style={{marginTop: 120}}>
          <div>Instead of buying this item, we recommend</div>
          <div class={classes.row}>
            <div>{items[item].alternatives[0].name} — {items[item].alternatives[0].advantage}</div>
            <img src={items[item].alternatives[0].image} height="200" />
          </div>
          <hr />
          <div class={classes.row}>
            <img src={items[item].alternatives[1].image} height="200" />
            <div style={{textAlign: "right"}}>{items[item].alternatives[1].name} — {items[item].alternatives[1].advantage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}