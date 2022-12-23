import React from 'react'
import Hexagon from './SVGs/Hexagon.tsx'

const Navmenu = () => {
  return (
    <div name="Navmenu" className='w-full h-screen bg-LMbg dark:bg-DMbg'>
      <div className='h-screen flex sm:items-center'>
        <ul className='mx-auto pt-32 flex flex-col sm:gap-10 sm:pl-28 sm:pt-0'>

          {/* Home */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-LMtext1 dark:stroke-DMtext1 w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>01</p>
            </div>
            <p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>Home</p>
          </div>

          {/* About */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-accentPink w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>02</p>
            </div>
            <p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>About</p>
          </div>

          {/* Projects */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-accentBlue w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>03</p>
            </div>
            <p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>Projects</p>
          </div>

          {/* Contact */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-accentYellow w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>04</p>
            </div>
            <p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>Contact</p>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navmenu