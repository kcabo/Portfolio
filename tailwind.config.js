module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'golden-main': '61.8%',
        'golden-rest': '38.3%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
