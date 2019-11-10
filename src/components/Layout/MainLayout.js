import React, { Component } from 'react';
import VerticalSidebar from './Sidebar';
import {Segment, Sidebar} from 'semantic-ui-react';

export class MainLayout extends Component {
    state = {
        animation: 'overlay',
        direction: 'left',
        dimmed: false,
        visible: false,
      }
    
    handleAnimationChange = (animation) => () =>{
        this.setState((prevState) => ({ animation, visible: !prevState.visible , dimmed: !prevState.dimmed }))
    }
    render() {
        const { animation, dimmed, direction, visible } = this.state
        return (
          <Sidebar.Pushable as={Segment}>

            <VerticalSidebar animation={animation} direction={direction} 
              visible={visible} showSideMenu={this.handleAnimationChange('overlay')} />
            
            <Sidebar.Pusher dimmed={dimmed && visible}>
              {React.cloneElement(this.props.children[0], { showSideMenu:this.handleAnimationChange('overlay') })}
              <Segment basic>
                {this.props.children[1]}
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        )
  }
}

export default MainLayout
