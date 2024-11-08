import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center ">
        
        <div className="mt-2 mb-4">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          
        </div>
        <div className="flex justify-center mt-4">
         
          <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 mx-4" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 mx-4" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-pink-600 mx-4" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700 mx-4" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-lg mt-8">
          &copy; {new Date().getFullYear()} Arcadia's Fitness Club. All rights reserved.
        </p>
      </div>
     
    </footer>
  );
};

export default Footer;
