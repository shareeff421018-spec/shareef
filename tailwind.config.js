/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fbf7e8",
          100: "#f5ecc5",
          200: "#ecd98b",
          300: "#e2c457",
          400: "#d4af37",
          500: "#b8942a",
          600: "#947422",
          700: "#6f571b",
        },
        ink: {
          950: "#0a0a0a",
          900: "#121212",
          800: "#1a1a1a",
          700: "#262626",
          600: "#3a3a3a",
        },
      },
      fontFamily: {
        sans: ["Cairo", "Tajawal", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
