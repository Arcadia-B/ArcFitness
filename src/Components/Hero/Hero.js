import React from 'react'
import hero from "../../Assets/hero.jpg"

const Hero = () => {
  return (
    <div>
      <div>
        <img className='w-full' src={hero} alt="hero_img" />
        {/* <div className='absolute inset-0 bg-black opacity-50'></div> */}
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center top-20'>
            <p className=' text-white mb-4 text-3xl max-w-md'>You don’t have to go it alone when it comes to fitness!
                 Take advantage of our 20% 
                discount on couple memberships and embark on a healthy journey with your partner.</p>
                   <button className='text-white bg-purple-500 rounded-lg px-4 py-2 hover:bg-purple-800'>See Offers</button>
        </div>
    </div>
    </div>
  )
}

export default Hero