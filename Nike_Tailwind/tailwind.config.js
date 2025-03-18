/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      palanquin: ['Palanquin', 'sans-serif'],
    },
    colors: {
      'slate-gray': '#708090',
    },},
  },
  plugins: [],
}
