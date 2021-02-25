module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        half: "50vh",
      },
      colors: {
        nigeria: "#00844a",
        examiner: {
          50: "#EFFAF1ff",
          100: "#d8f3dcff",
          200: "#b7e4c7ff",
          300: "#95d5b2ff",
          400: "#74c69dff",
          500: "#52b788ff",
          600: "#40916cff",
          700: "#2d6a4fff",
          800: "#1b4332ff",
          900: "#081c15ff",
        },
        primary: "#00844a",
        secondary: "#2ab455",
        error: "#ff1133",
        success: "#00844a",
        nyanza: "#d8f3dcff",
        turquoisegreen: "#b7e4c7ff",
        turquoisegreen2: "#95d5b2ff",
        oceangreen: "#74c69dff",
        oceangreen2: "#52b788ff",
        illuminatingemerald: "#40916cff",
        bottlegreen: "#2d6a4fff",
        brunswickgreen: "#1b4332ff",
        darkjunglegreen: "#081c15ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
