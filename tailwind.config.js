const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        shin: '#1a8fe3',
        mor: colors.purple,
        hanari: '#d11149',
      },
    },
  },
  plugins: [],
};
