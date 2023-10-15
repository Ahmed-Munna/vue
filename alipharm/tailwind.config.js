/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'login-blue': '#EEF2FF',
        'primary-color': '#0083C2',
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
