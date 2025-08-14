/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf7f9',
          100: '#f2dde4',
          200: '#e6c7d1',
          300: '#d9b0bd',
          400: '#cd9aa9',
          500: '#c08495',
          600: '#b06d82',
          700: '#8c5668',
          800: '#683f4e',
          900: '#442834',
        },
        secondary: {
          50: '#fef7f7',
          100: '#fdeaea',
          200: '#fbd5d5',
          300: '#f9c0c0',
          400: '#f7abab',
          500: '#f59696',
          600: '#f38181',
          700: '#c26767',
          800: '#914d4d',
          900: '#603333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
