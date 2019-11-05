import React from 'react';
import renderField from '../../../resources/renderField';
import { Field, reduxForm  } from 'redux-form';

import validate from '../../../resources/validate';



export class EventForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="ui segment">
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
          {
            this.props.renderFormButton()
          }
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'newEvent',
  validate
})(EventForm)