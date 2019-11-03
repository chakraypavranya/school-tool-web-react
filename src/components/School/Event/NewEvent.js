import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm,formValueSelector  } from 'redux-form';
import {Link} from 'react-router-dom';

import Modal from '../../Modal';
import history from '../../../history';
import validate from '../Registration/validate';
import renderField from '../Registration/renderField';

import {createEvent} from '../../../redux/actions/school';

import {
    SCHOOL_HOME_URL
} from '../../../resources/urls';

export class NewEvent extends Component {

  createEvent = (formValues) =>{
    this.props.createEvent(formValues, this.props.schoolId);
  }

    renderActions(){
        return(
          <>
            <button className="ui button primary">Create</button>
            <Link to={SCHOOL_HOME_URL} className="ui button">Cancel</Link>
          </>
        )
      }
    
      renderContent(){

        return(
          <form className="ui form error" onSubmit={this.props.handleSubmit(this.createEvent)}>
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
    
      render() {
        return (
            <Modal 
              title="Create New Event" 
              content={this.renderContent()}
              onDismiss={()=> history.push(SCHOOL_HOME_URL)}/>
        )
      }
}

const form = reduxForm({
  form: 'newEvent',
  validate
})(NewEvent)


const selector = formValueSelector('newEvent');

const mapStateToProps = (state) =>{
  const isDay = selector(state, 'isDay');
  const schoolId = state.auth.user.id;
  return{isDay,schoolId}
}

export default connect(mapStateToProps,{createEvent})(form)
