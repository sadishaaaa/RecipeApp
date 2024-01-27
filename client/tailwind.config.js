/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily:{
      //   'Jost', sans-serif;
      // }
      colors: {
        primary: "#010851",
        secondary: "#9A7AF1",
        tertiary: "#707070",
        pink: "#EE9AE5",
      },
    },
  },
  plugins: [],
};
