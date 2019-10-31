import history from '../../history';
import {getTokenId} from '../../resources/helper';
import {SchoolToolApi, getConfigJson}from '../../apis/SchoolTool';

export const registerSchool = (values, googleUser) =>async (dispatch) =>{
                        
    let routeUrl = '/';
    const id_token = getTokenId();
    console.log(values);
    const {firstName, lastName} = googleUser;
    try{
        const response = await SchoolToolApi.post('/account/registerschool', {...values,firstName,lastName},
        getConfigJson(id_token)
                        );
        dispatch({type: REGISTER_SCHOOL});
        console.log(response);
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