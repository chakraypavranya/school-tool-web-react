import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import FullCalender from '../UI/FullCalender';

export class Home extends Component {
  
  handleDateClick = (arg) => {
    console.log('Day Clicked', arg);
  }

  handleEventClick = () =>{
    console.log('On Event Clicked');
  }


  handleAddEventBtnClick = () => {
    console.log('New Event Clicked');
  }


  render() {
    const {firstName, lastName, image_Url} = this.props.googleUser;
    
    return (
      <React.Fragment>
        <Header firstName={firstName} lastName={lastName} image_Url={image_Url}/>
        <div className="ui grid container">
          
          <div className="twelve wide column calendar">
            <FullCalender
              calendarEvents = {this.props.calendarEvents}
              handleDateClick = {this.handleDateClick}
              buttonText = "New Event"
              handleAddEventBtnClick = {this.handleAddEventBtnClick}
              handleEventClick = {this.handleEventClick}
            />
          </div>
         
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) =>{
  return{ googleUser: state.auth.googleUser, calendarEvents : state.school.calendarEvents}
}

export default connect(mapStateToProps)(Home)
