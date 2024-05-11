/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headline: ["EB Garamond", "serif"],
      },
      colors: {
        purple: { light: "#d0d6f9" },
      },
    },
  },
  plugins: [],
};
