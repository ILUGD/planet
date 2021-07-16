const colors = require("tailwindcss/colors");

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
    // colors: {
    //   black: gruvbox.dark.hard,
    //   white: colors.white,
    //   paper: gruvbox.light[0],
    //   primary: gruvbox.dark[0],
    //   secondary: gruvbox.red.neutral,
    //   ...gruvbox,
    // },
    fontFamily: {
      sans: [
        "system-ui",
        "sans-serif",
      ],
    },
  },
  variants: {},
  plugins: [],
};
