const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
