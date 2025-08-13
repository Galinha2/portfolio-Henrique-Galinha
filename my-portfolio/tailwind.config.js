/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        wordSpacing: {
        '10': '10px',
        '20': '20px',
      },
    },
  },
  plugins: [],
}