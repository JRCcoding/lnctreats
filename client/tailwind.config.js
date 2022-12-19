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
      Navtitle: '#ffffff',
      Background: '#00E0CE',
      LightBG: '#FFE8FF',
    },
  },
  plugins: [],
}
