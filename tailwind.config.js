const colors = require("tailwindcss/colors");

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
