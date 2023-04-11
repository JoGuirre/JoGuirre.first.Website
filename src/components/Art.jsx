import React from 'react'
import '../css/Art.css'

function art({ id, shape }) {
  return (
    <div className={shape} id={id}>&nbsp;</div>
  )
}

export default art