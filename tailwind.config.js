/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./reference/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontSize: {
        '2xs': '0.6rem',
        '3xs': '0.4rem',
        '4xs': '0.2rem',
      },
      colors: {
        primary: '#24272A',
        secondary: '#24272A',
      },
    },
  },
  plugins: [],
};
