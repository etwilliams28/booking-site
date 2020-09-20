import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from  "@material-ui/core";
import { Link } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
    return (
        <div className="header">
        <Link to="/">
            <img className="header__icon" src="LogoMakr_5RmfS7.png" alt="icon" />

        </Link>
            
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />


            </div>
        </div>
    )
}

export default Header
