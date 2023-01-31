import React from 'react'
import "./Footer.css"
import status from '../Video/status.png'
import mic from '../Video/mic.svg'
import camera from '../Video/camera-video.svg'
import volume from '../Video/volume-up.svg'

const Footer = () => {
  return (
    <div className='footer'>


      <div>
        <img src={status} alt='' width='500px' height='80px'></img>
      </div>
      <div className='Footer-rightSection'>
        <button className='End-Button'>End Jam</button>
        <div><img src={mic} alt=''></img></div>
        <div><img src={volume} alt=''></img></div>
        <div><img src={camera} alt=''></img></div>
      </div>


    </div>
  )
}

export default Footer