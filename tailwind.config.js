/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    minHeight: {
      'page': '64vh',
    },
    screens: {
      '1015px': '1015px',
      '450px': '450px',
      'sm': '640px',
      'md': '768px',
    },
    extend: {
      rotate: {
        '_45': '-45deg',
      },
      colors: {
        'brown': '#967854',
        'glass': 'rgb(255,255,255,0.7)',
      },
      spacing: {
        '15%': '15%',
        '75%': '75%',
        '20%': '20%',
        '98': '28rem',
        '17%': '17%',
        '23%': '23%',
        '27%': '27%',
        '65%': '65%',
        '30%': '30%',
        'item-slide':'87%',
        'page': '64vh',
        'header': '7vh',
        'section': '55%',
        'aside': '45%',
      },
      backgroundImage: {
        'wallpaper': "url('../src/images/3.png')"
      }
    },
  },
  plugins: [],
}
