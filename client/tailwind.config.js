/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      lightMint: '#daffef',
      mint: '#d0ffd6',
      lightPurple: '#F0C9F7',
      blackCoffee: '#32292f',
    },
  },
  plugins: [],
}
