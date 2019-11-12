import {GET_EVENTS,CREATE_EVENT,GET_EVENT_DETAILS,UPDATE_EVENT,GET_EVENT_TYPES } from '../../resources/types';

const INITIAL_STATE = {
    
};

const populateFullCalender = (data) =>{
    
    const allDayEvent = function(id, title,start,end, allDay,eventColor){
        this.id = id;
        this.title = title;
        this.start = start;
        this.end = start === end ? end : new Date(end).setDate((new Date(end)).getDate()+1);
        this.allDay = allDay;
        this.color = eventColor;
        this.textColor  = 'black'

        
    }
    
    const recurringEvent = function(id, title,start,end, allDay , startTime, endTime,eventColor){
        this.id = id;
        this.title = title; 
        this.startTime = startTime;
        this.endTime = endTime;
        this.startRecur = start;
        this.endRecur = end;
        this.allDay = allDay;
        this.color = eventColor;
        this.textColor  = 'black'
    }

    return  data.map((e)=>{
        if(e.isDay){
            return new allDayEvent(e.id, e.name,e.startDate,e.endDate, e.isDay,e.eventColor);
        }
        else{
            const newDate = new Date(e.endDate);
            const endDate = newDate.setDate(newDate.getDate());
            return new recurringEvent(e.id, e.name,e.startDate,endDate, e.isDay, e.startTime, e.endTime,e.eventColor);
        }
    });

}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_EVENTS:
            return {...state, calendarEvents: populateFullCalender(action.payload)}
        case GET_EVENT_DETAILS:
            return {...state, event: action.payload}
        case CREATE_EVENT:
            return {...state}
        case UPDATE_EVENT:
            return {...state}
        case GET_EVENT_TYPES:
            return {...state , eventTypes: action.payload}
        default:
            return {...state}
    }
};