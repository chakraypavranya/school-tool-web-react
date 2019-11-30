import history from '../../history';
import {getTokenId} from '../../resources/helper';
import {SchoolToolApi, getConfigJson}from '../../apis/SchoolTool';

import {
    GET_GUARDIANS,
    GET_GUARDIAN_DETAILS,
    UPDATE_GUARDIANS
    
} from '../../resources/types';

import {
    SCHOOL_GUARDIAN_URL,
    EDIT_EVENT_URL
} from '../../resources/urls';

export const getGuardians = (id) => async (dispatch) =>{
    let routeUrl = SCHOOL_GUARDIAN_URL;
    const id_token = getTokenId();

    try{
        const response = await SchoolToolApi.get(`/School/getguardians?schoolID=${id}`, getConfigJson(getTokenId()));
        dispatch({type: GET_GUARDIANS , payload: response.data.values});
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
