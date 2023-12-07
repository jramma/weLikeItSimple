const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/**/*.html", "src/scripts/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",

        gray: {
          100: "#f6f6f6",
          200: "#888888",
          300: "#3c3c3c",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "1.5rem",
        },
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        base: ["16px", "24px"],
        lg: ["20px", "30px"],
        xl: ["32px", "38px"],
        "2xl": ["52px", { letterSpacing: "-0.4px", lineHeight: 1.25 }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
