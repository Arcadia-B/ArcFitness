import React from 'react'
import exercise_1 from "../../Assets/exercise-1.jpg"
import exercise_2 from "../../Assets/exercise-2.jpg"
import exercise_3 from "../../Assets/exercise-3.jpg"

const Exercises = () => {
  return (
    <div className='mx-auto container px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            <div className='flex flex-col justify-center'>
        <img src={exercise_1} alt="exercise_img" className='w-full rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer' />
        <h1 className='text-2xl sm:text-3xl mt-4'>HeavyLifting</h1>
        <p className='text-sm sm:text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat pariatur 
          aspernatur officia animi nesciunt.</p>
        </div>
        <div >
        <img src={exercise_2} alt="exercise_img" className='w-full rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer ' />
        <h1 className='text-2xl sm:text-3xl mt-4'>Cardio</h1>
        <p className='text-sm sm:text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, illum? Nam inventore magnam autem adipisci?</p>
        </div>
        <div>
        <img src={exercise_3} alt="exercise_img" className='w-full rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90 cursor-pointer ' />
        <h1 className='text-2xl sm:text-3xl mt-4'>Meditation</h1>
        <p className='text-sm sm:text-base mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio id aliquid ducimus debitis atque praesentium?</p>
        </div>
        </div>

    </div>
  )
}

export default Exercises