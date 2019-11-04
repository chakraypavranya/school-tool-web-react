import {GET_EVENTS,CREATE_EVENT,GET_EVENT_DETAILS,UPDATE_EVENT,DELETE_EVENT} from '../../resources/types';

const INITIAL_STATE = {
    
};

const populateFullCalender = (data) =>{
    
    const event = function(id, title,start,end, allDay , startTime, endTime){
        this.id = id;
        this.title = title;
        this.start = allDay? start: new Date(startTime);
        this.end = allDay? end: new Date(endTime);
        this.allDay = allDay;
    }

    return  data.map((e)=>{
        return new event(e.id, e.name,e.startDate,e.endDate, e.isDay, e.startTime, e.endTime);
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