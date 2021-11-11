module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/imgs/wallpaper.jpg')",
       }
    },
  },
  variants: {
    backgroundColor: ['responsive','hover','focus','active'],
    extend: {},
  },
  plugins: [],
}
