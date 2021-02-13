import React from 'react';
import logo from './logo.svg';
import './App.css';
import Social from './Social';
import Scoreboard from './Scoreboard'

import Dashboard from './Dashboard.js';

function App() {
  return (
    <div className="App">
      {/* <nav id="navbar" className="navbar fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#navbar" className="navbar-brand">
            Test
          </a>
          <a href="sidebar" className="navbar-text">
            Test
          </a>
        </div>
      </nav>
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
              <h3>Bootstrap Sidebar</h3>
          </div>
          <ul className="list-unstyled components">
            <li>
              Test item
            </li>
            <li>
              Test item
            </li>
            <li>
              Test item
            </li>
            <li>
              Test item
            </li>
          </ul>
        </nav>

        <div id="content">
          
        </div>
      </div> */}

      <Dashboard />
    </div>
  );
}

export default App;
