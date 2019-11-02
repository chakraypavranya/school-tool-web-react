import React, { Component } from 'react';
import {connect} from 'react-redux';
import {registerSchool} from '../../../redux/actions/school';

export class RegistrationFormSubmit extends Component {

  registerSchool=()=>{
    this.props.registerSchool(this.props.schoolDetails, this.props.googleUser);
  }

  render() {
    const { title, previousPage, schoolDetails } = this.props;

    return (
       <div className="ui form">
        <h2 className="ui dividing header">{title}</h2>
        <div className="ui segment">
          <h4 className="ui dividing header">School Details</h4>
          <div className="inline fields">
              <label>School Name: </label>
              <div className="field">
                  <span>{schoolDetails.firstName}</span>
              </div>
              <label>Email : </label>
              <div className="field">
                  <span>
                      { schoolDetails.email}
                  </span>
              </div>
              <label>License No : </label>
              <div className="field">
                  <span>
                      { schoolDetails.identificationNumber}
                  </span>
              </div>
          </div>
          <h4 className="ui dividing header">Address Details</h4>
          <div className="inline fields">
            <label>Address : </label>
              <div className="field">
                  <span>
                      { schoolDetails.addressLine1 !== undefined ? `${schoolDetails.addressLine1} , ${schoolDetails.addressLine2}` : ''}
                  </span>
              </div>
              <div className="field">
                  <label>City : </label>
                  <span>{schoolDetails.city}</span>
              </div>
          </div>
          <div className="inline fields">
            <div className="field">
                <label>State : </label>
                <span>{schoolDetails.state}</span>
            </div>
            <div className="field">
                <label>Country : </label>
                <span>{schoolDetails.country}</span>
            </div>
            <div className="field">
                <label>Zip : </label>
                <span>{schoolDetails.pincode}</span>
            </div>
            <div className="field">
                <label>Contact No : </label>
                <span>{schoolDetails.phoneNumber}</span>
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
}

const mapStateToProps = (state)=>{
  return{schoolDetails: state.form.SchoolRegistration.values, googleUser: state.auth.googleUser}
}

export default connect(mapStateToProps,{registerSchool})(RegistrationFormSubmit)
