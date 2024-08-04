import React from 'react'
import { aboutSection, AppText } from '../Constants'
import { laptop, wave } from '../assets'

const AboutMe = () => {
  return (
    <div className='mt-36'>
      <img src={wave} className='w-screen absolute' />
      <img src={laptop} className='absolute mt-[-100px] md:mt-[-110px] w-[220px] md:w-[300px]' />

      <div className='h-[300px] bg-purple-600 w-full'>

        <h2 className='text-[50px] text-bold text-white text-center pt-6'>
          {AppText.About}
          <span className='text-emerald-300'>{AppText.Me}</span>
        </h2>

        <h2 className='text-white mt-10 text-center px-10 md:px-64 lg:px-80'>
          {AppText.aboutMeDescripion}
        </h2>

      </div>

      <div className='md:flex-row flex flex-col items-center justify-around px-32 mt-[-60px]'>
        {
          aboutSection.map((item, index) => (
            <div className='group hover:bg-purple-600 mb-5 p-7 rounded-2xl'>
              <img src={item.image} className='w-[230px] h-[190px] object-cover rounded-lg' />

              <div className='w-[230px] pb-[20px]'>
                <h2 className='font-bold text-center group-hover:text-white'>{item.title}</h2>

                <h2 className='text-[12px] text-gray-500 text-center group-hover:text-white'>{item.desc}</h2>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AboutMe