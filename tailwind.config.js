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
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "tech-mobile":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "home-tablet": "url('./assets/home/background-home-tablet.jpg')",
        "destination-tablet":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",
        "tech-tablet":
          "url('./assets/technology/background-technology-tablet.jpg')",
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        "destination-desktop":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        "tech-desktop":
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
