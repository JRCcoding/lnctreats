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
      Navbar: '#c3738e',
      Navtitle2: '#984062',
      Navtitle: '#F4F2F2',
      Background: '#00feea',
      Accent: '#6b7ca2',
      LightBG: '#F4F2F2',
    },
  },
  plugins: [],
}
