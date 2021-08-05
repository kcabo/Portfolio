module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        main: 'calc(100vh - 188px - 108px)',
      },
      gridTemplateColumns: {
        home: 'minmax(300px, 400px) minmax(400px, 1fr)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
