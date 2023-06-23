/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Fraunces', 'serif'],
        'secondary': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}



