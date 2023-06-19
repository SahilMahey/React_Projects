import React,{useState} from 'react'
import './Textarea.css'
import Button from '../components/Button'
function Textarea(props) {
  const [text, settext] = useState("Enter Text Here")
  const pull_text = (data) => {
    settext(data)
   }
  function text_change(event)
  {
    settext(event.target.value)
  }
  return (
  <>
<div className="text_area">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control form" id="exampleFormControlTextarea1" value = {text} onChange = {text_change}rows="10" style = {{width: "500px",
    border: "5px solid greenYellow" , fontSize: "20px", color:`${props.color}`}}></textarea>
</div>
<Button text={text} func={pull_text}/>
</>

  )
}

export default Textarea
