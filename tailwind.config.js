/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grey': '#6D6A6A',
        'custom-green': '#0CF839',
        'custom-yellow-100': '#FFAA00',
        'custom-yellow-200': '#FF9D00',
        'custom-blue': '#009DE9',
        'custom-purple-100': '#C475F9',
        'custom-purple-200': '#950DFF',
        'custom-purple-300': '#610B89',
        'custom-purple-400': '#520484',
        'custom-purple-500': '#1B0447',
        'custom-purple-600': '#160433'
      },

    },
    textShadow: {
      sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      md: '3px 3px 6px rgba(0, 0, 0, 0.5)',
      lg: '4px 4px 8px rgba(0, 0, 0, 0.5)',
      xl: '5px 5px 10px rgba(0, 0, 0, 0.5)', '2xl': '6px 6px 12px rgba(0, 0, 0, 0.5)',
    },

    boxShadow: { custom: '2px 7px 4px rgba(0, 0, 0, 0.25)' },
    height: {
      'vh-25': '25vh',
      'vh-50': '50vh',
      'vh-75': '75vh',
      'vh-100': '100vh'
    },
    // width: {
    //   'vw-25': '25vw',
    //   'vw-35': '35vw',
    //   'vw-45': '45vw',
    //   'vw-50': '50vw',
    //   'vw-55': '55vw',
    //   'vw-65': '65vw',
    //   'vw-75': '75vw',
    //   'vw-100': '100vw'
    // },
  },
  plugins: [],
  // plugins: [ require('tailwindcss-texthadow') ],
}

