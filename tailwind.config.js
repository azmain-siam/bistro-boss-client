/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: '"Cinzel", serif;',
        inter: '"Inter", sans-serif',
      },
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
