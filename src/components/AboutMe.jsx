import React from 'react'
import '../css/AboutMe.css'

function AboutMe() {
  return (
    <div className="aboutMe__container">
        <div className="left__column">
            <div className="p p__left">
                <h2>Introduction</h2>
                <p>I was initially drawn to web development due to my limited experience with programming in the Navy, and after pursuing computer science studies for a brief period. Since then, I have been completely self-taught, and specialize in HTML/CSS, JavaScript, Reactjs, and Bootstrap.</p>
            </div>
            <div className="p p__left">
                <h2>Projects and Achievements</h2>
                <p>One project that I am particularly proud of is a Natural Language Processing web app I created using an API.</p>
            </div>
            <div className="p p__left">
                <h2>Challenges and Persistence</h2>
                <p>As with any project, challenges always arise, but I enjoy the problem-solving process and overcome them with persistence and extensive online research.</p>
            </div>
            <div className="p p__left">
                <h2>Passion for Web Development</h2>
                <p>What sets me apart from other web developers is my genuine love for what I do. The challenge of web development keeps me in a "grind mindset," and I find joy in the process of bringing a website to life.</p>
            </div>
        </div>
        <div className="middle__column"></div>
        <div className="right__column">
            <div className="p p__right">
                <h2>Approach to Problem-Solving</h2>
                <p>When it comes to problem-solving, I take a methodical approach by first considering different possible solutions, followed by trial and error, and further research.</p>
            </div>
            <div className="p p__right">
                <h2>Staying Up-to-Date</h2>
                <p>I stay up-to-date with the latest trends and developments in web development through various sources such as YouTube, Reddit, and newsletters.</p>
            </div>
            <div className="p p__right">
                <h2>Working with Clients</h2>
                <p>I work closely with clients to ensure their website meets their needs and goals through constant communication.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe