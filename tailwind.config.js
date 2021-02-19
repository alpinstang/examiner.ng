module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      50: "#e0fff3",
      100: "#c7ffe9",
      200: "#75ffc8",
      300: "#00f090",
      400: "#00cc7a",
      500: "#00a865",
      600: "#008550",
      700: "#00663d",
      800: "#005734",
      900: "#004d2e",
      primary: "#008550",
      secondary: "#00cc7a",
      warning: "#ffd000",
      error: "#b11629",
      info: "#c7ffe9",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
