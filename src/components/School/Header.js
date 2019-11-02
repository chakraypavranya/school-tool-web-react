import React from 'react'
import {Link} from 'react-router-dom';
import GoogleBtn from '../GoogleBtn';
import Avater from '../UI/Avater';


export default function Header(props) {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/school/home" className="item">
                School Tool
            </Link>
            <div class="ui black big launch right attached fixed button">
                <i class="content icon"></i>
                <span class="text">Menu</span>
            </div>
            <div className="right menu">
            <Avater {...props} />
            <GoogleBtn/>
            </div>
        </div>
    )
}
