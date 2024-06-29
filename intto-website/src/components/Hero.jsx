import React from 'react'
import imghero from './images/Hero image.png'
const Hero = () => {
  return (
    <div className=' text-white mt-[85pt] tablet:mt-0 relative w-full h-full'>

        <div className='bg-[#274E41] opacity-55 z-10 w-430px'>
          <img src={imghero} alt='Hero' className='opacity-100 z-0 w-full h-full object-cover'/>
        </div>

        <div className='absolute inset-0 flex-col w-full h-screen text-center justify-center'>
          <h1 className='font-bold text-2xl pt-4'>Driving the Culture of Innovation</h1>
          <p className='font-medium px-12 py-0 text-xs'>We provide business and business transfer opportunities among faculty, students, alumni and the community.</p>
          <button className='bg-[#2B9E6D] rounded-lg p-2 m-2 font-semibold 4x1'>Innovate with us!</button>
        </div>

          
    </div>
  )
}

export default Hero