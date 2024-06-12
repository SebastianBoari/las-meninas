/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './public/index.html', 
  ],
  theme: {
    extend: {
      colors: {
        custom1: '#fcefbb',
        custom2: '#d5cb9e',
        custom3: '#b0a782',
        custom4: '#8c8568',
        custom5: '#6a654e',
        custom6: '#5a5442',
        custom7: '#4b4436',
        custom8: '#3b352a',
        custom9: '#363027',
        custom10: '#312b24',
        custom11: '#2c2621',
        custom12: '#26211e',
      },
    },
  },
  plugins: [],
}

