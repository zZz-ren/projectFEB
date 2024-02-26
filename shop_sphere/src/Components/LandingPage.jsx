import React from 'react'
import video from '../assets/videos/bg-video-2.mp4'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export default function LandingPage() {
  return (
    <section className=''>
      <Hero />
    </section>
  )
}

//hero
function Hero() {
  return <div className='relative flex w-screen text-center justify-center items-center h-screen overflow-hidden'>
    <div className="z-20 h-full w-full flex flex-col justify-center items-center backdrop-brightness-70 text-white text-xl md:text-2xl">
      <span className=' text-3xl md:text-8xl font-bold'>Welcome to Shop Sphere!</span>
      <br />
      Discover Everything You Need in One Place: Your Ultimate Shopping Destination!"
      <Link to={'/home'}><motion.button whileHover={{ translateY: '-15%' }} whileTap={{ scale: 0.90 }} className='text-xl bg-white text-black p-2 rounded-xl r mt-5'>Go to Home <span className='text-[#de5a4e] '>→</span></motion.button></Link>
    </div>
    <Video />
  </div>
}
//video-container
function Video() {
  return <video autoPlay loop muted className=' absolute max-w-none md:max-w-full '>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
}
