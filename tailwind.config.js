/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "blue-gray": "#6C737F",
        "midnight-charcoal": "#161618",
        "bright-violet": "#662FFF",
      },
    },
  },
  plugins: [],
};
