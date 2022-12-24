import React from 'react'
import Hexagon from './SVGs/Hexagon.tsx'
import Socials from './SVGs/Socials.tsx'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-LMbg dark:bg-DMbg'>
      <div className='h-full flex flex-col justify-center max-w-screen-2xl mx-auto pb-10 lg:pb-0'>
        {/* Title and Line */}
        <p className='text-LMtext1 font-semibold text-center text-5xl tracking-wide pt-28 lg:pt-10 dark:text-DMtext1'>Contact Me</p>
        <div className='bg-accentYellow w-[320px] h-1 mx-auto mt-2 mb-4'></div>

        <div className='px-8 lg:flex lg:px-12 lg:justify-center lg:gap-10'>
          {/* Contact Form */}
          <div className='lg:w-[600px] text-center flex flex-col'>
            <p className='text-LMtext1 dark:text-DMtext1 text-2xl font-semibold pb-4 lg:pb-0'>Send an email using the form below:</p>

            <div className='flex w-full justify-center'>
              {/* Put form service provider link in action tag */}
              <form method="POST" action="" target='_blank' className='text-xl text-LMtext1 dark:text-DMtext1 lg:ml-5 grid gap-5 pb-12 lg:pb-0'>
                <div className='grid grid-flow-col items-center gap-5 lg:mb-[-20px]'>
                  <Hexagon strokeWidth={6} className='stroke-accentPink w-12 hidden lg:block' />
                  <input name="name" type='text' placeholder='Name' className='pl-3 h-12 bg-transparent border-4 border-accentPink w-[300px] lg:w-[500px]' required></input>
                </div>

                <div className='grid grid-flow-col items-center gap-5 lg:my-[-20px]'>
                  <Hexagon strokeWidth={6} className='stroke-accentBlue w-12 hidden lg:block' />
                  <input name="email" type='email' placeholder='Email' className='pl-3 h-12 bg-transparent border-4 border-accentBlue w-[300px] lg:w-[500px]' required></input>
                </div>

                <div className='grid grid-flow-col gap-5 mt-2'>
                  <Hexagon strokeWidth={6} className='stroke-accentYellow w-12 lg:mt-[-28px] hidden lg:block' />
                  <textarea name="message" placeholder='Message' className='pl-3 pb-20 h-32 bg-transparent border-4 border-accentYellow w-[300px] lg:w-[500px]' required></textarea>
                </div>


                <div className='flex items-center justify-center lg:pl-12'>
                  <button className='border-4 rounded-lg w-40 py-1 border-accentYellow text-lg sm:text-xl font-semibold uppercase 
                hover:bg-accentYellow dark:hover:text-DMbg'>Send</button>
                </div>
              </form>
            </div>

          </div>

          {/* Socials */}
          <div className='lg:w-[600px] text-center'>
            <p className='text-LMtext1 dark:text-DMtext1 text-2xl font-semibold '>Or find me on my socials:</p>

            <div className='flex justify-center pt-2 lg:pt-8 gap-12'>
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
    </div>
  )
}

export default Contact