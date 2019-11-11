import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {ROLE_TYPE} from '../resources/roleType';

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
                        return <Redirect to="/"/>
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
