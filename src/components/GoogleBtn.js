import React from 'react'
import {connect} from 'react-redux';
import {signIn,signOut} from '../redux/actions';

export class GoogleBtn extends React.Component {
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '796856575083-f5ssvve0fmi5nm4bmftbc5aebhmhvrba.apps.googleusercontent.com',
                scope:'profile'
            })
        });
    }

    onSignIn =()=>{
        this.auth = window.gapi.auth2.getAuthInstance();

        if(this.auth.isSignedIn.get()){
            const user = {
                id_token : this.auth.currentUser.get().getAuthResponse().id_token,
                firstName: this.auth.currentUser.get().getBasicProfile().getGivenName(),
                lastName: this.auth.currentUser.get().getBasicProfile().getFamilyName(),
                image_Url : this.auth.currentUser.get().getBasicProfile().getImageUrl(),
                id: this.auth.currentUser.get().getBasicProfile().getId(),
                email: this.auth.currentUser.get().getBasicProfile().getEmail()
            }
            this.props.signIn(user);
        }
        else{
            this.auth.signIn();
        }
    }

    onSignOut =()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.auth.signOut();
        this.props.signOut();
    }


    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return(
                <button onClick={this.onSignIn} className="ui red google button">
                   Sign In Using &nbsp; <i className="google icon"></i>
                </button>
            )
        }else if(this.props.isSignedIn){
            return(
                <button onClick={this.onSignOut} className="ui red google button">
                    Sign Out
                </button>
            )
        }
        else{
            return(
                <button onClick={this.onSignIn} className="ui red google button">
                   Sign In Using &nbsp; <i className="google icon"></i>
                </button>
            )
        }
    }

    render(){
        return (
            <>
                {this.renderAuthButton()}
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn,signOut})(GoogleBtn)
