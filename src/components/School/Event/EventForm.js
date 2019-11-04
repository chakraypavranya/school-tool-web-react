import React from 'react';
import renderField from '../Registration/renderField';
import { Field, reduxForm  } from 'redux-form';
import {Link} from 'react-router-dom';
import validate from '../Registration/validate';

import {
  SCHOOL_HOME_URL
} from '../../../resources/urls';

export class EventForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Event Name"
        />
        <Field name="description" type="text" component={renderField} label="Description" />
        <Field name="startDate" type="date" component={renderField} label="Start Date" />
        <Field name="endDate" type="date" component={renderField} label="End Date" />
        { !this.props.isDay && 
          <React.Fragment>
          <Field name="startTime" type="time" component={renderField} label="Start Time" />
          <Field name="endTime" type="time" component={renderField} label="End Time" />
          </React.Fragment>
        }
        <Field name="isDay" type="checkbox" component={renderField} label="All Day" />
        <>
          <button className="ui button primary">Create</button>
          <Link to={SCHOOL_HOME_URL} className="ui button">Cancel</Link>
        </>
      </form>
    )
  }
}

export default reduxForm({
  form: 'newEvent',
  validate
})(EventForm)