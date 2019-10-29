import React, { Component } from 'react';
import GoogleBtn from '../GoogleBtn';

export class Landing extends Component {
  render() {
    return (
        <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <img src="" className="image" />
            <div className="content">
              Welcome To School Tool
            </div>
          </h2>
         
          <div className="ui message">
            <GoogleBtn/>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
