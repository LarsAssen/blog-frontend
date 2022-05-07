module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../imgs/hero-img.webp')",
       },
       colors: {
        'main-color': '#045F6E',
        'secondary-color': '#E08955',
        'background-main': '#F2F2F2',
        'background-secondary': '#4c4c4c',
      },
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
