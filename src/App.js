import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Footer from "./Footer";
import {Route, Switch} from "react-router-dom";

import Home from "./HomeZh"
import Schedule from "./Schedule"
import NotFound from "./NotFound"

/* eslint-disable */

class App extends Component {
  render() {

    return (
      <div className="App1">
        <NavBar />
          <Switch>
            <Route
              exact path="/"
              render={() => <Home />} />
            <Route
              exact path="/schedule"
              render={() => <Schedule />} />
            <Route
              render={() => <NotFound />} />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;


/*  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div>content</div>
    </div>
  );*/
