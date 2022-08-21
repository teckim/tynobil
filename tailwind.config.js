const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        'sans-secondary': ["'Lato'", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          light: 'hsl(342, 97%, 60%)',
          DEFAULT: 'hsl(342, 97%, 50%)',
          dark: 'hsl(342, 97%, 40%)'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'base' })]
}
