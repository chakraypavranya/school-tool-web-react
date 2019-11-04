import React, { Component } from 'react';
import {connect} from 'react-redux';
import { formValueSelector  } from 'redux-form';

import Modal from '../../Modal';
import history from '../../../history';
import EventForm from './EventForm';

import {createEvent} from '../../../redux/actions/event';

import {
    SCHOOL_HOME_URL
} from '../../../resources/urls';



export class NewEvent extends Component {

  onSubmit = (formValues) =>{
    this.props.createEvent(formValues, this.props.schoolId);
  }

  renderContent(){

    return(
      <EventForm onSubmit={this.onSubmit} isDay={this.props.isDay}/>
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

const selector = formValueSelector('newEvent');

const mapStateToProps = (state) =>{
  const isDay = selector(state, 'isDay');
  const schoolId = state.auth.user.id;
  return{isDay,schoolId}
}

export default connect(mapStateToProps,{createEvent})(NewEvent)
