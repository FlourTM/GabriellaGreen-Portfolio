import React from 'react'

const Home = () => {
  return (
    <div name="Home" className='w-full h-screen bg-LMbg dark:bg-DMbg'>
      <div className='h-screen flex sm:items-center'>
        <div className='mx-auto pt-52 flex flex-col items-center gap-8 sm:gap-20 sm:pl-[600px] sm:pt-40'>
          {/* Intro */}
          <div className='flex flex-col items-center gap-3 sm:gap-5'>
            <div className='text-center sm:grid sm:grid-flow-col tracking-wide'>
              <h1 className='text-LMtext1 dark:text-DMtext1 text-4xl sm:text-6xl'>Hi, I'm</h1>
              <h1 className='text-LMtext1 dark:text-DMtext1 text-4xl pt-3 sm:pt-0 sm:text-6xl'><span className='hidden sm:inline'>&nbsp;</span>
                <span className='text-accentPink font-bold'>Gabriella Green</span>,</h1>
            </div>

            <div className='text-center sm:grid sm:grid-flow-col tracking-wide'>
              <h2 className='text-LMtext1 dark:text-DMtext1 text-2xl sm:text-4xl'>also known as</h2>
              <h2  className='text-LMtext1 dark:text-DMtext1 text-2xl sm:text-4xl'><span className='hidden sm:inline'>&nbsp;</span>
                <span className='text-accentBlue font-semibold'>FlourTM </span>
                or <span className='text-accentYellow font-semibold'>BorderlineBee</span>.</h2>
            </div>
          </div>
          
          {/* Welcome and buttons */}
          <div className='flex flex-col items-center gap-8 sm:gap-16 tracking-wide'>
            <div className='text-center sm:grid sm:grid-flow-col'>
              <p className='text-LMtext2 dark:text-DMtext2 text-2xl sm:text-4xl'>Welcome!</p>
              <p className='text-LMtext2 dark:text-DMtext2 text-2xl sm:text-4xl'><span className='hidden sm:inline'>&nbsp;</span>To put it simply, I like to create.</p>
            </div>
            

            <div className='flex gap-4 sm:gap-16'>
              <button className='border-4 rounded-lg w-28 sm:w-32 py-1 border-accentPink text-lg sm:text-xl uppercase font-semibold text-LMtext1 dark:text-DMtext1
                hover:bg-accentPink dark:hover:text-DMbg'>About</button>
              <button className='border-4 rounded-lg w-28 sm:w-32 py-1 border-accentBlue text-lg sm:text-xl uppercase font-semibold text-LMtext1 dark:text-DMtext1
                hover:bg-accentBlue dark:hover:text-DMbg'>Projects</button>
              <button className='border-4 rounded-lg w-28 sm:w-32 py-1 border-accentYellow text-lg sm:text-xl uppercase font-semibold text-LMtext1 dark:text-DMtext1
                hover:bg-accentYellow dark:hover:text-DMbg'>Contact</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home