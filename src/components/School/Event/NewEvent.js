import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';

import Modal from '../../Modal';
import history from '../../../history';
import validate from '../Registration/validate';
import renderField from '../Registration/renderField';

import {
    SCHOOL_HOME_URL
} from '../../../resources/urls';

export class NewEvent extends Component {

  showEventTime(){

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
            <Field name="isDay" type="checkbox" component={renderField} label="All Day"/>
          </form>
        )
      }
    
      render() {
        return (
            <Modal 
              title="Create New Event" 
              content={this.renderContent()}
              actions={this.renderActions()}
              onDismiss={()=> history.push(SCHOOL_HOME_URL)}/>
        )
      }
}

const form = reduxForm({
  form: 'NewEvent',
  validate
})(NewEvent)


export default connect()(form)
