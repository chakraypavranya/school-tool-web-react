import React from 'react'
import {Link} from 'react-router-dom';
import GoogleBtn from '../GoogleBtn';
import Avater from '../UI/Avater';


export default function Header(props) {
    console.log(props);
    return (
        <div className="ui secondary pointing menu">
            <Link to="/school/home" className="item">
                School Tool
            </Link>
            <div className="right menu">
            <Avater {...props} />
            <GoogleBtn/>
            </div>
        </div>
    )
}
