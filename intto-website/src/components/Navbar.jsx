import React, {useState} from 'react';
import { IoIosMenu,IoIosClose } from "react-icons/io";
import logo from './images/InTTO Logo White.svg';
const Navbar = () => {
  const[nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='flex justify-center items-center h-100 mx-auto px-4 text-white '>
        <img src={logo} alt="Logo" className='object-scale-down h-8 w-20 fixed left-8 top-8'/> 
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Services</li>
          <li className='p-4'>Startups</li>
          <li className='p-4'>Events</li>
        </ul>

        <div onClick={handleNav} className='fixed right-8 top-8 block md:hidden'>
          {!nav ? <IoIosClose size={28}/> : <IoIosMenu size={28}/>}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#114331] ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <img src={logo} alt="Logo" className='object-scale-down h-8 w-124 m-4 '/>
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