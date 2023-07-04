import React from 'react'
import './Crew.css'
import array from '../../data.json'
import { NavLink,useParams} from 'react-router-dom'
// import image_1 from "../../assets/crew/image-douglas-hurley.webp"
// import image_2 from "../../assets/crew/image-mark-shuttleworth.webp"
// import image_3 from "../../assets/crew/image-victor-glover.webp"
// import image_4 from "../../assets/crew/image-anousheh-ansari.webp"

function Crew() {
  let {name} = useParams();
  
 

 
  if (name === undefined)
  {
    name = 'DouglasHurley';
  }
  
  return (
    <div className='crew_container'>
      <h3 className="crew_container_h3">02 MEET YOUR CREW</h3>
      <div className="crew_content">
      <div className="crew_list">
      {array.crew
    .filter((element) => (element.name.replace(/\s/g, "") === name))
    .map((element) => (

      <div key={element.name} className="crew_list_content">
        <p className="crew_role">{element.role.toUpperCase()}</p>
        <p className="crew_name">{element.name.toUpperCase()}</p>
        <p className="crew_desc">{element.bio}</p>
        
      </div>
    ))}
         
     <ul>
     {array.crew.map((element)=>
     {
      return (
        <NavLink key = {element.name} to = {element.name.replace(/\s/g, "") === "DouglasHurley" ? "/Crew" : `${element.name.replace(/\s/g, "")}`} end></NavLink>
      )
     })}
     </ul>
      </div>
      {array.crew
    .filter((element) => (element.name.replace(/\s/g, "") === name))
    .map((element) => (

      <div key = {element.name} className="crew_image">
       <img src={element.images.webp} alt="" />
      </div>
    ))}
     
      </div>
    </div>
  )
}

export default Crew
