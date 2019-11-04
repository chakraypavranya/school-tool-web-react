import React, { Component } from 'react';
import {connect} from 'react-redux';
import { formValueSelector  } from 'redux-form';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import Modal from '../../Modal';
import history from '../../../history';
import EventForm from './EventForm';

import {getEvent,updateEvent} from '../../../redux/actions/event';

import {
    SCHOOL_HOME_URL
} from '../../../resources/urls';



export class EditEvent extends Component {

  onSubmit = (formValues) =>{
    this.props.updateEvent(formValues, this.props.schoolId);
  }

  renderFormButton = () =>{
    return(
      <>
        <button className="ui button primary">Update</button>
        <Link to={SCHOOL_HOME_URL} className="ui button">Cancel</Link>
      </>
    )
  }

  renderContent(){
    let startDate = _.get(this.props.event, "startDate");
    const endDate =  _.get(this.props.event, "endDate");

    _.set(this.props.event, "startDate", '2019-05-12');

   
    console.log(startDate,this.props.event);

    return(
      <EventForm initialValues={_.pick(this.props.event,'name','description','isDay','startDate','endDate')} 
          onSubmit={this.onSubmit} isDay={this.props.isDay} renderFormButton={this.renderFormButton}
      />
    )
  }
    
  render() {
    console.log(this.props);
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
