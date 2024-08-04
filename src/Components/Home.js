import React from 'react'
import { homeImage } from '../assets'
import { AppText } from '../Constants/index'

const Home = () => {
  return (
    <div className='mt-7 flex px-4 md:px-20 flex-col md:flex-row items-center'>
      <div>
        <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>

        <h1 className='text-[40px] font-bold'>
          {AppText.Iam}
          <span className='text-purple-600'>{AppText.RahulSanap}</span>
        </h1>

        <h1 className='text-gray-400 mt-4'>{AppText.aboutMeDescripion}</h1>

        <button className='bg-purple-600 p-2 px-3 rounded-md text-white mt-4 transition-all ease-in-out hover:scale-110'>Resume</button>

      </div>

      <img src={homeImage} className='w-[400px] md:w-[400px]' />
      
    </div>
  )
}

export default Home