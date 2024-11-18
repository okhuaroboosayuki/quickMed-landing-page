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
        "midnight-navy": "#060A23",
        "blue-gray": "#6C737F",
        "midnight-charcoal": "#161618",
        "bright-violet": "#662FFF",
        "charcoal-purple": "#383540",
        "ice-white": "#F8F9FB",
        "light-gray": "#E5E7EB",
        "silver-gray": "#E0E2E6",
        "slate-gray": "#828B9C",
        "ghost-white": "rgba(246, 247, 247, .8)",
        "soft-violet": "rgba(102, 47, 255, 0.1)",
        "dark-charcoal-opaque": "rgba(41, 42, 50, 0.9)",
      },
      boxShadow: {
        light: "0px 0px 32px 0px rgba(16, 24, 40, 0.06)",
      },
      keyframes: {
        "bounce-up": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        "scroll-x": {
          to: { transform: "translate(calc(-93% - 1.3rem))" },
        },
      },
      animation: {
        "bounce-up": "bounce-up 0.5s ease-in-out forwards",
        "scroll-x": "scroll-x 20s forwards linear infinite",
      },
    },
  },
  plugins: [],
};
