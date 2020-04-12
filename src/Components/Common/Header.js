import React from "react";
import './Header.css';
import {lionLogo} from './lionLogo.jpg'

const Header = () => {
    return(
        <div className='Header'>
            <img src={lionLogo} alt={lionLogo} className='headerLogo'/>
        </div>
    );
};

export default Header;