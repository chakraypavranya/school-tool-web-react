import React, { Component } from 'react';
import GoogleBtn from '../GoogleBtn';
import './login.scss';

export class Login extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="login-content">
          <div className="heading">
            <h1 className="heading-title">School Tool</h1>
            <h3 className="heading-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error aspernatur?</h3>
          </div>
          <div className="landing-body">
            <div className="search-box">
              <div className="ui icon input">
                <input type="text" placeholder="Search School Here..." />
                <i className="inverted circular search link icon"></i>
              </div>
            </div>
            <div className="content-social">
              <GoogleBtn/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
