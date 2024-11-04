import React from 'react';
import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className='bg-white fixed z-50 w-full shadow'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <img src={logo} alt="sitelogo" className='h-20 mr-4' /> 
        </div>
        <ul className='flex space-x-4 text-2xl'>
          <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500 '>
            <a href="#home">HOME</a>
          </li>
          <span>|</span>
          <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500 '  >
            <a href="#about">ABOUT</a>
          </li>
          <span>|</span>
          <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500 '>
            <a href="#supplements">SUPPLEMENTS</a>
          </li>
          <span>|</span>
          <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500 '>
            <a href="#contact">CONTACT</a>
          </li>
          <span>|</span>
          <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500 '>
            <a href="#support">SUPPORT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
