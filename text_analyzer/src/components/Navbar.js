import React, {useState}from 'react'
import './Navbar.css'
function Navbar(props) {
    const [background_color, setbcolor] = useState("");
    const [font_color, setfcolor] = useState("");
    props.func(background_color,font_color)
    
    function change_background(event){
        setbcolor(event.target.value)
    }
    function change_text_color(event){
        setfcolor(event.target.value)
    }
  return (
  <nav>
    <ul>
        <li><input type="color" className="form-control form-control-color" id="exampleColorInput" value={background_color}  onChange = {change_background} title="Choose your background color"/> </li>
        <li><h1>TEXT ANALYZER</h1></li>
        <li><input type="color" className="form-control form-control-color" id="exampleColorInput" value={font_color} onChange = {change_text_color} title="Choose your text color"/></li>
    </ul>
  </nav>
  )
}

export default Navbar
