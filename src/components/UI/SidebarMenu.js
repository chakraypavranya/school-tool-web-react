import React, { Component } from 'react';
import { Accordion, Menu } from 'semantic-ui-react';
import {StudentMenuItems,GuardianMenuItems,TeacherMenuItems} from '../../resources/helper';



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
        StudentMenuItems.map((item)=>{
        return (
            <>
                <Menu.Item
                name={item}
                active={activeItem === item}
                onClick={this.handleItemClick}
                />
            </>
        )})
    )
  }

  GuardianMenu (activeItem){
    return (
        GuardianMenuItems.map((item)=>{
        return (
            <>
                <Menu.Item
                name={item}
                active={activeItem === item}
                onClick={this.handleItemClick}
                />
            </>
        )})
    )
  }

  TeacherMenu (activeItem){
    return (
        TeacherMenuItems.map((item)=>{
        return (
            <>
                <Menu.Item
                name={item}
                active={activeItem === item}
                onClick={this.handleItemClick}
                />
            </>
        )})
    )
  }

  render() {
    const { activeIndex, activeItem } = this.state

    return (
      <Accordion as={Menu} vertical inverted >
        <Menu.Item key="1">
          <Accordion.Title
            key="0"
            active={activeIndex === 0}
            content='Student'
            index={0}
            onClick={this.handleClick}
          />
          <Accordion.Content key="1" active={activeIndex === 0} content={this.StudentMenu(activeItem)} />
        </Menu.Item>

        <Menu.Item key="2">
          <Accordion.Title key="1"
            active={activeIndex === 1}
            content='Teacher'
            index={1}
            onClick={this.handleClick}
          />
          <Accordion.Content key="2" active={activeIndex === 1} content={this.TeacherMenu(activeItem)} />
        </Menu.Item>
        <Menu.Item key="3">
          <Accordion.Title key="2"
            active={activeIndex === 2}
            content='Guardain'
            index={2}
            onClick={this.handleClick}
          />
          <Accordion.Content key="3" active={activeIndex === 2} content={this.GuardianMenu(activeItem)} />
        </Menu.Item>
      </Accordion>
    )
  }
}