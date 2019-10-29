import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer // code will throw error, if formReducer aka reducer is mapped with any other key than form
    
});