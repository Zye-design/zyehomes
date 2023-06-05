/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "rgba(15, 15, 15, 1)",
        secondary: "#FFFFFF",
        balaBlue: "rgba(41, 73, 198, 1)",
        bulaBa: "rgba(230, 228, 242, 1)",
        primaryT: "rgb(41, 62, 198)",
        secondaryT: "rgb(140 139 139)",
        orangeT: "rgb(255, 165, 0)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      border: {
        border1: "border-width: 24px",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ms: "900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
