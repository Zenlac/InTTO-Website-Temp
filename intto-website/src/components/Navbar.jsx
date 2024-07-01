import React, {useState} from 'react';
import { IoIosMenu,IoIosClose } from "react-icons/io";
import logo from './images/InTTO Logo White.svg';
const Navbar = () => {
  const[nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='text-white'>
        <div className='flex justify-center items-center w-screen h-100pt mx-auto px-4 z-10'>
          <img src={logo} alt="Logo" className='object-scale-down h-50 w-28 absolute left-4 top-8 z-10'/> 
          <ul className='hidden md:flex pt-8'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Startups</li>
            <li className='p-4'>Events</li>
          </ul>
        </div>
        

        <div onClick={handleNav} className='absolute right-8 top-10 block md:hidden z-10'>
          {!nav ? <IoIosClose size={32}/> : <IoIosMenu size={32}/>}
        </div>

        <div className={!nav ? 'z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#114331] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <img src={logo} alt="Logo" className='object-scale-down h-50 w-28 m-8 '/>
          <ul className='p-4 pt-8 uppercase my-8'>
            <li className='p-4 border-b border-gray-300'>Home</li>
            <li className='p-4 border-b border-gray-300'>About</li>
            <li className='p-4 border-b border-gray-300'>Services</li>
            <li className='p-4 border-b border-gray-300'>Startups</li>
            <li className='p-4'>Events</li>
          </ul>
        </div>


    </div>
    
  )
}

export default Navbar