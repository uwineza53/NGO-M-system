/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.teal, DEFAULT: colors.teal[500] },
        secondary: { ...colors.green, DEFAULT: colors.green[500] },
        neutral: { ...colors.slate, DEFAULT: colors.slate[500] },
        issue: { ...colors.red, DEFAULT: colors.red[500] }
      }
    },
  },
  plugins: [],
}

