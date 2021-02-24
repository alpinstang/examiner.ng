module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nigeria: "#008753",
        examiner: {
          50: "#caf0f8ff",
          100: "#ade8f4ff",
          200: "#90e0efff",
          300: "#48cae4ff",
          400: "#00b4d8ff",
          500: "#0096c7ff",
          600: "#0077b6ff",
          700: "#023e8aff",
          800: "#03045eff",
          900: "#050511ff",
        },
        primary: "#0077b6ff",
        secondary: "#00b4d8ff",
        error: "#ff1133",
        success: "#00aa00aa",
        navyblue: "#03045eff",
        darkcornflowerblue: "#023e8aff",
        starcommandblue: "#0077b6ff",
        bluegreen: "#0096c7ff",
        ceruleancrayola: "#00b4d8ff",
        skybluecrayola: "#48cae4ff",
        skybluecrayolalight: "#90e0efff",
        blizzardblue: "#ade8f4ff",
        powderblue: "#caf0f8ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
