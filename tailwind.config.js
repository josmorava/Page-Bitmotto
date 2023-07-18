const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'xs': '500px',
      },
      height: {
        'img': '500px',
      },
      colors: {
        app: {
          '100': '#F4F0ED', 
          '200': '#FAE3D7', 
          '300': '#DCE3EC', 
        },
      },
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [
    require
      ('@tailwindcss/forms'),
  ],
}
