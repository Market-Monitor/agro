const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{tsx,ts}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "fire-opal": "#EE6352",
      emerald2: "#59CD90",
      "cerulean-crayola": "#3FA7D6",
      "max-yellow-red": "#FAC05E",
      "vivid-tangerine": "#F79D84",

      ...colors,
    },
    fontFamily: {
      sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
