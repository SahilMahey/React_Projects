import React from 'react'
import './Navbar.css'
function Navbar(props) {
    
    
  return (
  <nav>
    <ul>
        <li><input type="color" className="form-control form-control-color" id="exampleColorInput" value="#000000"  onChange = {props.func1} title="Choose your background color"/> </li>
        <li><h1>TEXT ANALYZER</h1></li>
        <li><input type="color" className="form-control form-control-color" id="exampleColorInput" value="#111111" onChange = {props.func2} title="Choose your text color"/></li>
    </ul>
  </nav>
  )
}

export default Navbar
