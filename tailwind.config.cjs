/** @type {import('tailwindcss').Config}*/
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      screens: {
        'xs': '480px', // Example: adding a custom 'xs' breakpoint at 480px
      },
      fontFamily: {
        'serif': ['"Proxima Nova"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        customGray: '#181818'
      }
    }
  }
};

module.exports = config;