import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from '../Layout/Header';
import MainLayout from '../Layout/MainLayout';
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
    //console.log('Day Clicked', arg);
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
        <React.Fragment>
            <div className="ui row">
              <span className="ui tag holiday label u-margin-right-small u-margin-bottom-small">Holiday</span>
              <span className="ui tag exam    label u-margin-right-small u-margin-bottom-small">Exam</span>
              <span className="ui tag sports  label u-margin-right-small u-margin-bottom-small">Sport</span>
              <span className="ui tag social  label u-margin-right-small u-margin-bottom-small">Social</span>
              <span className="ui tag cultural label u-margin-right-small u-margin-bottom-small">Cutural</span>
              <span className="ui tag others  label u-margin-right-small u-margin-bottom-small">Others</span>
            </div>
            <FullCalender
              calendarEvents = {this.props.calendarEvents}
              handleDateClick = {this.handleDateClick}
              buttonText = "New Event"
              handleAddEventBtnClick = {this.handleAddEventBtnClick}
              handleEventClick = {this.handleEventClick}
            />
        </React.Fragment>
        
      )
    }
  }

  render() {
    const {firstName, lastName, image_Url} = this.props.googleUser;
    
    return (
      <React.Fragment>
        <MainLayout>
          <Header firstName={firstName} lastName={lastName} image_Url={image_Url}/>
          <div className="ui container calendar">
              
              {this.renderCalender()}
          </div>
        </MainLayout>
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
