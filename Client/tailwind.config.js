/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'max-sm': {'max': '667px'},
        'max-lg': {'max':'1024px'},
      },
      fontFamily: {
        'bebas':['"Bebas Neue"','sans-serif'],
      }
    },
  },
  
}
