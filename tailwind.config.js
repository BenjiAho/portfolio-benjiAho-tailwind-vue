module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    scrollSnapType: ['responsive'],
    backgroundImage: {
      'volcan': "url('./src/assets/images/volcan-background.jpg')",
    },
  },
  plugins: [require('tailwindcss-scroll-snap')],
}
