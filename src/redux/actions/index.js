import history from '../../history';
import {SchoolToolApi, getConfigJson}from '../../apis/SchoolTool';
import {ROLE_TYPE} from '../../resources/roleType';

import {
    SIGN_IN,
    SIGN_OUT
} from '../../resources/types';



import {
    ROOT_URL,
    SCHOOL_HOME_URL,
    GURDIAN_HOME_URL,
    TEACHER_HOME_URL,
    REGISTER_SCHOOL_URL,
    LOGIN_URL
} from '../../resources/urls';


export const signIn = (user) =>async (dispatch) =>{
    let routeUrl = '/';

    try{
        const response = await SchoolToolApi.get('/account/checkUser', getConfigJson(user.id_token));
        
        dispatch({type: SIGN_IN, payload: {googleUser: user, user: response.data.value}});

        if(response.data.value !== null){
            const userRole = response.data.value.userRole;
            switch(userRole){
                case ROLE_TYPE.SCHOOL:
                    routeUrl = SCHOOL_HOME_URL;
                    break;
                case ROLE_TYPE.GUARDAIN:
                    routeUrl = GURDIAN_HOME_URL;
                    break;
                case ROLE_TYPE.TEACHER:
                    routeUrl = TEACHER_HOME_URL;
                    break;
                default:
                    routeUrl= ROOT_URL;
                    break;
            }
        }
        else{
            routeUrl = REGISTER_SCHOOL_URL;
        }
    }
    catch (error) {
        if(error.message==='Network Error'){
           console.log(error.message);
        }
    }
    history.push(routeUrl);
};

export const signOut = () =>async (dispatch) =>{
    dispatch({type: SIGN_OUT});
    history.push(LOGIN_URL);
};


