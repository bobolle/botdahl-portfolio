/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
      "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            botdahl: {
                100: '#17202A',
                200: '#1C2833',
                300: '#212F3D',
                400: '#273746',
                500: '#2C3E50',
                600: '#566573',
                700: '#808B96',
                800: '#ABB2B9',
                900: '#D5D8DC',
                1000: '#EAECEE',
            },
        },
    },
  },
  plugins: [],
}

