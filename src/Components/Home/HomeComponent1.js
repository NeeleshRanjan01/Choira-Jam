import React from 'react'
import "./Home.css"
import video1 from "../Video/video (1).mp4"

const Home = () => {
  return (
    <div className='home-component1' >
      <video loop autoPlay>
        <source src={video1} type="video/mp4" />
      </video>
      <div class="top-left">Host</div>
    </div>
  )
}

export default Home