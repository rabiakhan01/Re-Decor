/** @type {import('tailwindcss').Config} */
import { purpleColor, grayColor, primaryColor, blueColor, textPrimaryColor, textSecondaryColor, textWhiteColor, lightPurpleColor, irisColor, textGrayColor, textLightBlackColor } from './src/utils/styles/colors'
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'purpleColor': purpleColor,
        'lightPurpleColor': lightPurpleColor,
        'blueColor': blueColor,
        'primaryColor': primaryColor,
        'textWhiteColor': textWhiteColor,
        'textPrimaryColor': textPrimaryColor,
        'textSecondaryColor': textSecondaryColor,
        'textGrayColor': textGrayColor,
        'textLightBlackColor': textLightBlackColor,
        'grayColor': grayColor,
        'irisColor': irisColor,
      },
      screens: {
        'xs': '400px',
        'mobile': '470px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1290px'
      },
    },
  },
  plugins: [],
}

