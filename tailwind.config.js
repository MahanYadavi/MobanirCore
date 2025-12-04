/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43', // Deep Navy
          950: '#0B1120', // Darker Navy
        },
        gold: {
          100: '#fbf3db',
          200: '#f7e7b7',
          300: '#f3db93',
          400: '#efcf6f',
          500: '#ebc34b',
          600: '#d4af37', // Classic Gold
          700: '#aa8c2c',
          800: '#806921',
          900: '#554616',
        }
      },
      fontFamily: {
        // Prioritize Vazirmatn for a consistent look across languages, or fall back to Inter
        sans: ['Vazirmatn', 'Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
