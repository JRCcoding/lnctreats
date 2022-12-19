/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico', 'cursive'],
        Museo: ['museo-sans-rounded', 'sans-serif'],
        Pedestria: ['pedestria-mvb', 'sans-serif'],
        Multi: ['multi-display', 'sans-serif'],
      },
    },
    colors: {
      Logo: '#B849D8',
      Navbar: '#2A083D',
      Navtitle2: '#984062',
      Navtitle: '#C23D68',
      Background: '#00feea',
      LightBG: '#FFE8FF',
    },
  },
  plugins: [],
}
