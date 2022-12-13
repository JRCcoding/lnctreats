/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        LaBelle: ['La Belle Aurore', 'cursive'],
      },
    },
    // colors: {
    //   lightMint: '#ebffed',
    //   mint: '#daffef',
    //   lightPurple: '#f5dcfa',
    //   blackCoffee: '#32292f',
    // },
    colors: {
      lightMint: '#8AD8C6',
      mint: '#5fb0b7',
      lightPurple: '#af2bbf',
      darkPurple: '#CA9ADB',
      blackCoffee: '#6c91bf',
    },
  },
  plugins: [],
}
