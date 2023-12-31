/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lt: "360px",
      sm: "600px",
      md: "728px",
      lg: "984px",
      xl: "1200px",
    },
    container: {
      screens: {
        lt: "360px",
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        bgColor: "#2E4683",
        primaryColor: "#000066",
        white: "#ffffff",
        secondaryColor: "#DEDEDE",
        green: "#53B175",
        greenPrimary: "#D6ECDF",
        red: "#fc5f5f",
        black: "#242424",
        textColor: "#2b2f38",
        pColor: "#5D6167",
        iconBg: "#E6E6E6",
        iconHoverBg: "#b5b5b5",
        buttonBg: "#FC5F5F",
      },
    },
  },
  plugins: [],
};
