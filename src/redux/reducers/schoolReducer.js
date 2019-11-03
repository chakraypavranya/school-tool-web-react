import {GET_SCHOOL_DETAILS,GET_SCHOOL_EVENTS} from '../../resources/types';

const INITIAL_STATE = {
    
};

const populateFullCalender = (data) =>{
    
    const event = function(title,start,end, allDay , startTime, endTime){
        this.title = title;
        this.start = allDay? start: new Date(startTime);
        this.end = allDay? end: new Date(endTime);
        this.allDay = allDay;
    }

    return  data.map((e)=>{
        return new event(e.name,e.startDate,e.endDate, e.isDay, e.startTime, e.endTime);
    });

}

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_SCHOOL_DETAILS:
            return {...state, school: action.payload}
        case GET_SCHOOL_EVENTS:
            
            return {...state, calendarEvents: populateFullCalender(action.payload)}
        default:
            return {...state}
    }
};