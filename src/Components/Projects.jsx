import React from 'react'
import Hexagon from './SVGs/Hexagon.tsx'

const Projects = () => {
  return (
    // Will need to take off lg:h-screen as more projects are added. Has been futureproofed for future projects :)
    <div name='Projects' className='w-full h-fit lg:h-screen bg-LMbg dark:bg-DMbg'>
      <div className='h-full flex flex-col justify-center mx-auto py-10'>
        {/* Title and Line */}
        <p className='text-LMtext1 font-semibold text-center text-5xl tracking-wide pt-28 lg:pt-10 dark:text-DMtext1'>My Projects</p>
        <div className='bg-accentBlue w-[320px] h-1 mx-auto mt-2 mb-4'></div>

        {/* Primary Section */}
        <div className='grid grid-cols-1 px-12 gap-8 lg:grid lg:grid-cols-3 xl:px-20 lg:mx-auto lg:gap-8 xl:gap-12'>
          {/* Project 1 */}
          <div className='flex flex-col items-center lg:max-w-xl'>
            <div className='flex items-center gap-3'>
              <Hexagon strokeWidth={6} className='stroke-accentPink w-12' />
              <h1 className='text-xl font-semibold text-LMtext1 dark:text-DMtext1'>Best Pets Adoption Agency</h1>
            </div>

            <img src='/Images/bestPets.png' alt='Best Pets Adoption Agency Preview' className='pb-5' />

            <form action='https://github.com/FlourTM/Best-Pets-Final' target='_blank'>
              <button className='border-4 rounded-lg w-56 py-1 border-accentPink text-lg sm:text-xl font-semibold text-LMtext1 dark:text-DMtext1 
                hover:bg-accentPink dark:hover:text-DMbg'>View on GitHub</button>
            </form>
          </div>

          {/* Project 2 */}
          <div className='flex flex-col items-center lg:max-w-xl'>
            <div className='flex items-center gap-3'>
              <Hexagon strokeWidth={6} className='stroke-accentBlue w-12' />
              <h1 className='text-xl font-semibold text-LMtext1 dark:text-DMtext1'>Portfolio Website Template</h1>
            </div>

            <img src='/Images/portfolioTemplate.png' alt='Portfolio Website Template Preview' className='pb-5' />
            <form action='https://github.com/CodeBlockStudios/Portfolio-Template' target='_blank'>
              <button className='border-4 rounded-lg w-56 py-1 border-accentBlue text-lg sm:text-xl font-semibold text-LMtext1 dark:text-DMtext1 
                hover:bg-accentBlue dark:hover:text-DMbg'>View on GitHub</button>
            </form>
          </div>

          {/* Project 3 */}
          <div className='flex flex-col items-center lg:max-w-xl'>
            <div className='flex items-center gap-3'>
              <Hexagon strokeWidth={6} className='stroke-accentYellow w-12' />
              <h1 className='text-xl font-semibold text-LMtext1 dark:text-DMtext1'>Meal Planning Website<br></br>
                <span className='text-sm font-normal text-LMtext1 dark:text-DMtext1'>To be started soon</span></h1>
            </div>

            <img src='/Images/placeholderImage.png' alt='Meal Planning Website Preview' className='pb-5' />
            {/* <form action='' target='_blank'>
              <button className='border-4 rounded-lg w-56 py-1 border-accentYellow text-lg sm:text-xl font-semibold text-LMtext1 dark:text-DMtext1 
                hover:bg-accentYellow dark:hover:text-DMbg'>View on GitHub</button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects