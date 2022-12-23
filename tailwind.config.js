/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '728px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      colors: {
        accentPink: '#DB0E4B',
        accentBlue: '#0FC5AF',
        accentYellow: '#E7AA0D',

        DMtext1: '#EBEBEB',
        DMtext2: '#D0D0D0',
        DMbg: '#000812',

        LMtext1: '#000812',
        LMtext2: '#3E3E3E',
        LMbg: '#CFE9E6',
      },
    },
  },
  plugins: [],
}
