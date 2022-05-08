module.exports = {
  content: ["./src/views/**/*.{ejs,js,ts}"],
  theme: {
    extend: {
      colors: {
        'black-semi': 'rgba(0, 0, 0, 0.5)'
      }
    },
    maxHeight: {
      '3/4': '75%'
    },
    minHeight: {
      '48': '12rem'
    }
  },
  plugins: [],
}