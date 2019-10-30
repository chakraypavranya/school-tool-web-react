import React, { Component } from 'react';

import Header from './Header';

export class Landing extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className="ui middle aligned center aligned grid">
        <div className="column">
            <div className="content">
              <h1>Welcome To School Tool</h1>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default Landing
