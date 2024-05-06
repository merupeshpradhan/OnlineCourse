/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'FloralWhite':'#FDF8EE',
        'ScarletGum': '#4D2C5E',
        'White':'#FFFFFF',
        'nero':"#1D1D1D",
        'PrussianBlue':'#0F335E',
      },
    },
  },
  plugins: [],
}

