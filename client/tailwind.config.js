/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        LaBelle: ['La Belle Aurore', 'cursive'],
      },
    },
    colors: {
      lightMint: '#ebffed',
      mint: '#daffef',
      lightPurple: '#f5dcfa',
      blackCoffee: '#32292f',
    },
  },
  plugins: [],
}
