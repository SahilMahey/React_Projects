import React, {useState} from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom';
import Logo from './logo.svg';
import hamburger_icon from './icon-hamburger.svg'
import close_icon from './icon-close.svg'
import './Main_Header.css'
function Main_Header() {
  const [hamburger, sethamburger] = useState(true);
  function handle_hamburger()
  {
    sethamburger(!hamburger)
 
  }
  
  return (
    <>
    <div className="box">
    <Link  to = "/" className="container1"><img src={Logo} alt=""/></Link>
    <button onClick={handle_hamburger}><img src={!hamburger ? hamburger_icon : close_icon} alt="" /></button>
    { hamburger && <div className="container3">
    <ul className="navbar">
      <NavLink to="/">00 Home</NavLink><NavLink to="Destination">01 Destination</NavLink>
      <NavLink to="Crew">03 Crew</NavLink>
      <NavLink to="Technology">04 Technology</NavLink>
    </ul>
    </div> }
    <div className="line"></div> 
  </div>
  <Outlet />
  </>
   
  )
}

export default Main_Header
