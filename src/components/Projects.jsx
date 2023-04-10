import React from 'react'
import '../css/Projects.css'
import Project from './Project'

function Projects() {
  return (
    <div>
        <Project imgSrc='twitter-clone.png' text='This is a twitter clone' size={{ width: 200, height: 300 }} ghUrl="https://github.com/JoGuirre/twitter-clone" />

        <Project imgSrc='chat-clone-chat-room.png' text='This is a chat room' size={{ width: 200, height: 300 }} />

        <Project imgSrc='tictactoe-game.png' text='This is a tic tac toe game' size={{ width: 200, height: 300 }} ghUrl="https://github.com/JoGuirre/tictactoe-game" />
    </div>
  )
}

export default Projects