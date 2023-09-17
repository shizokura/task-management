/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      main: '#006EE9',
      sub: '##EBF2FF',
      disabled: '#EEF5FD',
      white: '#fff'
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
      title: ['Righteous', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

