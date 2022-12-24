import React, { useState, useEffect } from 'react'
import Logo from './SVGs/Logo.tsx'
import Modes from './SVGs/Modes.tsx'
import Menu from './SVGs/Menu.tsx'
import './Navbar.css'

const Navbar = () => {

  // Function to change names at top
  const [loopNum, setLoopNum] = useState(0)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const [index, setIndex] = useState(1)
  const toRotate = [
    "// Gabriella Green",
    "// FlourTM",
    "// BorderlineBee",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length
    let updatedText = toRotate[i]

    setText(updatedText)
    setLoopNum(loopNum + 1)
    setIndex(1)
    setDelta(5000)
  };

  // Function to switch Light/Dark mode
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Navbar
  return (
    <div className='fixed top-0 left-0 w-full bg-LMbg dark:bg-DMbg'>
      <div className='flex items-center p-2 justify-between'>

        {/* Logo and Name */}
        <div className='flex items-center gap-3'>
          <Logo height='50' width='80' className='cursor-pointer
            fill-LMtext1 stroke-LMtext1 
            dark:fill-DMtext1 dark:stroke-DMtext1
            hover:fill-accentPink hover:stroke-accentPink' />

          <p className='hidden sm:block sm:text-xl sm:tracking-wide sm:text-LMtext1 sm:dark:text-DMtext1' >{text}</p>
        </div>


        {/* Light/Dark Mode and Menu Icon */}
        <div className='flex items-center gap-2 sm:gap-7 pr-2'>
          <button onClick={handleThemeSwitch}><Modes height='35' className='cursor-pointer' /></button>
          <Menu height='50' width='50' className='fill-LMtext1 dark:fill-DMtext1' />
        </div>

      </div>
    </div>
  )
}

export default Navbar