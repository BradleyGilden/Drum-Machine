/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fg': '#F2CD78',
        'bg': '#14142B',
      },
      textColor : {
        'fg': '#F2CD78',
        'bg': '#14142B',
      },
      fontSize: {
        '4xl': '3rem'
      }
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
