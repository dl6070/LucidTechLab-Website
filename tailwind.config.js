/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          green: '#16a34a',
          blue: '#2563eb',
        }
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
};