import React from 'react'
import '../css/Project.css'

function Project({ imgSrc, title, size, text, ghUrl }) {
  return (
    <div className="project__container">
        <h3>{title}</h3>
        <img className="project__picture" src={imgSrc} alt={text} height={size.width} width={size.height} />
        <div className="project__caption__container">
            <p className="project__caption"><strong>Technologies:</strong> {text}</p>
            <a href={ghUrl} className="project__link">{ghUrl}</a>
        </div>
    </div>
  )
}

export default Project