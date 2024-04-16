/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': "#1E2124 ",
        'secondary': "#F7DC2A",
        'accent': '#B4B4B4'
      },
    },
  },
  plugins: [],
}

