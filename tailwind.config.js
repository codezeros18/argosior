/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '90': '.90',
      },
    lineHeight:{
        'extra-loose': '2.5',
        '12': '3rem',
    },
    colors: {
      'blacktheme' : '#101010',
      'greenbar' : '#28CB8B',
      'greenhead' : '#1B5E1F',
      'bluebar' : '#1B1C57',
      'greyhead' : '#4D4D4D',
      'yellowlocate' : '#FBC02D',
      'greybackg' : '#89939E',
    },
    height: {
        '128': '48rem',
        '7xl': '4.5rem',
    },
    fontFamily: {
        'montserrat': ['Montserrat'],
        'roboto' : ['Roboto'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'lexend': ['Lexend','sans-serif']
    },
    },
  },
  plugins: [],
}

