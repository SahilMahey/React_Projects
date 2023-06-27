import React, { useState} from 'react'
import array from '../../data.json'
import ContentDest from './Content_dest'
import './Destination.css'
import { NavLink, Outlet} from 'react-router-dom'

function Destination() {
  

  return (

    <div className="destination_container">
      <h3>01 Pick your destination</h3>
      <div className="destination_content">
      <img src = "" alt = "" />
    <ul>
    <li>
            <NavLink to="/Destination" end >Moon</NavLink >
          </li>
          <li>
            <NavLink to="Mars" >Mars</NavLink>
          </li>
          <li>
            <NavLink to="Europa" >Europa</NavLink>
          </li>
          <li>
            <NavLink to="Titan">Titan</NavLink>
          </li>
    </ul>
  </div>
 < Outlet/>
 </div>
  )
}

export default Destination