/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue' : '#bae6fd'
      }
    },
    fontFamily : {
      'nunito' : ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

