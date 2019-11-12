import history from '../../history';
import {getTokenId} from '../../resources/helper';
import {SchoolToolApi, getConfigJson}from '../../apis/SchoolTool';

import {
    GET_EVENTS,
    CREATE_EVENT,
    GET_EVENT_DETAILS,
    UPDATE_EVENT,
    GET_EVENT_TYPES
    
} from '../../resources/types';

import {
    SCHOOL_HOME_URL,
    EDIT_EVENT_URL
} from '../../resources/urls';

export const getEventTypes = () => async(dispatch)=>{
    const response = await SchoolToolApi.get('/school/geteventtypes',
    getConfigJson(getTokenId()));

    dispatch({type: GET_EVENT_TYPES, payload: response.data.values});
}

export const createEvent =(values,schoolID) => async (dispatch)=>{
    let routeUrl = SCHOOL_HOME_URL;
    
    const response = await SchoolToolApi.post('/school/addevent', {...values,schoolID},
                            getConfigJson(getTokenId()));
    
    
    dispatch({type: CREATE_EVENT, payload: response.data.value});
    
    
    history.push(routeUrl);
}

export const getEvents = (id) => async (dispatch) =>{
    let routeUrl = SCHOOL_HOME_URL;
    const id_token = getTokenId();

    try{
        const response = await SchoolToolApi.get(`/school/getevents?schoolID=${id}`, getConfigJson(getTokenId()));
        dispatch({type: GET_EVENTS , payload: response.data.values});
        console.log(response.data.values);
        
        history.push(routeUrl);
    }
    catch(error){
        if(error.message==='Network Error'){
            console.log(error.message);
        }
        else{
            console.log(error);
        }
    }
   
}

export const getEvent =(id) => async (dispatch)=>{
    let routeUrl = EDIT_EVENT_URL;

    try{
        const response = await SchoolToolApi.get(`/school/getevent?eventId=${id}`, getConfigJson(getTokenId()));
        dispatch({type: GET_EVENT_DETAILS , payload: response.data.value});
        history.push(routeUrl);
    }
    catch(error){
        if(error.message==='Network Error'){
            console.log(error.message);
        }
        else{
            console.log(error);
        }
    }
    history.push(routeUrl);
}

export const updateEvent =(values,schoolID) => async (dispatch)=>{
    let routeUrl = SCHOOL_HOME_URL;
       
    const response = await SchoolToolApi.put('/school/updateevent', {...values,schoolID},
                            getConfigJson(getTokenId()));
    
    
    dispatch({type: UPDATE_EVENT, payload: response.data.value});
    
    
    history.push(routeUrl);
}