import React from 'react'
import array from '../../data.json'
import './Destination.css'
import { NavLink } from 'react-router-dom'

function Destination() {
  return (

    <div className="destination_container">
      <h3>01 Pick your destination</h3>
      <div className="destination_content">
      <img src = "" alt = ""/>
    <ul>
      <NavLink to="Moon">MOON</NavLink>
      <NavLink to="Mars">MARS</NavLink>
      <NavLink to="Europa">EUROPA</NavLink>
      <NavLink to="Titan">TITAN</NavLink>
    </ul>
      </div>
    </div>
  )
}

export default Destination
