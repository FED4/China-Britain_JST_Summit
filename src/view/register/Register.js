import React, { Component } from 'react';
import './register.css';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
//import logo from './logo.svg';


/* eslint-disable */

class App extends Component {
  render() {
      return (
        <div>
            <div className="App">
              <iframe className="register-form" src="https://docs.google.com/forms/d/e/1FAIpQLScGwnDfpMI1Du7rGdAhom_DHWNQleZfp9gplsT0YpPvUdopAg/viewform?embedded=true" width="640" height="715" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
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
