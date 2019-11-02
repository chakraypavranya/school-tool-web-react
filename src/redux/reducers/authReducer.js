import {REGISTER_SCHOOL, SIGN_IN, SIGN_OUT} from '../../resources/types';

const INITIAL_STATE = {
    isSignedIn: null,
    user: null,
};

export default (state=INITIAL_STATE, action) => {
    switch(action.type){
        case SIGN_IN:
            return {...state, isSignedIn: true, googleUser: action.payload.googleUser, user: action.payload.user}
        case SIGN_OUT:
            return {...state, isSignedIn:false, user: null, googleUser: null}
        case REGISTER_SCHOOL:
            return {...state, user: action.payload}
        default:
            return {...state}
    }
};