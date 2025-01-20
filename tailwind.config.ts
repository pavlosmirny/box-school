// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF0000", // основной красный
          dark: "#CC0000", // темный красный
          light: "#FF3333", // светлый красный
        },
        secondary: {
          DEFAULT: "#000000", // основной черный
          dark: "#1A1A1A", // темный серый
          light: "#333333", // светлый серый
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-roboto-condensed)"],
      },
    },
  },
  plugins: [],
};
