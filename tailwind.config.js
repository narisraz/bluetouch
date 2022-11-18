const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
  plugins: [],
};
