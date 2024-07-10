/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Cormorant Garamond', 'serif'],
        secondary: ['Frank Ruhl Libre', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        vanillaGray: '#ECE6DA',
        vanilla: '#FCEFBB',
        militar: '#403D2E',
        blackened: '#26211E',
      },
      screens: {
        spxs: '320px',
        spsm: '414px',
        splg: '480px',
        // sm: 640px
        // md: 768px
        // lg: 1024px
        // xl: 1280px
        // 2xl: 1536px
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
