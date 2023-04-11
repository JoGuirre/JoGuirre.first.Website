import React from 'react'
import '../css/Projects.css'
import Project from './Project'
import TwitterClone from '../assets/twitter-clone.png'
import ChatCloneChatRoom from '../assets/chat-clone-chat-room.png'
import TTTGame from '../assets/tictactoe-game.png'

function Projects() {
  return (
    <div className="projects__container">
      <h1><span>Projects</span></h1>
        <Project imgSrc={TwitterClone} title='Twitter Clone' text='Vite, ReactJs, HTML, CSS, JS' size={{ width: 200, height: 300 }} ghUrl="https://github.com/JoGuirre/twitter-clone" />

        <Project imgSrc={ChatCloneChatRoom} title='Chat Room' text='Vite, ReactJs, Fireship DB, Google Auth, HTML, CSS, JS' size={{ width: 200, height: 300 }} />

        <Project imgSrc={TTTGame} title='Tic Tac Toe' text='Vite, ReactJs, HTML, CSS, JS' size={{ width: 200, height: 300 }} ghUrl="https://github.com/JoGuirre/tictactoe-game" />
    </div>
  )
}

export default Projects