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
        '11': 'repeat(11, 28px)'
      },
      gap: {
        '16px' : '16px 16px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}