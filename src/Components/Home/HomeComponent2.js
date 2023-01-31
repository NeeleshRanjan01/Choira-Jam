import React from 'react'
import "./Home.css"
import video1 from "../Video/video (1).mp4"
import video2 from "../Video/video (2).mp4"

const HomeComponent2 = () => {
    return (
        <div className='home-component2'>
            <video loop autoPlay>
                <source src={video1} type="video/mp4" />
            </video>
            <video loop autoPlay>
                <source src={video2} type="video/mp4" />
            </video>
        </div>
    )
}

export default HomeComponent2