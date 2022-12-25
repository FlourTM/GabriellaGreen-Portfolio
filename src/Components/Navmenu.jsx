import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import Hexagon from './SVGs/Hexagon.tsx'

import YellowShape from './Models/YellowShape.jsx'
import PinkShape from './Models/PinkShape.jsx'
import BlueShape from './Models/BlueShape.jsx'
import { Canvas } from '@react-three/fiber'

const Navmenu = () => {
  const navigate = useNavigate()

  return (
    <div name="Navmenu" className='w-full h-screen bg-LMbg dark:bg-DMbg'>
      <div className='h-screen flex sm:items-center'>
        <div className='absolute w-1/3'>
          <Canvas>
            <pointLight position={[10, 5, 10]} />
            <YellowShape />
          </Canvas>
          <Canvas>
            <pointLight position={[10, 5, 10]} />
            <BlueShape />
          </Canvas>
          <Canvas>
            <pointLight position={[10, 5, 10]} />
            <PinkShape />
          </Canvas>
        </div>

        <ul className='mx-auto pt-32 flex flex-col sm:gap-10 sm:pl-28 sm:pt-0'>

          {/* Home */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-LMtext1 dark:stroke-DMtext1 w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>01</p>
            </div>
            <button onClick={() => { navigate("/"); }}><p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>Home</p></button>
          </div>

          {/* About */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-accentPink w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>02</p>
            </div>
            <button onClick={() => { navigate("/about"); }}><p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>About</p></button>
          </div>

          {/* Projects */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-accentBlue w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>03</p>
            </div>
            <button onClick={() => { navigate("/projects"); }}><p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>Projects</p></button>
          </div>

          {/* Contact */}
          <div className='flex items-center w-fit cursor-pointer
            hover:scale-125 transition-all duration-500'>

            <div className='flex items-center justify-center relative'>
              <Hexagon className='stroke-accentYellow w-16 sm:w-24' />
              <p className='text-3xl sm:text-4xl absolute text-LMtext1 dark:text-DMtext1'>04</p>
            </div>
            <button onClick={() => { navigate("/contact"); }}><p className='uppercase text-4xl sm:text-6xl font-medium px-6 text-LMtext1 dark:text-DMtext1'>Contact</p></button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navmenu