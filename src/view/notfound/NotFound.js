import React, { Component } from "react";
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
        <BrowserView>
          <div className="App">
            404 这页还没做，竟然被你发现了= = 你来做吧~就这么愉悦地决定了！
          </div>
        </BrowserView>
        <MobileView>
          <div className="App">404 mobile</div>
        </MobileView>
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
