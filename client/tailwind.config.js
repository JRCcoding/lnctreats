/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico', 'cursive'],
        Lato: ['Lato', 'sans-serif'],
        Darkmode: ['darkmode-mono-off', 'sans-serif'],
        Ginger: ['ff-ginger-pro', 'sans-serif'],
        Reklame: ['reklame-script', 'sans-serif'],
      },
    },
    colors: {
      lightMint: '#ADE4D7',
      mint: '#5fb0b7',
      minty: '#85d9e0',
      lightPurple: '#DEC0E8',
      darkPurple: '#CA9ADB',
      paleBlue: '#6c91bf',
      footer: '#bb7fd1',
    },
  },
  plugins: [],
}
