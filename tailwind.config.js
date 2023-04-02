/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          main : 'hsl(26, 100%, 55%)',
          pale: 'hsl(25, 100%, 94%)'
        },
        blue: {
          'very-dark': 'hsl(220, 13%, 13%)',
          'dark-grayish': 'hsl(219, 9%, 45%)',
          'grayish': 'hsl(220, 14%, 75%)',
          'light-grayish': 'hsl(223, 64%, 98%)'
        },
        black: 'hsl(0, 0%, 0%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        kumbh: ['Kumbh\\ Sans', 'sans-serif']
      },
      fontSize: {
        paragraph: '16px'
      },
      backgroundImage: {

      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px'
      },
      boxShadow: {
        'custom': '0 25px 50px -12px rgba(255, 125, 26, 0.5)'
      }
    },
  },
  plugins: [],
}

