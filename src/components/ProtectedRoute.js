import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export class ProtectedRoute extends Component {
    render() {
        console.log(this.props);
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={(props)=>
                {
                    if(this.props.isSignedIn){
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
    return{isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps)(ProtectedRoute)
