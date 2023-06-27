import React, { useState, useEffect} from 'react'
import './Content_dest.css'
import array from '../../data.json'
function ContentDest(props) {
  let maker = array.destinations.filter((element)=>
  {

      return element.name == props.title
  })

  let image = maker[0].images.png

  return (

    <div className = "ContentDest_container">
      <h3 className="ContentDest_title">{maker[0].name}</h3>
      <p className='ContentDest_desc'>{maker[0].description}</p>
      <p className='dis-value'>{maker[0].distance}</p>
      <p className='time-value'>{maker[0].travel}</p>
      <img src={image} alt="" className="ContentDest_image" />

  </div>
  )
}

export default ContentDest