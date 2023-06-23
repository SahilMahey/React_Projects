import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <main>
      <div className="home_container">
    <div className="content">
      <p className = "para1">{"So, you want to travel to".toUpperCase()}</p>
      <h1>SPACE</h1>
      <p className = "para2">
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <button className = "explore"><NavLink to="Destination">Explore</NavLink></button>
    </div>
    </main>
  )
}

export default Home
