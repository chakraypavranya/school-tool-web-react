import React, { Component } from 'react';
import {connect} from 'react-redux';
import { formValueSelector  } from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import Modal from '../../Modal';
import history from '../../../history';
import EventForm from './EventForm';

import {getEvent,updateEvent} from '../../../redux/actions/event';
import {populateEventObj} from '../../../resources/helper';

import {
    SCHOOL_HOME_URL
} from '../../../resources/urls';



export class EditEvent extends Component {

  onSubmit = (formValues) =>{
    const id = this.props.event.id;
    const event = populateEventObj({...formValues,id});
    
    this.props.updateEvent(event, this.props.schoolId);
  }

  renderFormButton = () =>{
    const endDate =  _.get(this.props.event, "endDate");
    const isDisabled = (new Date(endDate)) < (new Date())?'disabled':'';

    return(
      <>
        <button className={`ui primary button right floated ${isDisabled}`}>Update</button>
        <Link to={SCHOOL_HOME_URL} className="ui button">Cancel</Link>
      </>
    )
  }

  renderContent(){
    const endDate =  _.get(this.props.event, "endDate");
    const isDisabled = (new Date(endDate)) < (new Date());

    return(
      <EventForm initialValues={_.pick(this.props.event,'name','description','isDay','startDate','endDate','startTime','endTime')} 
          onSubmit={this.onSubmit} isDay={this.props.isDay} renderFormButton={this.renderFormButton} isDisabled={isDisabled}
      />
    )
  }
    
  render() {
    return (
        <Modal 
          title="Edit Event" 
          content={this.renderContent()}
          onDismiss={()=> history.push(SCHOOL_HOME_URL)}/>
    )
  }
}

const selector = formValueSelector('newEvent');

const mapStateToProps = (state) =>{
  const isDay = selector(state, 'isDay');
  const schoolId = state.auth.user.id;
  const event = state.events.event;
  return{isDay,schoolId,event}
}


export default connect(mapStateToProps,{getEvent,updateEvent})(EditEvent)
