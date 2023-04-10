import React from 'react'
import '../css/Body.css'
import BodyHeader from './BodyHeader'
import AboutMe from './AboutMe'
import Projects from './Projects'

function Body() {
  return (
    <div className="body__container">
        <BodyHeader />
        <AboutMe />
        <Projects />
    </div>
  )
}

export default Body