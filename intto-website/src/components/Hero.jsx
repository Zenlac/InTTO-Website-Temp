import React from 'react'
import imghero from './images/Hero image.png'
const Hero = () => {
  return (
    <div className='text-white'>
        {/* <img src={imghero} alt='Hero'/> */}
        <div className='max-w-[350px] mt-[85pt] w-full h-screen mx-auto text-center flex-col justify-center'>
            <img src={imghero} alt='Hero'className='w-full '/>
            <h1 className='font-semibold text-4xl'>Driving the Culture of Innovation</h1>
        </div>
    </div>
  )
}

export default Hero