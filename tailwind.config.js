/** @type {import('tailwindcss').Config} */
import { pinkColor, platniumColor, skyColor, textWhiteColor } from './src/utils/styles/colors'
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pinkColor': pinkColor,
        'skyColor': skyColor,
        'textWhiteColor': textWhiteColor,
        'platniumColor': platniumColor
      }
    },
  },
  plugins: [],
}

