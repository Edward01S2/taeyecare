module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        ta: {
          100: '#04B0C6',
          200: '#007EA7',
          300: '#003459',
        },
      },
      fontFamily: {
        optical: [
          'Optical',
        ],
      }
    }
  },
  plugins: [],
}