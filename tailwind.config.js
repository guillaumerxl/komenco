const path = require('path')

function use24GridLayout (suffix = '') {
  return {
    [`${suffix}0/24`]: '0%',
    [`${suffix}0.5/24`]: '2.083333333333333%',
    [`${suffix}1/24`]: '4.166666666666666%',
    [`${suffix}1.5/24`]: '6.25%',
    [`${suffix}2/24`]: '8.333333333333332%',
    [`${suffix}2.5/24`]: '10.416666666666668%',
    [`${suffix}3/24`]: '12.5%',
    [`${suffix}3.5/24`]: '14.583333333333334%',
    [`${suffix}4/24`]: '16.666666666666664%',
    [`${suffix}4.5/24`]: '18.75%',
    [`${suffix}5/24`]: '20.833333333333336%',
    [`${suffix}5.5/24`]: '22.916666666666664%',
    [`${suffix}6/24`]: '25%',
    [`${suffix}6.5/24`]: '27.083333333333332%',
    [`${suffix}7/24`]: '29.166666666666668%',
    [`${suffix}7.5/24`]: '31.25%',
    [`${suffix}8/24`]: '33.33333333333333%',
    [`${suffix}8.5/24`]: '35.41666666666667%',
    [`${suffix}9/24`]: '37.5%',
    [`${suffix}9.5/24`]: '39.58333333333333%',
    [`${suffix}10/24`]: '41.66666666666667%',
    [`${suffix}10.5/24`]: '43.75%',
    [`${suffix}11/24`]: '45.83333333333333%',
    [`${suffix}11.5/24`]: '47.91666666666667%',
    [`${suffix}12/24`]: '50%',
    [`${suffix}12.5/24`]: '52.083333333333336%',
    [`${suffix}13/24`]: '54.166666666666664%',
    [`${suffix}13.5/24`]: '56.25%',
    [`${suffix}14/24`]: '58.333333333333336%',
    [`${suffix}14.5/24`]: '60.416666666666664%',
    [`${suffix}15/24`]: '62.5%',
    [`${suffix}15.5/24`]: '64.58333333333334%',
    [`${suffix}16/24`]: '66.66666666666666%',
    [`${suffix}16.5/24`]: '68.75%',
    [`${suffix}17/24`]: '70.83333333333334%',
    [`${suffix}17.5/24`]: '72.91666666666666%',
    [`${suffix}18/24`]: '75%',
    [`${suffix}18.5/24`]: '77.08333333333334%',
    [`${suffix}19/24`]: '79.16666666666666%',
    [`${suffix}19.5/24`]: '81.25%',
    [`${suffix}20/24`]: '83.33333333333334%',
    [`${suffix}20.5/24`]: '85.41666666666666%',
    [`${suffix}21/24`]: '87.5%',
    [`${suffix}21.5/24`]: '89.58333333333334%',
    [`${suffix}22/24`]: '91.66666666666666%',
    [`${suffix}22.5/24`]: '93.75%',
    [`${suffix}23/24`]: '95.83333333333334%',
    [`${suffix}23.5/24`]: '97.91666666666666%',
    [`${suffix}24/24`]: '100%',
  }
}

function useCommonSizes (suffix = '') {
  return {
    [`${suffix}0`]: '0',
    [`${suffix}0.5`]: '0.125rem',
    [`${suffix}1`]: '0.25rem',
    [`${suffix}1.5`]: '0.375rem',
    [`${suffix}2`]: '0.5rem',
    [`${suffix}2.5`]: '0.625rem',
    [`${suffix}3`]: '0.75rem',
    [`${suffix}3.5`]: '0.875rem',
    [`${suffix}4`]: '1rem',
    [`${suffix}5`]: '1.25rem',
    [`${suffix}6`]: '1.5rem',
    [`${suffix}7`]: '1.75rem',
    [`${suffix}8`]: '2rem',
    [`${suffix}9`]: '2.25rem',
    [`${suffix}10`]: '2.5rem',
    [`${suffix}11`]: '2.75rem',
    [`${suffix}12`]: '3rem',
    [`${suffix}14`]: '3.5rem',
    [`${suffix}16`]: '4rem',
    [`${suffix}20`]: '5rem',
    [`${suffix}24`]: '6rem',
    [`${suffix}28`]: '7rem',
    [`${suffix}32`]: '8rem',
    [`${suffix}36`]: '9rem',
    [`${suffix}40`]: '10rem',
    [`${suffix}44`]: '11rem',
    [`${suffix}48`]: '12rem',
    [`${suffix}52`]: '13rem',
    [`${suffix}56`]: '14rem',
    [`${suffix}60`]: '15rem',
    [`${suffix}64`]: '16rem',
    [`${suffix}72`]: '18rem',
    [`${suffix}80`]: '20rem',
    [`${suffix}96`]: '24rem',
    [`${suffix}xs`]: '20rem',
    [`${suffix}sm`]: '24rem',
    [`${suffix}md`]: '28rem',
    [`${suffix}lg`]: '32rem',
    [`${suffix}xl`]: '36rem',
    [`${suffix}2xl`]: '42rem',
    [`${suffix}3xl`]: '48rem',
    [`${suffix}4xl`]: '56rem',
    [`${suffix}5xl`]: '64rem',
    [`${suffix}6xl`]: '72rem',
    [`${suffix}auto`]: 'auto',
    [`${suffix}1/2`]: '50%',
    [`${suffix}full`]: '100%',
    [`${suffix}small`]: '768px',
    [`${suffix}medium`]: '1024px',
    [`${suffix}large`]: '1180px',
    [`${suffix}xlarge`]: '1400px',
    [`${suffix}xxlarge`]: '1600px',
  }
}

module.exports = {
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ],

  content: [
    `*.html`,
    `src/**/*.vue`,
  ],

  safelist: [{
    pattern: /\d\/24$/, // Pour les grids x/24 
  }, {
    pattern: /^font-/, // Pour les fonts des PDF 
  }],

  theme: {
    extend: {
      spacing: {
        ...use24GridLayout(),
        ...useCommonSizes(),
      },

      margin: {
        ...use24GridLayout(),
        ...useCommonSizes(),
      },

      padding: {
        ...use24GridLayout(),
        ...useCommonSizes(),
      },

      maxWidth: {
        ...use24GridLayout(),
        ...useCommonSizes(),
        'screen': '100vw',
        'sidebar': 'calc((((100% - (1.66667% * 11)) / 12) * 2) + 1.66667%)',
      },

      minWidth: {
        ...use24GridLayout(),
        ...useCommonSizes(),
        'screen': '100vw',
        'sidebar': 'calc((((100% - (1.66667% * 11)) / 12) * 2) + 1.66667%)',
      },

      maxHeight: {
        ...use24GridLayout(),
        ...useCommonSizes(),
        screen: '100vh',
      },

      minHeight: {
        ...use24GridLayout(),
        ...useCommonSizes(),
        screen: '100vh',
      },

      height: {
        ...use24GridLayout(),
        ...useCommonSizes(),
        screen: '100vh',
      },

      width: {
        ...use24GridLayout(),
        ...useCommonSizes(),
        screen: '100vw',
      },

      inset: {
        ...use24GridLayout(),
        ...useCommonSizes(),
      },

      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
        'xs': {'max': '768px'},
        'sm': '768px',
        'md': '1024px',
        'lg': '1280px',
        'xl': '1400px',
        'xxl': '1700px',
      },

      animation: {
        'loading': 'loading 2s linear infinite',
        'spin-slow': 'spin 2s ease infinite',
        'beat': 'beat 2s ease-in-out infinite',
      },

      keyframes: {
        'loading': {
          '0%': {
            'transform': 'rotate(0deg)',
            'stroke-dashoffset': '2',
          },
          
          '50%': {
            'transform': 'rotate(720deg)',
            'stroke-dashoffset': '5',
          }, 
          
          '100%': {
            'transform': 'rotate(1080deg)',
            'stroke-dashoffset': '2',
          }
        },
        'beat': {
          '0%, 100%': { 
            transform: 'scale(1)' 
          },
          '25%': { 
            transform: 'scale(1.2)' 
          }
        }
      },

      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'md': '1.125rem',
        'lg': '1.2rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '4.25rem',
        '10xl': '8rem',
      },

      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        '75': 75,
        '99': 99,
        '100': 100,
        'auto': 'auto',
      },
    },

    strokeWidth: {
      'none': 'none',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
    },

    fill: theme => ({
      current: 'currentColor',
      none: 'transparent',
    }),

    colors: {
      'transparent': 'transparent', 
      'white':            '#ffffff',
      'black':            '#000000',
    },

    fontFamily: {
      sans: [
        'poppins',
        'system-ui',
        'sans-serif',
      ],
      serif: ['merriweather', 'serif'],
      mono: ['monospace'],
    },
  },
}