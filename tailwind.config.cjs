/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "x-lg": "1500px",
    },

    fontFamily: {
      gilda: ["Gilda Display", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#926c3a",
        secondary: "#926c3a",
        "accent-main": "#926c3a",
        "accent-aside": "#926c3a",
      },
    },
  },
  plugins: [],
};
