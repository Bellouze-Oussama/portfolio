/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      hand: ['"Edu NSW ACT Foundation"', 'cursive'],
      'hand-2': ['"Patrick Hand SC"', 'cursive'],
      'hand-3': ['"Patrick Hand"', 'cursive'],
    },
    },
  },
  plugins: [],
}

