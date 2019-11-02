import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

export class RegistrationFormPage1 extends Component {
  
  render() {
    const { handleSubmit, title } = this.props;

    return (
      <form className="ui form error" onSubmit={handleSubmit}>
        <h2 className="ui dividing header">{title}</h2>
        <Field
          name="firstName"
          type="text"
          component={renderField}
          label="School Name"
        />
        <Field name="email" type="email" component={renderField} label="Email" />
        <Field name="identificationNumber" type="text" component={renderField} label="License No" />
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
  form: 'SchoolRegistration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegistrationFormPage1)
