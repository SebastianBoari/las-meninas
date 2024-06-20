/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        vanillaGray: '#ECE6DA',
        vanilla: '#FCEFBB',
        militar: '#403D2E',
        blackened: '#26211E',
      },
      screens: {
        spxs: '320px',
        spsm: '375px',
        splg: '480px',
      },
    },
  },
  plugins: [],
}
