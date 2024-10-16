/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow:"#ccf381",
        blue:"#4831d4",
        text:"#3d155f",
        lime:"#cbc9e2"
      },
    },
  },
  plugins: [],
}