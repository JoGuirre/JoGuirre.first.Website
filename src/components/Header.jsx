import React from 'react'
import '../css/Header.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import GitHubIcon from '../assets/github-mark.png'
import LinkedInIcon from '../assets/linkedin-mark.svg'

function Header() {
  return (
    <div className="header__container">
      <div className="sidebar__sticky">
        <div className="header__logo">
            Logo
        </div>
        <div className="nav__links">
            <ul>
                <li>
                  <a href="">
                    <span className="navlink__items">
                      <HomeOutlinedIcon fontSize='large' className="nav__icon"/>
                      <span className="nav__title">Home</span>
                    </span>
                  </a>
                </li>

                <li>
                  <a href="">
                    <span className="navlink__items">
                      <LiveHelpOutlinedIcon fontSize='large' className="nav__icon"/>
                      <span className="nav__title">About</span>
                    </span>
                  </a>
                </li>

                <li>
                  <a href="">
                    <span className="navlink__items">
                      <ContactPageOutlinedIcon fontSize='large' className="nav__icon"/>
                      <span className="nav__title">Contact</span>
                    </span>
                  </a>
                </li>
            </ul>
        </div>
        <div className="social__links nav__links">
          <ul>
            <li>
              <a href="https://github.com/JoGuirre">
                <span className="navlink__items">
                  <img className="social__icon" src={GitHubIcon} alt="github logo link" />
                  <span className="nav__title social__title">GitHub</span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshuacaguirre/">
                <span className="navlink__items">
                  <img className="social__icon" src={LinkedInIcon} alt="linkedin logo link" />
                  <span className="nav__title social__title">LinkedIn</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Header