import React from 'react';
import ohimg from './images/ObjectivesHome.png';
const ObjectivesHome = () => {
  return (
    <div className='flex-col justify-center text-center'>
      <h1 className='font-semibold px-12 py-0 x-2 text-2xl '>Objective</h1>
      <p className='font-medium text-xs mx-4'>Drive the culture of innovation by providing business and technology transfer opportunities among faculty, students, alumni and the community.</p>
      <img className='w-full h-auto p-4 rounded-sm' src={ohimg} alt="about home" />
    </div>
  )
}

export default ObjectivesHome