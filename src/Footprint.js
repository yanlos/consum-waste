import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';

const items = {
  "water bottle": {
    co2: 3,
    recycle: "recycle", //the recycle variable should either be false, recycle, or decompose.
    good: true,
    carbonFootprint: "A 500ml bottle of water has a total carbon footprint of about 3 ounces of CO2",
    instead: "Instead of buying this item, we recommend: ",
    alternatives: [
      {
        name: "Reusable Waterbottle",
        advantage: "An average person saves 217 plastic bottles from the landfill annually by switching!",
        image: "https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/w/3/w32ts2-cobalt_1.jpg",
        url: ""
      },
      {
        name: "Boxed Water",
        advantage: "Only emits .2 oz of CO2 and is 92% recyclable!",
        image: "https://cdn.shopify.com/s/files/1/0234/7341/products/500ml-cap-right_800x.jpg?v=1584043066",
        url: "https://boxedwaterisbetter.com"
      }
    ],
    coupon1: "Click for 20% off",
    coupon2: "Click for 15% off",
  },

  "Red Bull": {
    co2: 0,
    recycle: "recycle", //the recycle variable should either be false, recycle, or decompose.
    good: false,
    carbonFootprint: "You can melt down and recycle the aluminium can an unlimited number of times without losing quality.",
    instead: "Here's some facts!",
    alternatives: [
      {
        name: "Aluminum Cans",
        advantage: "The use of recycled aluminium results in using 95% less energy compared to the production of new aluminium.",
        // image: "https://www.hydroflask.com/media/catalog/product/cache/9177cfe059281270017bc29637323e6d/w/3/w32ts2-cobalt_1.jpg",
        // url: ""
      },
      {
        name: "Transportation",
        advantage: "Plastic bottles require 20% more space than aluminum cans during transport.",
        // image: "https://cdn.shopify.com/s/files/1/0234/7341/products/500ml-cap-right_800x.jpg?v=1584043066",
        // url: "https://boxedwaterisbetter.com"
      }
    ],
    coupon1: "",
    coupon2: "",

  },

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
    marginTop: 0
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
          {/* <div>This product releases {items[item].co2} ounces of CO<sub>2</sub> into the environment</div> */}
          {items[item].recycle ? <div>You can <span style={{textDecoration: "underline"}}>{items[item].recycle}</span> this item in a <span style={{color: "#1976d2"}}> blue bin</span></div> :
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

        {/* //if its a bad product it'll say here are other options, if its good gives you facts */}
          <div>{items[item].instead}</div>  
          <br>
          </br>

          <div class={classes.row}>
            <div class={classes.suggestion}>
              <img src={items[item].alternatives[0].image} height="200" />

              {/* take a look will be discount1 and disocount2, empty for good, not empty for bad */}
              <a href={items[item].alternatives[0].url} class={classes.link}>{items[item].coupon1}</a>


            </div>
            <div style={{textAlign: "right"}}>{items[item].alternatives[0].name} — {items[item].alternatives[0].advantage}</div>
          </div>
          <hr />
          <div class={classes.row}>
            <div>{items[item].alternatives[1].name} — {items[item].alternatives[1].advantage}</div>
            <div class={classes.suggestion}>
              <img src={items[item].alternatives[1].image} height="200" />
              <a href={items[item].alternatives[1].url} class={classes.link}>{items[item].coupon2}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}