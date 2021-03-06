import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BackupSharpIcon from '@material-ui/icons/BackupSharp';
import EcoIcon from '@material-ui/icons/Eco';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import Scoreboard from './Scoreboard';
import Dashboard from './Dashboard.js';
import Scanner from './Scanner';
import FindBrands from './FindBrands';
import Footprint from './Footprint.js';
import Social from './Social';

import TestImg from './test.jpg';
import Pic from './pic2.jpg';
import P1 from './pexels-p1.jpg';
import P2 from './pexels-p2.jpg';
import P3 from './pexels-p3.jpg';
import P4 from './pexels-p4.jpg';
import P5 from './pexels-p5.jpg';

import "typeface-montserrat";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: "typeface-montserrat"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    position: "fixed"
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  routeContainer: {
    marginLeft: 240,
    marginTop: 64,
    width: "calc(100vw - 240px)",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FAFAFA"
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [item, setItem] = useState("water bottle");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [stats, setStats] = useState([
    {
      username: 'Eddie Brock',
      score: 50,
      imgsrc: TestImg,
    },
    {
      username: 'Ben Parker',
      score: 683
    },
    {
      username: 'Jonah Jameson',
      score: 729,
      imgsrc: Pic,
    },
    {
      username: 'Norman Osborn',
      score: 957,
      imgsrc: P1,
    },
    {
      username: 'Otto Octavious',
      score: 75,
      imgsrc: P2,
    },
    {
      username: 'Peter Parker',
      score: 516,
      imgsrc: P3,
    },
    {
      username: 'Marry Jane',
      score: 250,
      imgsrc: P4,
    },
    {
      username: 'Harry Osborn',
      score: 333,
      imgsrc: P5,
    }
  ]);

  return (
    <div className={"App", classes.root}>
      <AppBar style={{ background: '#4caf50' }} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="green"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h4" color="inherit"  noWrap className={classes.title}>
            The Green Awakening
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >

        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon  />
          </IconButton>
        </div>

        <Divider />
        <ListItem button onClick={() => setActivePage("dashboard")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => setActivePage("scanner")}>
          <ListItemIcon>
            <BackupSharpIcon />
          </ListItemIcon>
          <ListItemText primary="Scan Products" />
        </ListItem>
        <ListItem button onClick={() => setActivePage("footprint")}>
          <ListItemIcon>
            <EcoIcon />
          </ListItemIcon>
          <ListItemText primary="Your Footprint" />
        </ListItem>
        <ListItem button onClick={() => setActivePage("search")}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="Find Brands" />
        </ListItem>
        <ListItem button onClick={() => setActivePage("social")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Leaderboard" />
        </ListItem>
        <Divider />
      </Drawer>

      <div className={classes.routeContainer}>
        {activePage === "dashboard" ? <Dashboard /> :
        activePage === "scanner" ? <Scanner setActivePage={setActivePage} setItem={setItem} /> :
        activePage === "footprint" ? <Footprint setActivePage={setActivePage} item={item} /> :
        activePage === "search" ? <FindBrands /> :
        activePage === "social" ? <Scoreboard stats={stats} /> :
        null}
      </div>
    </div>
  );
}

export default App;