import React, { useState } from 'react'
import array from '../../data.json'
import './Destination.css'
import { NavLink, Outlet } from 'react-router-dom'
import ContentDest from './Content_dest'
function Destination() {
 const [selectedDestination, setSelectedDestination] = useState('Moon');
 const [selectedImage, setSelectedImage] = useState('./image-moon.png');
 function  handleNavLinkClick(title)
 {
   let maker = array.destinations.filter((element)=>
   {
     
     return element.name === title
   })
  setSelectedDestination(maker)
  setSelectedImage(maker[0].images.png)
 }
  return (

    <div className="destination_container">
      <h3>01 Pick your destination</h3>
      <div className="destination_content">
      <img src = {selectedImage} alt = ""/>
    <ul>
      <NavLink to="Moon" onClick={() => handleNavLinkClick('Moon')}>MOON</NavLink>
      <NavLink to="Mars"  onClick={() => handleNavLinkClick('Mars')}>MARS</NavLink>
      <NavLink to="Europa" onClick={() => handleNavLinkClick('Europa')}>EUROPA</NavLink>
      <NavLink to="Titan"  onClick={() => handleNavLinkClick('Titan')}>TITAN</NavLink>
    </ul>
    
    {selectedDestination && <ContentDest name = {selectedDestination[0].name} description = {selectedDestination[0].description} distance =  {selectedDestination[0].distance} travel =  {selectedDestination[0].travel} />}
  </div>
      <Outlet />
      </div>
  )
}

export default Destination
