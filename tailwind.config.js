const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#60a5fa",
        onPrimary: colors.white,
        surface: colors.white,
        background: colors.gray[100],
        success: colors.green[300],
        error: colors.red[300],
      },
    },
  },
};
