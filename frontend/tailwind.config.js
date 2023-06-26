/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': {
        50: '#FEFAED',
        100: '#FCEDC1',
        200: '#FCCF60',
        300: '#E1B755',
        400: '#C69F4B',
        500: '#A8863F',
        600: '#8A6D33',
        700: '#755B2C',
        800: '#5E4923',
        900: '#46361A',
      },
      'neutral': {
        50: '#FAFAF9',
        100: '#EEEEEC',
        200: '#D6D4D0',
        300: '#BFBDB5',
        400: '#A9A59B',
        500: '#908A7E',
        600: '#777061',
        700: '#675E4D',
        800: '#554B38',
        900: '#423722',
      }
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '22px',
      '3xl': '25px',
      '4xl': '28px',
      '5xl': '32px',
      '6xl': '36px',
    },
    extend: {},
  },
  plugins: [],
}

