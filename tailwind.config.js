module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../imgs/hero-img.webp')",
       }
    },
  },
  variants: {
    backgroundColor: ['responsive','hover','focus','active'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
