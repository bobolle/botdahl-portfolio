/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
      "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#e3820b',
            secondary: '#e39c22',
            accent: '#151515',
            neutral: '#f5eec1',
            primarybg: '#111111',
            secondarybg: '#222222',
        },
    },
  },
  plugins: [],
}

