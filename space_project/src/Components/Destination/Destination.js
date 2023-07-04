import React, { useState} from 'react'
import array from '../../data.json'
import ContentDest from './Content_dest'
import './Destination.css'
import moon from "./image-moon.webp";
import mars from "./image-mars.webp";
import europa from "./image-europa.webp";
import titan from "./image-titan.webp";
import { NavLink} from 'react-router-dom'


function Destination() {

  const [data,setdata] = useState(array.destinations[0]);
  const [image, SetImage] = useState(moon);
  function filter_data(title)
  {
   
    let maker = array.destinations.filter((element)=>
    {
  
        return element.name === title
    })
    setdata(maker[0])
    if(maker[0].name=== "Moon") {
          SetImage(moon)
      
        }else if(maker[0].name === "Mars"){
          
          SetImage(mars)
      }else if(maker[0].name === "Europa"){
          
        SetImage(europa)
      }else{
          
        SetImage(titan)
      }
  
    setdata(maker[0])
  }


  

 

  return (

    <div className="destination_container">
    <h3 className="destination_container_h3">01 PICK YOUR DESTINATION</h3>
    <div className="destination_content">
      <div className="destination_content_image">
      <img src={image} alt = "" />
      </div>
    <div className="destination_content_list">
    <ul>
    <li>
    <NavLink  to="/Destination"  onClick = {()=>filter_data("Moon")} end>MOON</NavLink >
    </li>
    <li>
      <NavLink  to="Mars" onClick = {()=>filter_data("Mars")}>MARS</NavLink>
    </li>
    <li>
      <NavLink  to="Europa" onClick = {()=>filter_data("Europa")}>EUROPA</NavLink>
    </li>
    <li>
      <NavLink  to="Titan" onClick = {()=>filter_data("Titan")}>TITAN</NavLink>
    </li>
    </ul>
    <ContentDest object = {data} />
    </div>
   </div>
   </div>
  )

  }
export default Destination