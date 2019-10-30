import React, { Component } from 'react';
import GoogleBtn from '../GoogleBtn';

export class Landing extends Component {
  render() {
    return (
        <div className="ui middle aligned center aligned grid">
        <div className="column">
            <div className="content">
              Welcome To School Tool
            </div>
          <GoogleBtn/>
        </div>
      </div>
    )
  }
}

export default Landing
