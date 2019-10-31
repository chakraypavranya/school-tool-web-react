import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';

export class Home extends Component {
  render() {
    const {firstName, lastName, image_Url} = this.props.user;
    return (
      <div>
        <Header firstName={firstName} lastName={lastName} image_Url={image_Url}/>
        Welcome to School Home Page
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{user: state.auth.googleUser}
}

export default connect(mapStateToProps)(Home)
