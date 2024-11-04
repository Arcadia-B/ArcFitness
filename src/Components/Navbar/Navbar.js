import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-white fixed z-50 w-full '> 
        <div className='container mx-auto'>
      <ul className='flex space-x-4  justify-center text-2xl '>
        <li>
            <a className='' href="#home">Home</a>
        </li>
        <span>|</span>
        <li>
            <a href="#about">About</a>
            
        </li>
        <span>|</span>
        <li>
            <a href="#supplements">Supplements</a>
        </li>
        <span>|</span>
        <li>
            <a href="#contact">Contact</a>
        </li>
        <span>|</span>
        <li>
            <a href="#support">Support</a>
        </li>
        
      </ul>
      </div>
      <div className='border-b-4 border-purple-500'></div>
       
    </nav>
  )
}

export default Navbar