import React, { Component } from 'react';
import RegistrationForm from './Registration/RegistrationForm';
import Header from './Header';
import {connect} from 'react-redux';

export class Register extends Component {

  render() {
    const {firstName, lastName, image_Url} = this.props.user;
    return (
      <div className="ui container">
         <Header firstName={firstName} lastName={lastName} image_Url={image_Url}/>
        <h2 className="header">Register Your School</h2>
        <RegistrationForm />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{user: state.auth.googleUser}
}
export default connect(mapStateToProps)(Register)
