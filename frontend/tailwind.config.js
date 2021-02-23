module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nigeria: "#008753",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
