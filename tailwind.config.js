/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        primaryRed: '#FB2929',
        redBackground: '#730000',
        lightRed: '#FFF3F3',
        grey: '#535152',
      },
      fontFamily: {
        'DMSans': ['"DM Sans"', 'sans-serif'],
        'Inter': ['"Inter"', 'sans-serif'],
        'Poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

