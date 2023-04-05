import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <div className="header__container">
        <div className="header__logo">
            Logo
        </div>
        <div className="header__space">
            blank space
        </div>
        <div className="nav__links">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header