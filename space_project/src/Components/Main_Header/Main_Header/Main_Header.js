import React, {useState} from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom';
import Logo from './logo.svg';
import array from '../../../data.json'
import hamburger_icon from './icon-hamburger.svg'
import close_icon from './icon-close.svg'
import './Main_Header.css'
function Main_Header() {
  const [hamburger, sethamburger] = useState(false);
  
  function handle_hamburger()
  {
    if (!hamburger)
    {
      document.getElementsByClassName('container3')[0].style.display = 'block'
    }
    else if (hamburger)
    {
       document.getElementsByClassName('container3')[0].style.display = 'none'
    }
    sethamburger(!hamburger)
    
    
  }
  return (
    <>
    <div className='main_header_container'>
    <div className="box">
    <Link  to = "/" className="container1"><img src={Logo} alt=""/></Link>
    <button onClick={handle_hamburger}><img src={!hamburger ? hamburger_icon : close_icon} alt="" /></button>
    <div className="container3">
  <ul className="navbar">
      <NavLink to="/">00 Home</NavLink>
      <NavLink to="Destination">01 Destination</NavLink>
      <NavLink to="Crew">02 Crew</NavLink>
      <NavLink to="Technology">03 Technology</NavLink>
  
    </ul>
    </div> 
    <div className="line"></div> 
  </div>
  </div>
  <Outlet />
  </>
   
  )
}

export default Main_Header
