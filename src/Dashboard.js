import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Scanner from './Scanner';

import TitlebarGridList from './FindBrands'
import Scoreboard from './Scoreboard.js';
import TestImg from './test.jpg';

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
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }
}));

export default function Dashboard() {
  const classes = useStyles();
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

  return (
    <div>
    </div>
  );
}