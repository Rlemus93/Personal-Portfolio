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
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive", "font-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}
