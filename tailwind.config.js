/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 3s linear infinite",
      },
      colors: {
        "medium-blue-itlista": "#0583F2",
        "dark-blue-itlista": "#1261A6",
        "light-blue-itlista": "#23B7D9",
        "orange-itlista": "#F28705",
        "dark-grey-itlista": "#0D0D0D",
      },
      backgroundImage: {
        headerBgMobile:
          "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
        headerBgDesktop:
          "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80')",
        sectionBg: "url('./wavesNegative.svg')",
        videoBg:
          "url('https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
      },
    },
  },
  plugins: [],
};
