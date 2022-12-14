/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        '125': '1.25',
      },
      spacing: {
        '30p': '30px',
        '70p': '70px'
      },
      height: {
        '128': '32rem'
      }
    }
  },
  plugins: [],
}
