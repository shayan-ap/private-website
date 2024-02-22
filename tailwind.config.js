/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      newgray: "#191919",
      neworange: "#FD6C03",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
