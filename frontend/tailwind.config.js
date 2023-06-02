/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#F1FFE7',
        background: '#A9FDAC',
        darkgreen: '#44CF6C',
        button: '#32A287',
        darkcolor: '#6C464E',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
