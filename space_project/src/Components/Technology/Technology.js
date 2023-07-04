import React from 'react'
import './Technology.css'
import array from '../../data.json'
import { NavLink,useParams} from 'react-router-dom'
function Technology() {
   let {technology_name} = useParams();
  
 

  let count = 0;
  if (technology_name === undefined)
  {
    technology_name = 'Launchvehicle';
  }
  return (
    <div className='technology_container'>
       <h3 className="technology_container_h3">03 SPACE LAUNCH 101</h3>
       <div className="technology_content">
 
     
      <div className="technology_list">
      {array.technology
    .filter((element) => (element.name.replace(/\s/g, "") === technology_name))
    .map((element) => (

      <div key={element.name} className="crew_list_content">
        <p className="technology_heading">THE TERMINOLOGY</p>
        <p className="technology_name">{element.name.toUpperCase()}</p>
        <p className="technology_desc">{element.description}</p>
        
      </div>
    ))}
         
     <ul>
     {array.technology.map((element)=>
     {
      return (
        <NavLink key = {element.name} to = {element.name.replace(/\s/g, "") === "Launchvehicle" ? "/Technology" : `${element.name.replace(/\s/g, "")}`} end>{++count}</NavLink>
      )
     })}
     </ul>
      </div>
       {array.technology
    .filter((element) => (element.name.replace(/\s/g, "") === technology_name))
    .map((element) => (

      <div key = {element.name} className="technology_image">
       <img src={element.images.portrait} alt="" />
      </div>
    ))}
    </div>
      
    </div>
  )
}

export default Technology
