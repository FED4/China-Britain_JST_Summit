import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt,faEdit,faFileAlt } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class NavBar extends Component {

  state = {
  redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/schedule' />
    }
  }

  render() {
    return (

      <div>
      {this.renderRedirect()}
      <BrowserView>
        <footer class="page-footer font-small blue pt-4">
          <div class="container-fluid text-center text-md-left">
            <div class="row">
              <div class="col-md-6 mt-md-0 mt-3">
                <h5 class="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
              </div>
              <hr class="clearfix w-100 d-md-none pb-3" />
              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Links</h5>
                <ul class="list-unstyled">
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
              <div class="col-md-3 mb-md-0 mb-3">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
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
          <footer class="mobile-footer font-small blue pt-4">
              <FontAwesomeIcon icon={faCalendarAlt} className='calendar-icon fa-3x' onClick={this.setRedirect}/>
              <FontAwesomeIcon icon={faEdit} className='edit-icon fa-3x' onClick={this.setToggleTopMenuClass}/>
              <FontAwesomeIcon icon={faFileAlt} className='file-icon fa-3x' onClick={this.setToggleTopMenuClass}/>
          </footer>
        </MobileView>
      </div>
    );
  }
}

export default NavBar;
