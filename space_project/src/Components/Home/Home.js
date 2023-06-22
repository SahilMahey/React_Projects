import React from 'react'
import './Home.css'
function Home() {
  return (
    <main>
      <div className="home_container">
    <div className="content">
      <p class = "para1">{"So, you want to travel to".toUpperCase()}</p>
      <h1>SPACE</h1>
      <p class = "para2">
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <button class = "explore">Explore</button>
    </div>
    </main>
  )
}

export default Home
