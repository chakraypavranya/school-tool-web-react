import {GET_SCHOOL_DETAILS} from '../../resources/types';


const INITIAL_STATE = {
    calendarEvents: [ // initial event data
        { title: 'Event Now', start: new Date() }
      ]
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_SCHOOL_DETAILS:
            return {...state, school: action.payload}
        default:
            return {...state}
    }
};