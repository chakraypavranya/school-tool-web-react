import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from './validate';
import renderField from './renderField';

export class RegistrationFormPage2 extends Component {
  renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

  render() {
    const { handleSubmit, previousPage, title } = this.props
    return (
      <form className="ui form error" onSubmit={handleSubmit}>
        <h2 className="ui dividing header">{title}</h2>
        <Field name="addressLine1" type="text" component={renderField} label="Address Line 1" />
        <Field name="addressLine2" type="text" component={renderField} label="Address Line 2" />
        <Field name="city" type="text" component={renderField} label="City" />
        <Field name="state" type="text" component={renderField} label="State/Province" />
        <Field name="country" type="text" component={renderField} label="Country" />
        <Field name="pincode" type="text" component={renderField} label="Pin Code" />
        <Field name="contactNo" type="text" component={renderField} label="Contact No" />

        <button type="button" className="ui button secondary" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="ui button primary">
          Next
        </button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'SchoolRegistration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(RegistrationFormPage2)
