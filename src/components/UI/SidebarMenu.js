import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Accordion, Menu } from 'semantic-ui-react';
import {StudentMenuItems,GuardianMenuItems,TeacherMenuItems} from '../../resources/helper';
import { SCHOOL_GUARDIAN_NEW_URL, SCHOOL_GUARDIAN_URL } from '../../resources/urls';



export default class SidebarMenu extends Component {
  state = { activeIndex: null , activeItem: '' }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  StudentMenu (activeItem){
    return (
      <>
        <div className="menu">
          <Link className="item" to="/">
            New
          </Link>
        </div>  
        
        <div className="menu">
          <Link className="item" to="/">
            Update
          </Link>
        </div>
      </>
    )
  }

  GuardianMenu (){
    return (
      <>
        <div className="menu">
          <Link className="item" to={SCHOOL_GUARDIAN_URL}>
            All
          </Link>
        </div>
        <div className="menu">
          <Link className="item" to={SCHOOL_GUARDIAN_NEW_URL}>
            Add New
          </Link>
        </div>  
        
        
      </>
    )
  }

  TeacherMenu (){
    return (
      <>
        <div className="menu">
          <Link className="item" to="/">
            New
          </Link>
        </div>  
        
        <div className="menu">
          <Link className="item" to="/">
            Update
          </Link>
        </div>
      </>
    )
  }

  render() {
    const { activeIndex, activeItem } = this.state

    return (
      <Accordion as={Menu} vertical inverted >
        
        <Menu.Item key="1">
          <Link to="/" >
            <Accordion.Title content='Home' key="0" active={activeIndex === 0} />
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Accordion.Title
            key="1"
            active={activeIndex === 1}
            content='Student'
            index={1}
            onClick={this.handleClick}
          />
          <Accordion.Content key="2" active={activeIndex === 1} content={this.StudentMenu(activeItem)} />
        </Menu.Item>

        <Menu.Item key="3">
          <Accordion.Title key="2"
            active={activeIndex === 2}
            content='Teacher'
            index={2}
            onClick={this.handleClick}
          />
          <Accordion.Content key="3" active={activeIndex === 2} content={this.TeacherMenu(activeItem)} />
        </Menu.Item>
        <Menu.Item key="4">
          <Accordion.Title key="3"
            active={activeIndex === 3}
            content='Guardain'
            index={3}
            onClick={this.handleClick}
          />
          <Accordion.Content key="4" active={activeIndex === 3} content={this.GuardianMenu(activeItem)} />
        </Menu.Item>
      </Accordion>
    )
  }
}