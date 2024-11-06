import React from 'react'
import hero from "../../Assets/hero.jpg"

const Hero = () => {
  return (
    <div className='relative'>
      <div>
        <img className='w-full h-auto' src={hero} alt="hero_img" />
        {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center top-20 px-4'>
            <p className=' text-white mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-lg sm:max-w-xl'>You don’t have to go it alone when it comes to fitness!
                 Take advantage of our 20% 
                discount on couple memberships and embark on a healthy journey with your partner.</p>
                <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full text-base sm:text-lg hover:bg-purple-800 transition duration-300">Join Us</button>
        </div>
    </div>
    </div>
  )
}

export default Hero