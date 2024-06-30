/** @type {import('tailwindcss').Config} */
import { orangeColor, pinkColor } from './src/utils/styles/colors'
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orangeColor': orangeColor,
        pinkColor: pinkColor,
      }
    },
  },
  plugins: [],
}

