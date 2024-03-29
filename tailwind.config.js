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
      '640px': '640px',
      'sm': '640px',
      'md': '768px',
      'lg': '1100px',
      '2xl':	'1536px',
    },
    extend: {
      fontSize: {
        '7.5xl': '5.1rem',
      },
      fontFamily: {
        'cormorant': ['Cormorant SC', 'serif'],
        'aboreto': ['Aboreto', 'cursive'],
      },
      rotate: {
        '_45': '-45deg',
      },
      colors: {
        'glass': 'rgb(255,255,255,0.7)',
        't-transp': 'rgb(0, 0, 0, 0.5)',
        'dark-transp': 'rgb(0, 0, 0, 0.8)',
        'transp': 'rgb(0, 0, 0, 0)',
        'h-color': '#89796D',
      },
      spacing: {
        'row-3-2': '19rem',
        'row-3':'18rem',
        'row-midle':'9rem',
        'row-2':'11.7rem',
        'row-1':'6rem',
        '100': '25rem',
        '15%': '15%',
        '75%': '75%',
        '20%': '20%',
        '98': '28rem',
        '17%': '17%',
        '23%': '23%',
        '27%': '27%',
        '65%': '65%',
        '30%': '30%',
        '90%': '90%',
        '95%': '95%',
        '85%': '85%',
        'item-slide':'87%',
        '15vh': '15vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '35vh': '35vh',
        '60vh': '60vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '50vh': '50vh',
        '70vh':'70vh',
        '80vh':'80vh',
        '85vh': '85vh',
        '90vh': '90vh',
        'header': '10vh',
        '30vw': '28vw',
        '50vw':'50vw',
        '60vw':'60vw',
      },
      backgroundImage: {
        'heaven': "url('../src/images/h.png')",
        'heaven2': "url('../src/images/h2.png')",
        'heaven3': "url('../src/images/h4.png')",
        'heaven4': "url('../src/images/h3.png')"
      }
    },
  },
  plugins: [],
}
