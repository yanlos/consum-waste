import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, ResponsiveContainer } from 'recharts';
const data = [
  {name: 'November', emissions: 180, pv: 2400, amt: 2400},
  {name: 'December', emissions: 210, pv: 2400, amt: 2400},
  {name: 'January', emissions: 270, pv: 2400, amt: 2400},
  {name: 'February', emissions: 400, pv: 2400, amt: 2400},
];

const renderLineChart = (
  <LineChart width={400} height={200} data={data}>
    <Line type="monotone" dataKey="emissions" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

const data01 = [
  {
    "name": "Friendly",
    "value": 52
  },
  {
    "name": "Landfill",
    "value": 23
  },
  {
    "name": "Nuetral",
    "value": 25
  }
];

const renderPieChart = (
  <PieChart width={200} height={200}>
    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#4287f5" label/>
    <Tooltip/>
  </PieChart>
);

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
    overflow: 'auto'
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
    <div style={{fontFamily:'"Montserrat"', display:'flex', flexFlow: 'column', alignItems: 'center', paddingTop: '20px'}}>
      <h1 style={{color: 'green'}}>Your Current Report</h1>
      <div style={{position: 'relative', padding: '50px', background: 'white'}}>
        <div style={{display: 'flex', alignItems:'center'}}>
          <h3>CO2 Conserved (oz)</h3>
          {renderLineChart}
        </div>

        <div style={{display: 'flex', alignItems:'center'}}>
          <h2>Type Of Packaging Scanned</h2>
          {renderPieChart}
        </div>
      </div>
      <img style={{maxWidth: '100%'}} src='./img/bg2.jpg'/>
      <div class={classes.container}>
        <div class={classes.content}>
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