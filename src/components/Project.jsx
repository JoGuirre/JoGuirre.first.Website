import React from 'react'
import '../css/Project.css'

function Project({ imgSrc, size, text, ghUrl }) {
  return (
    <div>
        <img className="project__picture" src={imgSrc} alt={text} height={size.width} width={size.height} />
        <div className="project__caption__container">
            <p className="project__caption">{text}</p>
            <a href={ghUrl} className="project__link">{ghUrl}</a>
        </div>
    </div>
  )
}

export default Project