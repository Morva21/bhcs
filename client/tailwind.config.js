/** @type {import('tailwindcss').Config} */
export default {
  content: [ './src/**/*.html',
  './src/**/*.jsx'],
  theme: {
    container:{
      padding:{
        DEFAULT: '15px'
      }
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1330',
    },
    extend: {
      colors:{
        primary: '#242a2b',
        secondary: '#808088',
        accent: {
          DEFAULT: '#7e33f5',
          secondary: '#8b53e4',
          tertiary: '#90c6cd'
        },
        grey: '#e8f0f1',
      },
      fontFamily:{
        primary: 'Poppins'
      },
      boxShadow:{
        custom1: '0px 2px 40px 0px rgba(8,70,78.08)',
        custom2: '0px 0px 30px 0px rgba(8,73,81,0.06)'
      },
      backgroundImage:{
        services: 'url(/img/services/bg.png)',
        testimonials: 'url(/img/testimonials/bg)',
       
        quoteLeft: 'url(/icons/quote-left.png)',
        quoteRight: 'url(/icons/quote-right.png)',
      },

    },
  },
  plugins: [],
}
