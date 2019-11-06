import React, { Component } from "react";
import "./news.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  browserName
} from "react-device-detect";
import logo from "../../assets/summitLogo.png";

/* eslint-disable */

class App extends Component {
  render() {
    return (
      <div>
        <BrowserView>
          <div
            style={{
              justifyContent: "space-between"
            }}
            className="App"
          >
            <div>
              <img style={{ width: 200, height: 200, flex: 1 }} src={logo} />
              <img style={{ width: 300, height: 300, flex: 4 }} src={logo} />
            </div>
            <div>
              <img style={{ width: 500, height: 200, flex: 3 }} src={logo} />
            </div>
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
