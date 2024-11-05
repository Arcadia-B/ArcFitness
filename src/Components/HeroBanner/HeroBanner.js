import React from 'react';
import herobanner from "../../Assets/herobanner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center mt-8" style={{ backgroundImage: `url(${herobanner})` }}>
     
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Be the best version of yourself!</h1>
        <p className="mt-4 text-lg md:text-2xl">Take the first step towards a healthier lifestyle.</p>
        <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full text-lg hover:bg-purple-800 transition duration-300">Get Started</button>
      </div>
    </div>
  );
};

export default HeroBanner;
