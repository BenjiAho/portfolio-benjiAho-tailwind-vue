module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      rotate: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    scrollSnapType: ['responsive'],
    scrollBehavior: ['motion-safe', 'motion-reduce', 'responsive'],
  },
  plugins: [require('tailwindcss-scroll-snap'),('tailwind-scroll-behavior')],
}
