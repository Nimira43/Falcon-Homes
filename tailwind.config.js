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
        'prime-dark-extra': '#012222', 
        'prime-dark': '#024747', 
        'prime-medium-extra': '#036262', 
        'prime-medium': '#048b8b', 
        'prime-medium-light': '#07aaaa', 
        'prime-light': '#09dcdc', 
        'prime-light-extra': '#41f6f6', 
        'dark': '#111',
        'light': '#fffaf0',
        'grey-extra-light': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#888',
        'grey-dark': '#333',
        'secondary': '#ff4500',
        'secondary-light': '#f6a588',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 38%',
      },
    },
  },
  plugins: [],
}
