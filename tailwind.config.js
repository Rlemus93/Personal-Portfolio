/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "black",
      "bumblebee",
      "retro",
      "cyberpunk",
      "lofi",
      "pastel",
      "fantasy",
      "luxury",
      "dracula",
      "acid",
      "dim",
      "acid",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
}
