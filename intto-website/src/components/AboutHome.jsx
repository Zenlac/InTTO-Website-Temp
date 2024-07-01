import React from 'react'
import ahimg from './images/AboutHome.png'
const AboutHome = () => {
  return (
    <div className='flex-col justify-center text-center text-white'>
      <h1 className='font-semibold px-12 py-0 x-2 text-2xl '>About</h1>
      <p className='font-medium text-xs mx-4'>At the UC Innovation and Technology Transfer Office (InTTO), our mission is to drive a culture of innovation within the university community, fostering an environment where creativity and forward-thinking thrive among students, faculty, and staff. We nurture the development of ideas from all stakeholders, ensuring a collaborative approach that harnesses a diverse range of perspectives and insights. </p>
      <img className='w-full h-auto p-4 rounded-sm' src={ahimg} alt="about home" />
    </div>
  )
}

export default AboutHome