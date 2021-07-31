const colors = require("tailwindcss/colors");
const defaultTailwind = require('tailwindcss/defaultTheme');

module.exports = {
  purge: false,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'masonary': '1fr auto'
      },
      colors: {
        'regal-blue': '#243c5a',
        'faux-russian-violet': '#290f52'
      },
      backgroundImage: theme => ({
        'cartographer': "url('/assets/cartographer.png')",
        'light-wool': "url('/assets/light-wool.png')"
      })
    },
    colors: {
      ...colors,
      greenCyan: "#04D98B",
      medDarkGreenCyan: "#038C5A",
      darkGreenCyan: "#014029",
      darkGrayishBlue: "#3B3C40",
      lightGray: "#f2f2f2",
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
      cardShadow: "0 25px 50px -12px rgba(1, 64, 41, 0.25)"
    }
  },
  variants: {},
  plugins: [],
};
