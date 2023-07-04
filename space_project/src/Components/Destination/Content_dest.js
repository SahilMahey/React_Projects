import React from 'react'
import './Content_dest.css'


function ContentDest({object}) {


  return (
    <div className = "ContentDest_container">
      <div className="desc">
      <p className="ContentDest_title">{object.name.toUpperCase()}</p>
      <p className='ContentDest_desc'>{object.description}</p> 
      </div>
     <div className="dist">
     <div className="_line">
      </div>
      <div className="dist_travel">
      <div className="distance">
      <p className="dis-title">AVG. DISTANCE</p>
      <p className='dis-value'>{object.distance}</p>
      </div>
      <div className="travel">
      <p className="est-time">EST. TRAVEL TIME</p>
      <p className='time-value'>{object.travel}</p>
      </div>
      </div>
      
     </div>
    </div>
  )
}

export default ContentDest