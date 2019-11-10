import React from 'react'
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import GoogleBtn from '../GoogleBtn';
import Avater from '../UI/Avater';

export default function Header(props) {
    return (
      <>
      <Menu attached="top">
        <Menu.Item onClick={props.showSideMenu}>
            Menu
        </Menu.Item>
        <Menu.Item>
            <Link to="/school/home">
                School Tool
            </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
          <Avater {...props} />
            
          </Menu.Item>

          <Menu.Item>
            <GoogleBtn/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
    )
}
