import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../../redux/actions/index';

export class Landing extends Component {
  
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
        window.gapi.client.init({
            clientId: '796856575083-f5ssvve0fmi5nm4bmftbc5aebhmhvrba.apps.googleusercontent.com',
            scope:'profile'
        }).then(()=>{
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) =>{
    if(isSignedIn){
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
        this.props.signOut();
    }
  }

  render() {
    return (
      <>     
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn,signOut})(Landing)
