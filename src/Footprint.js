import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';

const items = {
  "water bottle": {
    co2: 3,
    recycle: false,
    good: true,
    carbonFootprint: "A 500ml bottle of water has a total carbon footprint of about 3 ounces of CO2",
    alternatives: [
      {
        name: "boxed water",
        advantage: "releases 0.2 ounces of C02",
        image: "https://cdn.shopify.com/s/files/1/0234/7341/products/500ml-cap-right_800x.jpg?v=1584043066",
        url: "https://boxedwaterisbetter.com"
      },
      {
        name: "boxed water",
        advantage: "no C02 emissions and 92% recyclable",
        image: "https://cdn.shopify.com/s/files/1/0234/7341/products/500ml-cap-right_800x.jpg?v=1584043066",
        url: "https://boxedwaterisbetter.com"
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
    justifyContent: "space-between",
    marginTop: 20
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
  },
  carbonFootprint: {
    position: "relative",
    fontSize: 30,
    marginTop: 80
  },
  ribbon: {
    width: "100%",
    height: 75
  },
  ribbonText: {
    fontSize: 26,
    position: "absolute",
    top: 10,
    width: "100%",
    textAlign: "center"
  },
  circle: {
    border: "3px solid white",
    borderRadius: "50%",
    padding: "0 25px",
    fontSize: 40
  },
  suggestion: {
    display: "flex",
    flexDirection: "column",
    width: 120,
    cursor: "alias"
  },
  link: {
    fontSize: 18,
    cursor: "alias",
    backgroundColor: "white",
    textAlign: "center"
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
        <div class={classes.carbonFootprint}>
          <img src="./ribbon.png" class={classes.ribbon} />
          <div class={classes.ribbonText}>What is the carbon footprint of {item}?</div>
          <div class={classes.row}>
            <div>{items[item].carbonFootprint}</div>
            <div class={classes.circle}><span style={{fontSize: 120, color: "#ff3070"}}>{items[item].co2}</span>oz</div>
          </div>
        </div>
        <div class={classes.chunk} style={{marginTop: 120}}>
          <div>Instead of buying this item, we recommend</div>
          <div class={classes.row}>
            <div class={classes.suggestion}>
              <img src={items[item].alternatives[0].image} height="200" />
              <a href={items[item].alternatives[0].url} class={classes.link}>Take a look</a>
            </div>
            <div style={{textAlign: "right"}}>{items[item].alternatives[0].name} — {items[item].alternatives[0].advantage}</div>
          </div>
          <hr />
          <div class={classes.row}>
            <div>{items[item].alternatives[1].name} — {items[item].alternatives[1].advantage}</div>
            <div class={classes.suggestion}>
              <img src={items[item].alternatives[1].image} height="200" />
              <a href={items[item].alternatives[1].url} class={classes.link}>Take a look</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}