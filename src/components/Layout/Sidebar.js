import React from 'react'
import { Icon, Menu, Sidebar} from 'semantic-ui-react'
import SidebarMenu from '../UI/SidebarMenu'

const VerticalSidebar = ({ animation, direction, visible,showSideMenu }) => {
   
    return(

        <Sidebar as={Menu} animation={animation} direction={direction} icon='labeled' inverted vertical
            visible={visible} width='wide'>
            <Menu.Item as='a' onClick={showSideMenu}>
                <Icon name='close' /> Close
            </Menu.Item>
            <SidebarMenu/>
        </Sidebar>
    )
}

export default VerticalSidebar