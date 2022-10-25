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
      },
      margin: {
        '20%': '20%',
      },
      minWidth: {
        '200px': '200px',
      },
      height: {
        'h-0.5': '1px',
      }
    },
  },
  plugins: [],
}
