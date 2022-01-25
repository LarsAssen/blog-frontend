module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/imgs/wallpaper.jpg')",
       }
    },
    colors: {
      'main' : '#6d77cd',
      'background-main': "#2C2525",
      'background-secondary': "#4c4c4c",
      'text-color': "#ffffff"
    }
  },
  variants: {
    backgroundColor: ['responsive','hover','focus','active'],
    extend: {},
  },
  plugins: [],

}
