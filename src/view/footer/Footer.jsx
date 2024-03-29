import React, {Component} from "react";
import {Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faEdit, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

class NavBar extends Component {

    state = {
        redirect: 0
    }

    setRedirectSchedule = () => {
        this.setState({
            redirect: 2
        })
    }

    setRedirectRegster = () => {
        this.setState({
            redirect: 1
        })
    }

    setRedirectFile = () => {
        this.setState({
            redirect: 3
        })
    }

    renderRedirect = () => {
        if (this.state.redirect == 2) {
            return <Redirect to='/schedule'/>
        } else if (this.state.redirect == 1) {
            return <Redirect to='/register'/>
        } else if (this.state.redirect == 3) {
            return <Redirect to='/guests'/>
        } else {

        }
    }

    render() {
        return (

            <div>
                {this.renderRedirect()}
                <BrowserView>
                    <footer className="page-footer font-small blue pt-4">
                        <div chassName="container-fluid text-center text-md-left">
                            <div chassName="row">
                                <div chassName="col-md-6 mt-md-0 mt-3">
                                    <h5 chassName="text-uppercase">Footer Content</h5>
                                    <p>Here you can use rows and columns to organize your footer content.</p>
                                </div>
                                <hr chassName="clearfix w-100 d-md-none pb-3"/>
                                <div chassName="col-md-3 mb-md-0 mb-3">
                                    <h5 chassName="text-uppercase">Links</h5>
                                    <ul chassName="list-unstyled">
                                        <li>
                                            <a href="#!">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                                <div chassName="col-md-3 mb-md-0 mb-3">
                                    <h5 chassName="text-uppercase">Links</h5>

                                    <ul chassName="list-unstyled">
                                        <li>
                                            <a href="#!">Link 1</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 2</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 3</a>
                                        </li>
                                        <li>
                                            <a href="#!">Link 4</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="footer-copyright text-center py-3">© 2019 Copyright:
                            <a href="/"> ICCSSA</a>
                        </div>
                    </footer>
                </BrowserView>
                <MobileView>
                    <footer className="mobile-footer font-small blue pt-4">
                        <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className='calendar-icon fa-3x'
                            onClick={this.setRedirectSchedule}/>
                        <FontAwesomeIcon
                            icon={faEdit}
                            className='edit-icon fa-3x'
                            onClick={this.setRedirectRegster}/>
                        <FontAwesomeIcon
                            icon={faAddressCard}
                            className='file-icon fa-3x'
                            onClick={this.setRedirectFile}/>
                    </footer>
                </MobileView>
            </div>
        );
    }
}

export default NavBar;
