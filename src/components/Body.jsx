import React from 'react'
import '../css/Body.css'
import BodyHeader from './BodyHeader'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'

function Body() {
  return (
    <div className="body__container">
        <BodyHeader />
        <AboutMe />
        <Projects />
        <ContactMe />
    </div>
  )
}

export default Body