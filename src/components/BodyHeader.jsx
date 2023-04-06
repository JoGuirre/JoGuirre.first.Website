import React from 'react'
import '../css/BodyHeader.css'

function BodyHeader() {
  const handleClick = () => {
    console.log('Contact Me Clicked');
  }
  return (
    <div className="body__header__container">
        <div className="body__intro">
            <h1 className="body__intro__header">Hi,<br/>I'm Josh,<br/>web developer<br/></h1>
            <h3 className="body__intro__subtext">Front-End | Back-End | Full Stack<br/><span id="intro__dev">Developer</span></h3>
            <button onClick={handleClick} className="body__intro__button">Contact Me</button>
        </div>
    </div>
  )
}

export default BodyHeader