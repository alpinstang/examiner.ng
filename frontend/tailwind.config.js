module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Manjari, Roboto, sans-serif",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "bounce-x": {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-5px)" },
        },
        "bounce-x-reverse": {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1.5s ease-in-out infinite",
        "bounce-x": "bounce-x 1.5s ease-in-out infinite",
        "bounce-x-reverse": "bounce-x-reverse 1.5s ease-in-out infinite",
      },
      borderRadius: {
        super: "4rem",
      },
      height: {
        half: "50vh",
      },
      colors: {
        gold: "#FFD700",
        "bright-red": "#e74c3c",
        "bright-orange": "#fb8604",
        "bright-green": "#2ecc71",
        "bright-blue": "#1b7fff",
        "bright-purple": "#9b59b6",
        "bright-turquoise": "#00badb",
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
    typography: (theme) => ({
      light: {
        css: [
          {
            color: theme("colors.gray.400"),
            '[class~="lead"]': {
              color: theme("colors.gray.300"),
            },
            '[class~="no-underline"]': {
              textDecoration: "none",
            },
            '[class~="blog-link"]': {
              color: "#40916cff",
              textDecoration: "underline",
            },
            '[class~="blog-link:hover"]': {
              color: "#52b788ff",
              fontWeight: "bold",
              textDecoration: "underline",
            },
            a: {
              color: theme("colors.white"),
            },
            strong: {
              color: theme("colors.white"),
            },
            "ol > li::before": {
              color: theme("colors.gray.400"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.600"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
              borderLeftColor: theme("colors.gray.600"),
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.white"),
            },
            "figure figcaption": {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.white"),
            },
            "a code": {
              color: theme("colors.white"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.600"),
            },
          },
        ],
      },
    }),
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
