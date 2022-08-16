/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: false,
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '40': '40px',
    },
    minHeight: {
      'page': '64vh',
      '85vh': '85vh',
    },
    screens: {
      '1015px': '1015px',
      '450px': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1100px',
    },
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant SC', 'serif'],
        'aboreto': ['Aboreto', 'cursive'],
      },
      rotate: {
        '_45': '-45deg',
      },
      colors: {
        'brown': '#967854',
        'glass': 'rgb(255,255,255,0.7)',
        't-transp': 'rgb(0, 0, 0, 0.5)',
        'bege-transp': 'rgb(79, 58, 42, 0.5)',
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
        '95%': '95%',
        '85%': '85%',
        'item-slide':'87%',
        'page': '64vh',
        'page2': '75vh',
        '85vh': '85vh',
        'header': '7vh',
        'section': '55%',
        'aside': '45%',
        '50vw':'50vw',
      },
      backgroundImage: {
        'me2': "url('../src/images/me2.jpg')"
      }
    },
  },
  plugins: [],
}
