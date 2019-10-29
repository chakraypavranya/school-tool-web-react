import history from '../../history';

import {
    SIGN_IN,
    SIGN_OUT
} from '../../resources/types';


export const signIn = (userId) =>async (dispatch) =>{
    dispatch({type: SIGN_IN, payload: userId});
    history.push('/home');
};

export const signOut = () =>async (dispatch) =>{
    dispatch({type: SIGN_OUT});
    history.push('/');
};


