import React, { Component } from 'react';
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
        <div className="App">
          <iframe className="event" src="https://mp.weixin.qq.com/s/_D6d1atBM0vOrlssY-dQ6w"  height="700" frameborder="0" scrolling="no"></iframe>
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
