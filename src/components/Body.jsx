import React from 'react'
import '../css/Body.css'
import BodyHeader from './BodyHeader'
import AboutMe from './AboutMe'

function Body() {
  return (
    <div className="body__container">
        <BodyHeader />
        <AboutMe />
    </div>
  )
}

export default Body