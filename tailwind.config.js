const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
  ],
};
