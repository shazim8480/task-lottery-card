/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1506px",
    },
    colors: {
      primary: "#497617",
      secondary: "#d3ff4c",
      dark: "#1e3f18",
      light: "#f1f4ed",
      border: "#4f674a",
    },
    extend: {},
  },
  plugins: [],
};
