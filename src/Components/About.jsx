import React from 'react'
import Socials from './SVGs/Socials.tsx'

const About = () => {
  return (
    <div name='About' className='w-full h-fit lg:h-screen bg-LMbg dark:bg-DMbg'>
      <div className='h-full flex flex-col justify-center max-w-screen-2xl mx-auto pb-10 lg:pb-0'>
        {/* Title and Line */}
        <p className='text-LMtext1 font-semibold text-center text-5xl tracking-wide pt-28 lg:pt-10 dark:text-DMtext1'>About Me</p>
        <div className='bg-accentPink w-[320px] h-1 mx-auto mt-2 mb-4'></div>

        {/* Primary Section */}
        <div>
          <div className='px-12 grid grid-cols-1 lg:flex lg:justify-center lg:px-28'>
            <img src='/Images/me.jpg' alt='Me!' className='w-[350px] rounded-xl object-contain mx-auto lg:w-[300px]'></img>

            {/* Description */}
            <div className='flex flex-col gap-4'>
              <p className='text-LMtext1 text-xl pt-4 px-2 text-center sm:text-2xl lg:text-left lg:px-12 dark:text-DMtext1'>
                Hiya there! The name's Gabriella, but most people call me Gaby.
                I'm currently a senior university student who will be graduating with a dual major in Computer Science and Information
                Technology in Fall 2023. I spend a lot of my time looking for new projects to take on and hanging out with my dog. </p>

              {/* Interests and Hobbies */}
              <div className='grid grid-flow-col mx-auto my-4 gap-10 sm:gap-20 lg:flex lg:items-center xl:ml-48'>
                <div>
                  <p className='text-LMtext1 text-xl font-semibold tracking-wide underline underline-offset-4 
                                decoration-accentPink decoration-4 sm:text-2xl dark:text-DMtext1'>.interests</p>
                  <p className='text-LMtext1 text-xl dark:text-DMtext1'>{`{`} <br></br> &nbsp;&nbsp;&nbsp;&nbsp; Web Dev. <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; Programming <br></br> &nbsp;&nbsp;&nbsp;&nbsp; Game Dev. <br></br> {`}`}</p>
                </div>

                <div>
                  <p className='text-LMtext1 text-xl font-semibold tracking-wide underline underline-offset-4 
                                decoration-accentPink decoration-4 sm:text-2xl dark:text-DMtext1'>.hobbies</p>
                  <p className='text-LMtext1 text-xl dark:text-DMtext1'>{`{`} <br></br> &nbsp;&nbsp;&nbsp;&nbsp; Gaming <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp; Music <br></br> &nbsp;&nbsp;&nbsp;&nbsp; Designing <br></br> {`}`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className='flex gap-12 justify-center pt-8 xl:pt-4'>
            <form action='http://www.FlourTM.com/' target='_blank'>
              <button><Socials className='w-12 sm:w-20 cursor-pointer' /></button>
            </form>

            <form action='' target='_blank'>
              <button><Socials className='w-12 sm:w-20 cursor-pointer' /></button>
            </form>

            <form action='http://www.BorderlineBee.com/' target='_blank'>
              <button><Socials className='w-12 sm:w-20 cursor-pointer' /></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About