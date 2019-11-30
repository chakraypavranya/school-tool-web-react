import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registerGuardian} from '../../../redux/actions/school';
import {reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';


import {
  SCHOOL_GUARDIAN_URL
} from '../../../resources/urls';

export class RegistrationFormSubmit extends Component {

  registerSchool=()=>{
    this.props.registerGuardian(this.props.guardianDetails, this.props.schoolID);
    this.props.reset();
  }

  render() {
    const { title, previousPage, guardianDetails: guardianDetails } = this.props;

     if(guardianDetails){
      return (
        <div className="ui form">
          <h2 className="ui dividing header">{title}</h2>
          <div className="ui segment">
            <h4 className="ui dividing header">School Details</h4>
            <div className="inline fields">
                <label>First Name: </label>
                <div className="field">
                    <span>{guardianDetails.firstName}</span>
                </div>
                <label>Last Name : </label>
                <div className="field">
                    <span>
                        { guardianDetails.lastName}
                    </span>
                </div>
                <label>Email : </label>
                <div className="field">
                    <span>
                        { guardianDetails.emailID}
                    </span>
                </div>
            </div>
            <h4 className="ui dividing header">Address Details</h4>
            <div className="inline fields">
              <label>Address : </label>
                <div className="field">
                    <span>
                        { guardianDetails.addressLine1 !== undefined ? `${guardianDetails.addressLine1} , ${guardianDetails.addressLine2}` : ''}
                    </span>
                </div>
                <div className="field">
                    <label>City : </label>
                    <span>{guardianDetails.city}</span>
                </div>
            </div>
            <div className="inline fields">
              <div className="field">
                  <label>State : </label>
                  <span>{guardianDetails.state}</span>
              </div>
              <div className="field">
                  <label>Country : </label>
                  <span>{guardianDetails.country}</span>
              </div>
              <div className="field">
                  <label>Zip : </label>
                  <span>{guardianDetails.pincode}</span>
              </div>
              <div className="field">
                  <label>Contact No : </label>
                  <span>{guardianDetails.phoneNumber}</span>
              </div>
            </div>
          </div>
          <button type="button" className="ui button secondary" onClick={previousPage}>
            Previous
          </button>
          <button type="button" className="ui button primary" onClick={this.registerSchool}>
            Submit
          </button>
        </div>
      )
    }
    else{
      return(
        <Redirect to={SCHOOL_GUARDIAN_URL}/>
      )
    }
  }
}

const mapStateToProps = (state)=>{
  return{guardianDetails: state.form.GuardianRegistration.values, schoolID: state.auth.user.id}
}

const submitForm =  reduxForm({
  form: 'GuardianRegistration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegistrationFormSubmit)

export default connect(mapStateToProps,{registerGuardian})(submitForm)
