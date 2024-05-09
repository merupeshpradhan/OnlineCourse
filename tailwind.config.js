/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        FloralWhite: "#FDF8EE",
        ScarletGum: "#4D2C5E",
        White: "#FFFFFF",
        nero: "#1D1D1D",
        PrussianBlue: "#0F335E",
        "white-bg": "rgba(255,255,255,0.4)",
        DarkGray: "#ACACAC",
        Pumpkin: "#FF7426",
        SuvaGrey: "#8A8A8A",
      },
    },
  },
  plugins: [],
};
