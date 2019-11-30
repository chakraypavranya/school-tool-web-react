import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../../resources/validate';
import renderField from '../../../resources/renderField';

export class RegistrationFormPage1 extends Component {
  
  render() {
    const { handleSubmit, title } = this.props;

    return (
      <form className="ui form error" onSubmit={handleSubmit}>
        <h2 className="ui dividing header">{title}</h2>
        
        <Field name="emailID" type="email" component={renderField} label="Email" />
        <Field name="firstName" type="text" component={renderField} label="First Name" />
        <Field name="lastName" type="text" component={renderField} label="Last Name" />
        <div>
          <button type="submit" className="ui button primary">
            Next
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'GuardianRegistration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegistrationFormPage1)
