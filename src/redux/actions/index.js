import history from '../../history';
import {SchoolToolApi, getConfig}from '../../apis/SchoolTool';

import {
    SIGN_IN,
    SIGN_OUT
} from '../../resources/types';

import {
    ROOT_URL,
    SCHOOL_HOME_URL,
    GURDIAN_HOME_URL,
    TEACHER_HOME_URL
} from '../../resources/urls';


export const signIn = (id_token) =>async (dispatch) =>{
    let routeUrl = '';
    const response = await SchoolToolApi.get('/account/checkUser', getConfig(id_token));
    dispatch({type: SIGN_IN, payload: response.data.value});

    if(response.data.value !== null){
        const userRole = response.data.value.userRole;
        switch(userRole){
            case 1:
                routeUrl = SCHOOL_HOME_URL;
                break;
            case 2:
                routeUrl = GURDIAN_HOME_URL;
                break;
            case 3:
                routeUrl = TEACHER_HOME_URL;
                break;
            default:
                routeUrl= ROOT_URL;
                break;
        }
    }
    else{
        routeUrl = '/school/register';
    }

    
    history.push(routeUrl);
    
};

export const signOut = () =>async (dispatch) =>{
    dispatch({type: SIGN_OUT});
    history.push('/');
};


