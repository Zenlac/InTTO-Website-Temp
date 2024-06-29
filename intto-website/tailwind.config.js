/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'sphone': '320px',
        'lphone': '375px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1440px',
      }
    },
  },
  plugins: [],
}

