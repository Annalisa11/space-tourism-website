/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["EB Garamond", "serif"],
        body: ["Dosis", "sans-serif"],
      },
      colors: {
        purple: { light: "#d0d6f9" },
      },
      backgroundImage: {
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "other-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "tech-mobile":
          "url('./assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
