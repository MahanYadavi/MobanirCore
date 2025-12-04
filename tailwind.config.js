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
          900: '#102a43', 
          950: '#0a192f', // Deep Navy
        },
        gold: {
          100: '#fff9e6',
          200: '#ffecb3',
          300: '#ffe080',
          400: '#ffd44d',
          500: '#ffc81a',
          600: '#e6b400',
          700: '#b38c00',
          800: '#806300',
          900: '#4d3c00',
        },
        dark: {
          bg: '#0b1120', // Darker slate/navy mix
          card: '#162032',
          surface: '#1c2a42',
        }
      },
      fontFamily: {
        // Reverting to a cleaner stack. Vazirmatn is good for Persian, but we'll control weights better.
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui', 'sans-serif'], 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
