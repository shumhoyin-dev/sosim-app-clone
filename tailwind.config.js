module.exports = {
  content: [
    './component/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'button': '#fac446',
        'background':'#e5e7eb',
        'special':'#75746e'
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
