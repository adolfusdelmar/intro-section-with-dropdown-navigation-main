/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./style.css'],
  theme: {
    extend: {
      fontFamily:{
        'Epilogue':['Epilogue']
      },
      gridTemplateRows:{
        '8':'repeat(8, minmax(0, 1fr))',
        'layout':'200px minmax(900px, 1fr) 100px',
      },
      gridTemplateColumns:{
        '16': 'repeat(16, minmax(0,1fr))',

      },
      fontSize:{
        '1': '1fr',
        '2':'2fr',
      },
      
    },
    
  },
  plugins: [],
}