/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'botdahl-darkslate': '#27374d',
            'botdahl-slate': '#526d82',
            'botdahl-lightslate': '#9db2bf',
            'botdahl-brightslate': '#dde6ed',
        },
    },
  },
  plugins: [],
}

