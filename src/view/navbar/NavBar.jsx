import React, {Component} from "react";
import {Redirect} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Item from './item'
import Lead from './lead'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu_class: '',
            redirect: 0,
        }
    }

    setToggleTopMenuClass = () => {
        if (this.state.menu_class === '') {
            this.setState({
                menu_class: 'toggled',
            })
        } else {
            this.setState({
                menu_class: '',
            })
        }
    };

    setRedirectSchedule = () => {
        this.setState({
            redirect: 2
        })
    };

    setRedirectRegister = () => {
        this.setState({
            redirect: 1
        })
    };

    setRedirectFile = () => {
        this.setState({
            redirect: 3
        })
    };

    setRedirectWechat = () => {
        this.setState({
            redirect: 15
        })
    };

    setRedirectPhdEngAgenda = () => {
        this.setState({
            redirect: 10
        })
    };

    setRedirectPhdNatSciAgenda = () => {
        console.log("hit1");
        this.setState({
            redirect: 11
        })
    };

    setRedirectPhdMedAgenda = () => {
        this.setState({
            redirect: 12
        })
    };

    setRedirectImperialPitchAgenda = () => {
        this.setState({
            redirect: 13
        })
    };

    renderRedirect = () => {
        if (this.state.redirect === 2) {
            return <Redirect to='/schedule'/>;
        } else if (this.state.redirect === 1) {
            return <Redirect to='/register'/>;
        } else if (this.state.redirect === 3) {
            return <Redirect to='/file'/>;
        } else if (this.state.redirect === 10) {
            return <Redirect to='/phd_eng_agenda'/>;
        } else if (this.state.redirect === 11) {
            return <Redirect to='/phd_natsci_agenda'/>;
        } else if (this.state.redirect === 12) {
            return <Redirect to='/phd_med_agenda'/>;
        } else if (this.state.redirect === 13) {
            return <Redirect to='/imperial_pitch_agenda'/>;
        } else if (this.state.redirect === 15) {
            window.location.href = "https://mp.weixin.qq.com/s/_D6d1atBM0vOrlssY-dQ6w";
        } else {

        }
    };

    render() {
        let top_menu_class = `top-menu ${this.state.menu_class}`
        return (

            <div>
                {this.renderRedirect()}
                <BrowserView>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid summit-blue">

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="summit-white"><a href="/">Home</a></li>
                                    <li className="summit-white"><a
                                        href="https://mp.weixin.qq.com/s/_D6d1atBM0vOrlssY-dQ6w">About 2019 Summit</a>
                                    </li>
                                    <li><a href="faqs">FAQs</a></li>
                                    <li className="dropdown">
                                        <a href="more" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                           aria-haspopup="true" aria-expanded="false">More <span
                                            className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="more1">Action</a></li>
                                            <li><a href="more2">Another action</a></li>
                                            <li><a href="more3">Something else here</a></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="more4">Separated link</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="zh">中文</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <nav className="navbar navbar-default">
                        <div className="container-fluid white-background">

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-left">
                                    <a className="logo-container" href="/">
                                        <img className="navbar-logo" src="https://i.imgur.com/RbGECQ1.png" alt="Brand"/>
                                    </a>
                                </ul>
                                <ul className="nav navbar-nav navbar-right navbar-ul">
                                    <li className="navbar-text"><a onClick={this.setRedirectSchedule}>SCHEDULE</a></li>
                                    <li className="navbar-text"><a onClick={this.setRedirectRegister}>REGISTER</a></li>
                                    <li className="navbar-text"><a href="news">NEWS</a></li>
                                    <li className="navbar-text"><a href="docs">DOCUMENTS & MATERIALS</a></li>
                                    <li className="navbar-text"><a href="media">MEDIA INFOMATION</a></li>
                                    <li className="navbar-text"><a href="events">RELATED EVENTS</a></li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </BrowserView>
                <MobileView>
                    <div>
                        <div className={top_menu_class}>
                            <a className="jumpToHome" href="/">〈 Home</a>
                            <FontAwesomeIcon
                                icon={faBars}
                                className='top-menu-icon fa-3x'
                                onClick={this.setToggleTopMenuClass}/>

                            <div className='left'>
                                <a onClick={this.setRedirectPhdEngAgenda}>
                                    <Item text='PhD Forum Engineering Agenda'/>
                                </a>
                                <a onClick={this.setRedirectPhdNatSciAgenda}>
                                    <Item text='PhD Forum Natural Science Agenda'/>
                                </a>
                                <a onClick={this.setRedirectPhdMedAgenda}>
                                    <Item text='PhD Forum Medicine Agenda'/>
                                </a>
                            </div>
                            <div className='right'>
                                <a onClick={this.setRedirectImperialPitchAgenda}>
                                    <Item text='Imperial Pitch Competition'/>
                                </a>
                            </div>

                            <div className='clear-fix'/>
                        </div>
                    </div>
                </MobileView>
            </div>
        );
    }
}

export default NavBar;
