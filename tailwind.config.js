/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: [
    join(__dirname, "./src/pages/**/*.{ts,tsx}"),
    join(__dirname, "./src/components/**/*.{ts,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: "#18181b",
        },
      },
    },
  },
  plugins: [],
};
