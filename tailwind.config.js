module.exports = {
 content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'blue-sesa': '#00577B',
        'gray-sesa': '#5E5E5E'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
