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
        white: '#FFF9F9',
      },
      fontSize: {
        tiny: '0.6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
