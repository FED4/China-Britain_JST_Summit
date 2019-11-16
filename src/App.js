import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from "./view/navbar/NavBar";
import Footer from "./view/footer/Footer";
import {Route, Switch} from "react-router-dom";

import Home from "./view/home/HomeZh"
import Schedule from "./view/schedule/Schedule"
import NotFound from "./view/notfound/NotFound"
import Register from "./view/register/Register"
import Wechat from "./view/wechat/wechat"
import Guests from "./view/guests/guests";

// agenda
import PhDEngAgenda from "./view/agenda/phdEngAgenda";
import PhDNatSciAgenda from "./view/agenda/phdNatSciAgenda";
import PhDMedAgenda from "./view/agenda/phdMedAgenda";


/* eslint-disable */

class App extends Component {
    render() {

        return (
            <div className="App1">
                <NavBar/>
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <Home/>}/>
                    <Route
                        exact path="/schedule"
                        render={() => <Schedule/>}/>
                    <Route
                        exact path="/register"
                        render={() => <Register/>}/>
                    <Route
                        exact path="/wechat"
                        render={() => <Wechat/>}/>
                    <Route
                        exact path="/guests"
                        render={() => <Guests/>}/>
                    {/* Agenda */}
                    <Route
                        exact path="/phd_eng_agenda"
                        render={() => <PhDEngAgenda />}/>
                    <Route
                        exact path="/phd_natsci_agenda"
                        render={() => <PhDNatSciAgenda />}/>
                    <Route
                        exact path="/phd_med_agenda"
                        render={() => <PhDMedAgenda />}/>
                    <Route
                        render={() => <NotFound/>}/>
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
