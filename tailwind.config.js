/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000", // Add your custom color here
        secondary: "#00ff00",
      },
    },
    screens: {
      sm: "530px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: ["tailwindcss-plugins/gradient", "tailwindcss-plugins/noise"],
};
