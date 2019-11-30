import {GET_SCHOOL_DETAILS,REGISTER_GUARDIAN, GET_GUARDIAN_DETAILS, GET_GUARDIANS} from '../../resources/types';

const INITIAL_STATE = {
    
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case GET_SCHOOL_DETAILS:
            return {...state, school: action.payload}
        case GET_GUARDIANS:
            return {...state, guardians: action.payload}
        case GET_GUARDIAN_DETAILS:
            return {...state, guardian: action.payload}
        case REGISTER_GUARDIAN:
            return {...state}
        default:
            return {...state}
    }
};