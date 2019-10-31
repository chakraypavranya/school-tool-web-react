import React, { Component } from 'react';
import GoogleBtn from '../GoogleBtn';
import './login.scss';

export class Login extends Component {
  render() {
    return (
      <div className="landing-container">
      <div className="heading">
        <h1 className="heading-title">School Tool</h1>
        <h3 className="heading-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error aspernatur?</h3>
      </div>
      <div className="landing-body">
        <div className="search-box">
          <input type="text" className="text search-text" placeholder="Search School Here" />
          <a href="#" className='btn btn-search btn-blue'>Search &crarr;</a>
        </div>
      </div>
      <GoogleBtn/>
      </div>
    )
  }
}

export default Login
