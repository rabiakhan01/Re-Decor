/** @type {import('tailwindcss').Config} */
import { pinkColor, skyColor, whiteColor } from './src/utils/styles/colors'
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pinkColor': pinkColor,
        'skyColor': skyColor,
        'whiteColor': whiteColor
      }
    },
  },
  plugins: [],
}

