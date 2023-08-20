/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Include files to apply tailwind css files to
  theme: {
    extend: {
      colors: {
        'weather-primary': '#00668A',
        'weather-secondary': '#004E71'
      }
    },
    fontFamily: {
      Roboto: ['Roboto, sans-serif']
    },
    // default container styles
    container: {
      padding: '2rem',
      center: true
    },
    // overwrite breakpoints for screen sizes
    screens: {
      sm: '640px',
      md: '768px'
    }
  },
  plugins: []
}
