import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';


export default function Header() {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                School Tool
            </Link>
            <div className="right menu">
            <Link to="/About" className="item">
                About Us
            </Link>
            <Link to="/Contact" className="item">
                Contact Us
            </Link>
            <GoogleAuth/>
            </div>
        </div>
    )
}
