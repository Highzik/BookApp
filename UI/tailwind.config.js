/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepGreen: '#0F993E',
        brightGreen: '#12B347',
        vividGreen: '#20DC49',
        darkGray: '#5A5A5A',
        lightGray: '#B8B8B8',
        fieryRed: '#D93F21',
        vividBlue: '#167EE6',
        primary: '#393280',
        secondary: '#c4c4c4',
        highlight: '#ed55eb',
        background: '#fff',
        textGray: '#8c8c8c',
        lightBackground: '#e5e3da',
        borderGray: '#bebebe',
        darkText: '#111',
        lightGray: '#e0e0e0',
        softWhite: '#f6f6f6',
        midGray: '#d1d1d1',
        neutralGray: '#bcbcbc',
        accentBlue: '#38426c',
      }
    },
  },
  plugins: [],
}