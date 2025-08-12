/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Deep blue
        secondary: "#F59E0B", // Amber
        accent: "#10B981", // Emerald
        light: "#F9FAFB", // Background light
        dark: "#111827", // Almost black
      },
    },
  },
  plugins: [],
}
