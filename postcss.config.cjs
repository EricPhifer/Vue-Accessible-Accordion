module.exports = {
  plugins: [
      require('postcss-import')({
          plugins: [],
          path: ['./node_modules'],
      }),
      require('tailwindcss')('./tailwind.config.js'),
  ]
};