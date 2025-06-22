const { heroui } = require("@heroui/react");
const { title } = require("process");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OFF: ["Bungee Spice", "sans-serif"],
        OFF2: ["Bungee  Tint", "sans-serif"],

      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}