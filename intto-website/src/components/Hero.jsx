import React from 'react'
import imghero from './images/Hero image.png'
const Hero = () => {
  return (
    <div className=' text-white mt-[85pt] relative w-full h-full'>
        <div className='bg-[#274E41] opacity-60 z-10 w-430px'>
          <img src={imghero} alt='Hero' className='opacity-100 z-0 w-full h-full object-cover'/>
        </div>
        <div className='absolute inset-0 flex-col w-full h-screen text-center justify-center'>
          <h1 className='font-bold text-3xl pt-8'>Driving the Culture of Innovation</h1>
          <p className='font-medium px-20 py-0'>We provide business and business transfer opportunities among faculty, students, alumni and the community.</p>
          <button className='bg-[#2B9E6D] rounded-lg p-4 m-1 font-semibold 4x1'>Innovate with us!</button>
        </div>

        {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="backdrop-blur-md bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl p-6">
          <h1 className="text-white text-4xl font-bold">Glassmorphism Effect</h1>
        </div>
        </div> */}
    </div>
  )
}

export default Hero