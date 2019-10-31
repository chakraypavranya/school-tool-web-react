import React, { Component } from 'react';
import RegistrationForm from './Registration/RegistrationForm';
import Header from './Header';

export class Register extends Component {

  render() {
    return (
      <div className="ui container">
        <Header/>
        <h2 className="header">Register Your School</h2>
        <RegistrationForm />
      </div>
    )
  }
}

export default Register
