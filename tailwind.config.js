/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        navy: "#141C53",
        "blue-gray": "#6C737F",
        "midnight-charcoal": "#161618",
        "bright-violet": "#662FFF",
        "charcoal-purple": "#383540",
        "ice-white": "#F8F9FB",
      },
      keyframes: {
        "bounce-up": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "bounce-up": "bounce-up 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
