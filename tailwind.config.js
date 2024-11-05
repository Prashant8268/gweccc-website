/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#004aad", 
        secondary: "#00a86b", 
        earth: "#7c3b15", 
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        heading: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
