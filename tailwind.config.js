/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-text': 'rgb(203 213 225)',
        'light-text': 'rgb(51 65 85)',
        'light-bg': 'rgb(241 245 249)',
        'dark-bg': 'rgb(30 41 59)',
        'dark-link': 'rgba(0, 0, 0, 0.804)',
        'light-link': 'rgba(0, 0, 0, 0.804)',
      },
    },
  },
  plugins: [],
}