import React from 'react'
import './Content_dest.css'
function ContentDest(props) {
  return (
    <div className = "ContentDest_container"style={{ color: 'red' }}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.travel}</p>
      <p>{props.distance}</p>
      </div>
  )
}

export default ContentDest
