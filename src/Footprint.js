import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';

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
  text: {
    position: "absolute",
    top: "300px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#efefef",
    fontWeight: 700,
    fontSize: 96,
    backgroundColor: "transparent"
  }
}));

<<<<<<< HEAD
export default function Footprint({ item }) {
  const classes = useStyles();
=======
export default function Footprint(props) {

  const classes = useStyles();
  // TODO: Load leaderboard stats here
  useEffect(() => {
    console.log('loading stats');
  }, []);
  console.log(props.item)
  const [stats, setStats] = useState([
    {
      username: 'test1',
      score: 50,
      imgsrc: TestImg,
    },
    {
      username: 'test2',
      score: 1000,
      imgsrc: TestImg,
    },
    {
      username: 'test2',
      score: 1000,
      imgsrc: TestImg,
    },
    {
      username: 'test2',
      score: 1000,
      imgsrc: TestImg,
    },    {
      username: 'test2',
      score: 1000,
      imgsrc: TestImg,
    }
  ]);
>>>>>>> 5d62d46e7983814c30bc3de8cb3b2cc23f8281ba

  useEffect(() => {
    if (!props.item) {
      props.setActivePage("scanner");
    }
  });

  return (
    <div class={classes.backgroundContainer}>
      <div class={classes.background} />
      <div class={classes.text}>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
        <div>sample text</div>
      </div>
    </div>
  );
}