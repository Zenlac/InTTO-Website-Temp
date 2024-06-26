import React from 'react';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold'>InTTO</h1>
        <ul className='flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Services</li>
          <li className='p-4'>Startups</li>
          <li className='p-4'>Events</li>
        </ul>
    </div>
  )
}

export default Navbar