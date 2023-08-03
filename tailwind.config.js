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
      },
      maxWidth: {
        '80screen': "80vw"
      },
    },
    minHeight: {
      "80screen": '80vh',
      "60screen": '60vh',
      "screen": '100vh',
    }
  },
  plugins: [],
}
