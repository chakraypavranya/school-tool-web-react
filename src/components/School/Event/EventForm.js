import React from 'react';
import {connect} from 'react-redux';
import renderField from '../../../resources/renderField';
import { Field, reduxForm  } from 'redux-form';
import validate from '../../../resources/validate';

import {getEventTypes} from '../../../redux/actions/event';

export class EventForm extends React.Component {

  componentDidMount(){
    this.props.getEventTypes();
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    console.log(this.props.eventTypes);
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="ui segment">
          <Field name="eventTypeId" type="select" component={renderField} 
              label="Event Type" props={{disabled: this.props.isDisabled},{options:this.props.eventTypes}} />
           
          <Field
            name="name"
            type="text"
            component={renderField}
            label="Event Name"
            props={{disabled: this.props.isDisabled}}
          />
          <Field name="description" type="text" component={renderField} label="Description" props={{disabled: this.props.isDisabled}} />
         
          <Field name="startDate" type="date" component={renderField} label="Start Date" props={{disabled: this.props.isDisabled}} />
          <Field name="endDate" type="date" component={renderField} label="End Date" props={{disabled: this.props.isDisabled}} />
          { !this.props.isDay && 
            <React.Fragment>
            <Field name="startTime" type="time" component={renderField} label="Start Time" props={{disabled: this.props.isDisabled}} />
            <Field name="endTime" type="time" component={renderField} label="End Time" props={{disabled: this.props.isDisabled}} />
            </React.Fragment>
          }
          <Field name="isDay" type="checkbox" component={renderField} label="All Day" props={{disabled: this.props.isDisabled}} />
          {
            this.props.renderFormButton()
          }
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) =>{
  const eventTypes = state.events !== undefined? state.events.eventTypes: null;
  return {eventTypes}
}


const eventForm =  reduxForm({
  form: 'newEvent',
  validate
})(EventForm)

export default connect(mapStateToProps,{getEventTypes})(eventForm)