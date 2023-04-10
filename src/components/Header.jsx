import React from 'react'
import '../css/Header.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

function Header() {
  return (
    <div className="header__container">
        <div className="header__logo">
            Logo
        </div>
        <div className="header__space"></div>
        <div className="nav__links">
            <ul>
                <li><a href=""><HomeOutlinedIcon fontSize='large' className="nav__icon"/><span className="nav__title">Home</span></a></li>
                <li><a href=""><LiveHelpOutlinedIcon fontSize='large' className="nav__icon"/><span className="nav__title">About</span></a></li>
                <li><a href=""><ContactPageOutlinedIcon fontSize='large' className="nav__icon"/><span className="nav__title">Contact</span></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header