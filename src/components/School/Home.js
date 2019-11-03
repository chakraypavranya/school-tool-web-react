import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import FullCalender from '../UI/FullCalender';

import history from '../../history';

import{getEvents} from '../../redux/actions/school';

import {
  NEW_EVENT_URL
} from '../../resources/urls';

export class Home extends Component {
  
  componentDidMount(){
    this.props.getEvents(this.props.schoolId)
  }

  handleDateClick = (arg) => {
    console.log('Day Clicked', arg);
  }

  handleEventClick = () =>{
    console.log('On Event Clicked');
  }


  handleAddEventBtnClick = () => {
    console.log('New Event Clicked');
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
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{ googleUser: state.auth.googleUser, 
          calendarEvents : state.school.calendarEvents,
          schoolId: state.auth.user.id
        }
}

export default connect(mapStateToProps, {getEvents})(Home)
