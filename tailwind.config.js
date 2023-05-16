/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "medium-blue-itlista": "#0583F2",
        "dark-blue-itlista": "#1261A6",
        "light-blue-itlista": "#23B7D9",
        "orange-itlista": "#F28705",
        "dark-grey-itlista": "#0D0D0D",
      },
    },
  },
  plugins: [],
};
