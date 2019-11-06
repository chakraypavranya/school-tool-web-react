import React from 'react'
import {Link} from 'react-router-dom';
import GoogleBtn from '../GoogleBtn';
import Avater from '../UI/Avater';

export default function Header(props) {
    return (
        <>
        <div className="ui secondary pointing menu">
            <Link to="/school/home" className="item">
                School Tool
            </Link>
            <a class="browse item">
                Browse <i class="dropdown icon"></i>
            </a>
            <div className="right menu">
                <Avater {...props} />
                <GoogleBtn/>
            </div>
        </div>
        </>
    )
}
