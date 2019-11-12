import React, { Component } from 'react';
import {connect} from 'react-redux';
import { formValueSelector  } from 'redux-form';
import {Link} from 'react-router-dom';

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


  renderFormButton = () =>{
    return(
      <>
        <button className="ui primary button right floated">Create</button>
        <Link to={SCHOOL_HOME_URL} className="ui button">Cancel</Link>
      </>
    )
  }

  renderContent(){

    return(
      <EventForm initialValues={{isDay:false}} onSubmit={this.onSubmit} 
        isDay={this.props.isDay} renderFormButton={this.renderFormButton} />
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
