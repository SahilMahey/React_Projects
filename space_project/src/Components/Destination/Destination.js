import React, { useState} from 'react'
import array from '../../data.json'
import ContentDest from './Content_dest'
import './Destination.css'
import { NavLink, Outlet, Link} from 'react-router-dom'

function Destination() {
  
  const [data,setdata] = useState(array.destinations[0]);
  function filter_data(title)
  {
   
    let maker = array.destinations.filter((element)=>
    {
  
        return element.name === title
    })
    console.log(maker[0])
    setdata(maker[0])
  }
 

  return (

    <div className="destination_container">
      <h3>01 Pick your destination</h3>
      <div className="destination_content">
      <img src={require("./image-moon.png").default}  alt = "" />
    <ul>
    <li>
    <NavLink  to="/Destination" onClick = {()=>filter_data("Moon")} end>Moon</NavLink >
    </li>
    <li>
      <NavLink  to="Mars" onClick = {()=>filter_data("Mars")}>Mars</NavLink>
    </li>
    <li>
      <NavLink  to="Europa" onClick = {()=>filter_data("Europa")}>Europa</NavLink>
    </li>
    <li>
      <NavLink  to="Titan" onClick = {()=>filter_data("Titan")}>Titan</NavLink>
    </li>
    </ul>
  </div>
  <ContentDest object = {data} />
 </div>
  )
}

export default Destination