import React, { Component } from 'react';
import RegistrationForm from './Registration/RegistrationForm';
import Header from '../Layout/Header';
import {connect} from 'react-redux';

export class Register extends Component {

  render() {
    const {firstName, lastName, image_Url} = this.props.googleUser;
    return (
      <React.Fragment>
        <Header firstName={firstName} lastName={lastName} image_Url={image_Url}/>
        <div className="ui container">
          <h2 className="header">Register Your School</h2>
          <RegistrationForm />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{googleUser: state.auth.googleUser}
}
export default connect(mapStateToProps)(Register)
