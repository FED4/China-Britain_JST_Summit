import React, { Component } from 'react';
import "./schedule.css";
//import logo from './logo.svg';


/* eslint-disable */

class App extends Component {
  render() {

    return (
      <div className="App">
        <iframe className="event" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%233F51B5&amp;ctz=Europe%2FLondon&amp;src=aXU1amMzOTZqOWZ2bTQydjZlZGtobGZzZ2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300&amp;mode=AGENDA&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showDate=0"  height="700" frameborder="0" scrolling="no"></iframe>
        <iframe classname="event" src="https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/831efc13-533c-4154-9fc0-3d01849ac484/cid-D4F717714D9B76A7/index.html" height="600" width="400"></iframe>
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
