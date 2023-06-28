import React from 'react'
import './Content_dest.css'


function ContentDest({object}) {


  return (
    <div className = "ContentDest_container">
      <h3 className="ContentDest_title">{object.name}</h3>
      <p className='ContentDest_desc'>{object.description}</p>
      <p className='dis-value'>{object.distance}</p>
      <p className='time-value'>{object.travel}</p>
    </div>
  )
}

export default ContentDest