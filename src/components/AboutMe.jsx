import React from 'react'
import '../css/AboutMe.css'
import Art from './Art'

function AboutMe() {
  return (
    <div className="aboutMe__container">
        <h1>About me</h1>
        <div className="p__container">
        <div className="left__column">
            <div className="p p__left" id="p__1">
                <h3>Introduction</h3>
                <p>I was initially drawn to web development due to my limited experience with programming in the Navy, and after pursuing computer science studies for a brief period. Since then, I have been completely self-taught, and specialize in HTML/CSS, JavaScript, Reactjs, and Bootstrap.</p>
            </div>
            <div className="p p__left" id="p__3">
                <h3>Projects and Achievements</h3>
                <p>One project that I am particularly proud of is a Natural Language Processing web app I created using an API.</p>
            </div>
            <div className="p p__left" id="p__5">
                <h3>Challenges and Persistence</h3>
                <p>As with any project, challenges always arise, but I enjoy the problem-solving process and overcome them with persistence and extensive online research.</p>
            </div>
        </div>
        <div className="middle__column">
            <Art shape="blob" id='one' />
            <Art shape="blob" id='two' />
        </div>
        <div className="right__column">
            <div className="p p__right" id="p__2">
                <h3>Approach to Problem-Solving</h3>
                <p>When it comes to problem-solving, I take a methodical approach by first considering different possible solutions, followed by trial and error, and further research.</p>
            </div>
            <div className="p p__right" id="p__4">
                <h3>Staying Up-to-Date</h3>
                <p>I stay up-to-date with the latest trends and developments in web development through various sources such as YouTube, Reddit, and newsletters.</p>
            </div>
            <div className="p p__right" id="p__6">
                <h3>Working with Clients</h3>
                <p>I work closely with clients to ensure their website meets their needs and goals through constant communication.</p>
            </div>
            <div className="p p__right" id="p__7">
                <h3>Passion for Web Development</h3>
                <p>What sets me apart from other web developers is my genuine love for what I do. The challenge of web development keeps me in a "grind mindset," and I find joy in the process of bringing a website to life.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutMe