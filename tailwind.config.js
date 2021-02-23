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
        greyfont: 'rgba(106, 104, 104, 1)',
      },
      boxShadow: {
        sm: 'rgb(245 139 139) 0.25rem 0.25rem 0.25rem;',
      },
      gridTemplateRows: {
        layout: '1fr 3fr 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
