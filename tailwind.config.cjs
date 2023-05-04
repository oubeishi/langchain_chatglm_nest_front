module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
