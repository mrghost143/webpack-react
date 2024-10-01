/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    colors: {
      'background-light': '#f7fafc', // Light background
      'text-light': '#2d3748', // Dark text
      'background-dark': '#1a202c', // Dark background
      'text-dark': '#172834', // Light text
      'primary-light': '#d5ddec', // Light primary color
      'primary-dark': '#0c243b', // Dark primary color   
    },
  },
  plugins: [],
};
