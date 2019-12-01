import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {ROLE_TYPE} from '../resources/roleType';

import {
    ROOT_URL,
    SCHOOL_HOME_URL,
    GURDIAN_HOME_URL,
    TEACHER_HOME_URL,
    REGISTER_SCHOOL_URL,
    LOGIN_URL
} from '../resources/urls';

export class ProtectedRoute extends Component {
    render() {
        const {component: Component, path, userRole, ...rest} = this.props;
        const pathArr = path.split('/');

        return (
            <Route {...rest} render={(props)=>
                {
                    if(this.props.isSignedIn && pathArr[1] === 'school' && userRole === ROLE_TYPE.SCHOOL){
                        return <Component {...this.props}/>
                    }
                    else if(this.props.isSignedIn && pathArr[1] === 'guardian' && userRole === ROLE_TYPE.GUARDAIN){
                        return <Component {...this.props}/>
                    }
                    else if(this.props.isSignedIn && pathArr[1] === 'teacher' && userRole === ROLE_TYPE.TEACHER ){
                        return <Component {...this.props}/>
                    }
                    else if(this.props.isSignedIn){
                        return <Component {...this.props}/>
                    }
                    else{
                        return <Redirect to={ROOT_URL}/>
                    }
               }
            }/>
        )
    }
}

const mapStateToProps =(state,ownProps)=>{
    if(state.auth.user !==null)
        return{isSignedIn : state.auth.isSignedIn, userRole: state.auth.user.userRole}
    else
        return{isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps)(ProtectedRoute)
