/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF8300',
          600: '#E67600'
        }
      }
    },
  },
  plugins: [],
};