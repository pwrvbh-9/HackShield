import React from 'react'
import video1  from '../assets/video1.mp4'
import video2  from '../assets/video2.mp4'

const LandingSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        Under Our
        <span className='bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text'>
        {" "} 
        Shield,
        </span> 
        You Are  
        <span className='bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text'>
        {" "}
        Safe
        </span>
      </h1>
      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
      We provide impenetrable security solutions that give you peace of mind. Stop cyber threats before they strike and safeguard your data with our advanced technology. Choose us for unwavering protection and digital security you can trust.
      </p>
      <div className='flex justify-center my-10'>
        <a href='#' className='bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md'>
        Contact Us
        </a>
        <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
          Book a Demo
        </a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video
        autoPlay loop muted className='w-1/2 rounded-lg border border-blue-700 shadow-blue-400 mx-2 my-4'>
        <source src={video1} type='video/mp4'/>
        </video>
        <video
        autoPlay loop muted className='rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4'>
        <source src={video2} type='video/mp4'/>
        Your browser does not supprot the video tag.
        </video>
      </div>
    </div>
  )
}

export default LandingSection