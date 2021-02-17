module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: [
          'Roboto',
          'Helvetica Neue',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        'pri-red': '#EC7676',
        pink: 'rgba(252, 193, 193, 0.47)',
        pink2: 'rgba(243, 138, 138, 0.45)',
        white: '#F3EFEF',
        grey: '#604E4E',
      },

      spacing: {
        l2: '200px',
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
};
