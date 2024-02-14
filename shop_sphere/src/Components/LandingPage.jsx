import React from 'react'
import video from '../assets/videos/bg-video.mp4'
export default function LandingPage() {
  return (
    <div className='relative flex items-center h-screen overflow-hidden'>
      <div className="z-20 text-white text-2xl md:text-4xl w-1/2 ">


        <span className='text-3xl md:text-7xl '>Welcome to Shop Sphere!</span>
        <br />

        Discover. Shop. Smile.
      </div>
      <Video />
    </div>
  )
}

function Video() {
  return <video autoPlay loop muted className='min-h-full min-w-full absolute max-w-none w-auto'>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
}

