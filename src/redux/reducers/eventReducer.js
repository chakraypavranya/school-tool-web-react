import {GET_EVENTS,CREATE_EVENT,GET_EVENT_DETAILS,UPDATE_EVENT,DELETE_EVENT} from '../../resources/types';

const INITIAL_STATE = {
    
};

const populateFullCalender = (data) =>{
    
    const allDayEvent = function(id, title,start,end, allDay){
        this.id = id;
        this.title = title;
        this.start = start;
        this.end = start === end ? end : new Date(end).setDate((new Date(end)).getDate()+1);
        this.allDay = allDay;
        
    }
    
    const recurringEvent = function(id, title,start,end, allDay , startTime, endTime){
        this.id = id;
        this.title = title; 
        this.startTime = startTime;
        this.endTime = endTime;
        this.startRecur = start;
        this.endRecur = end;
        this.allDay = allDay;
    }

    return  data.map((e)=>{
        if(e.isDay){
            return new allDayEvent(e.id, e.name,e.startDate,e.endDate, e.isDay);
        }
        else{
            const newDate = new Date(e.endDate);
            const endDate = newDate.setDate(newDate.getDate());
            return new recurringEvent(e.id, e.name,e.startDate,endDate, e.isDay, e.startTime, e.endTime);
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
        case DELETE_EVENT:
            return {...state}
        default:
            return {...state}
    }
};