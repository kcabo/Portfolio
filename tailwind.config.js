module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        main: 'calc(100vh - 188px - 108px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
