import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import FullCalender from '../UI/FullCalender';
import InlineLoader from '../UI/InlineLoader';

import history from '../../history';

import{getEvents,getEvent} from '../../redux/actions/event';

import {
  NEW_EVENT_URL
} from '../../resources/urls';


export class Home extends Component {
  
  state={
    isLoading: true
  }

  componentDidMount(){
    this.props.getEvents(this.props.schoolId)
  }

  componentDidUpdate(prevPorps){
    if(this.props.calendarEvents !== prevPorps.calendarEvents){
      this.setState({isLoading:false});
    }
  }

  handleDateClick = (arg) => {
    console.log('Day Clicked', arg);
  }

  handleEventClick = (info) =>{
    this.setState({isLoading:true});
    this.props.getEvent(info.event.id);
  }


  handleAddEventBtnClick = () => {
    history.push(NEW_EVENT_URL)
  }


  renderCalender(){
    if(this.props.calendarEvents){
      return(
        <FullCalender
              calendarEvents = {this.props.calendarEvents}
              handleDateClick = {this.handleDateClick}
              buttonText = "New Event"
              handleAddEventBtnClick = {this.handleAddEventBtnClick}
              handleEventClick = {this.handleEventClick}
        />
      )
    }
  }

  render() {
    const {firstName, lastName, image_Url} = this.props.googleUser;
    
    return (
      <React.Fragment>
        <Header firstName={firstName} lastName={lastName} image_Url={image_Url}/>
        <div className="ui grid container">
          <div className="column calendar">
            {this.renderCalender()}
          </div>
        </div>
        {this.state.isLoading &&
          <InlineLoader/>
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{ googleUser: state.auth.googleUser, 
          calendarEvents : state.events.calendarEvents,
          schoolId: state.auth.user.id
        }
}

export default connect(mapStateToProps, {getEvents,getEvent})(Home)
