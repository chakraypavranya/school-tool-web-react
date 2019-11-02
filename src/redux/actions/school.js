import history from '../../history';
import {getTokenId} from '../../resources/helper';
import {SchoolToolApi, getConfigJson}from '../../apis/SchoolTool';

import {
    REGISTER_SCHOOL
    
} from '../../resources/types';



export const registerSchool = (values) =>async (dispatch) =>{
                        
    let routeUrl = '/';
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

export const getEvents = () => async (dispatch) =>{
    let routeUrl = '/';
    const id_token = getTokenId();

    try{

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