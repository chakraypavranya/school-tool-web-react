import React from 'react';
import { Field } from 'redux-form';
import renderField from '../Registration/renderField';

export default function EventForm(props) {
  return (
    <form className="ui form error">
        <Field
        name="name"
        type="text"
        component={renderField}
        label="Event Name"
        />
        <Field name="description" type="text" component={renderField} label="Description" />
        <Field name="startDate" type="date" component={renderField} label="Start Date" />
        <Field name="endDate" type="date" component={renderField} label="End Date" />
       
        <Field name="isDay" type="checkbox" component={renderField} label="All Day" onClick={props.handleAllDay} />
    </form>
  )
}
