const colors = require("tailwindcss/colors");
const defaultTailwind = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'masonary': '1fr auto'
      },
      backgroundImage: theme => ({
        'cartographer': "url('/assets/cartographer.png')",
        'light-wool': "url('/assets/light-wool.png')"
      })
    },
    colors: {
      ...colors,
      apnaGreen: "#04D98B",
      dateGreen: "#038C5A",
      apniHeading: "#014029",
      neechuBG: "#3B3C40",
      neechuText: "#f2f2f2",
      ivory: "#FFFFF0",
    },
    fontFamily: {
      sans: [
        "system-ui",
        "sans-serif",
      ],
    },
    boxShadow: {
      ...defaultTailwind.boxShadow,
      apnaShadow: "0 25px 50px -12px rgba(1, 64, 41, 0.25)"
    }
  },
  variants: {},
  plugins: [],
};
