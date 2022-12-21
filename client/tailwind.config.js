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
      // Navbar: '#701685',
      Navbar: '#593C60',
      // Navbar: '#661395',
      // Navbar: '#996CA4',
      // Navbar: '#545ba1',
      Navtitle: '#F4F2F2',
      Background: '#00feea',
      // Accent: '#c0a3cf',
      // Accent: '#a3a7cf',
      AccentText: '#1b161f',
      LightBG: '#ebeeef',
    },
  },
  plugins: [],
}
