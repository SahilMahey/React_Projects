import React from 'react'
import './Button.css'
function Button(props) {
    function uppercase()
    {
        let new_text = props.text;
        new_text.toUpperCase()
        props.func(new_text.toUpperCase())

    }

    function lowercase()
    {
        let new_text = props.text;
        props.func(new_text.toLowerCase())

    }

    function copy()
    {
        console.log(props.text)
        navigator.clipboard.writeText(props.text);
    }

    function clear()
    {
        props.func("")
    }
  
    return (
    <div className='button_'>
      <div className="button1_ ">
      <button type="button" className="btn btn-primary mx-2" onClick={uppercase}>Convert TO Uppercase</button>
      <button type="button" className="btn btn-secondary" onClick={lowercase}>Convert TO Lowercase</button>
      </div>
      
      <div className="button2_">
      <button type="button" className="btn btn-success mx-2" onClick={copy}>Copy Text</button>
      <button type="button" className="btn btn-danger" onClick={clear}>Clear</button>
      </div>
    
      
    </div>
  )
}

export default Button
