/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2B2D42',
        'secondary-blue': '#8D99AE',
        'light-blue': '#EDF2F4',
        'primary-green': '#006D77',
        'secondary-green': '#83C5BE',
        'light-green': '#EDF6F9',
      }
    },
  },
  plugins: [],
}
