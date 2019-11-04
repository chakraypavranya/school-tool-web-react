import history from '../../history';
import {getTokenId} from '../../resources/helper';
import {SchoolToolApi, getConfigJson}from '../../apis/SchoolTool';

import {
    REGISTER_SCHOOL,
    GET_SCHOOL_EVENTS,
    CREATE_EVENT
    
} from '../../resources/types';

import {
    ROOT_URL,
    SCHOOL_HOME_URL
} from '../../resources/urls';


export const registerSchool = (values) =>async (dispatch) =>{
                        
    let routeUrl = ROOT_URL;
    const id_token = getTokenId();
    try{
        const response = await SchoolToolApi.post('/account/registerschool', {...values},
                            getConfigJson(id_token));
        dispatch({type: REGISTER_SCHOOL , payload: response.data.value});
    }
    catch (error) {
        if(error.message==='Network Error'){
           console.log(error.message);
        }
        else{
            console.log(error);
        }
    }
    history.push(routeUrl);
};

