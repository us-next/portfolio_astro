// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  purge: ['./src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '11': 'repeat(11, 1fr)',
        '11-md':  'repeat(11, 6fr)',
        '11-lg': 'repeat(11, 52px)'
      },
      gridTemplateColumns: {
        '12-lg': 'repeat(12, 1fr)'
      },
      gap: {
        '16px' : '16px 16px'
      },
      fontFamily: {
        'inter' : "'Inter Variable', sans-serif"
      },
      backgroundColor : {
        'pink' : '#CC4A4F',
        'gray' : '#ccc'
      },
      textColor: {
        'pink' : '#CC4A4F',
        'gray' : '#ccc'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}