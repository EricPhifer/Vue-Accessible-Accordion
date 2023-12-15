/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    target: 'relaxed',
    important: false,
    theme: {
      typography: (theme) => ({
          default: {
              css: {
                  color: theme('colors.quinary.700'),
                  maxWidth: theme('maxWidth.5xl'),
                  strong: {
                      fontWeight: theme('fontWeight.bold'),
                      color: theme('colors.quinary.700'),
                  },
                  'a:not(.button)': {
                      fontWeight: theme('fontWeight.medium'),
                      color: theme('colors.primary.900'),
                      '&:hover': {
                          color: theme('colors.primary.600'),
                      },
                      '&:focus': {
                          color: theme('colors.primary.600'),
                      },
                  },
                  'a.button': {
                      textDecoration: 'none',
                  },
                  '.button.primary:hover, .button.primary:focus': {
                      color: theme('colors.white.100'),
                  },
                  p: {
                      color: theme('colors.quinary.700'),
                      fontFamily: theme('twFontFamily.body').join(', '),
                      fontSize: theme('fontSize.sm'),
                  },
                  'ul': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      marginTop: theme('margin.2'),
                      marginBottom: theme('margin.10'),
                      marginLeft: theme('margin.10'),
                      marginRight: theme('margin.10'),
                  },
                  'ul > li::before' : {
                      content: 'none',
                  },
                  'ul > li': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      listStyleType: 'disc',
                      paddingLeft: '0',
                  },
                  'ul li ul.content': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      marginTop: theme('margin.2'),
                      marginBottom: theme('margin.2'),
                      marginLeft: theme('margin.4'),
                      marginRight: theme('margin.4'),
                  },
                  'ul li ul.content li': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      marginTop: '0',
                      marginBottom: theme('margin.2'),
                  },
                  li: {
                      color: theme('colors.quinary.700'),
                      fontFamily: theme('twFontFamily.body').join(', '),
                      fontSize: theme('fontSize.sm'),
                      paddingLeft: '0',
                  },
                  'li::before': {
                      content: 'none',
                  }
              },
          },
          lg: {
              css: {
                  lineHeight: '1.5',
                  p: {
                      color: theme('colors.quinary.700'),
                      fontSize: theme('fontSize.lg'),
                      fontWeight: theme('fontWeight.normal'),
                  },
                  'ul > li': {
                      paddingLeft: '0',
                  },
                  li: {
                      color: theme('colors.quinary.700'),
                      fontSize: theme('fontSize.lg'),
                      fontWeight: theme('fontWeight.normal'),
                      paddingLeft: '0',
                  }
              }
          },
          'primary': {
              css: {
                  a: {
                      color: theme('colors.primary.900'),
                      '&:hover': {
                          color: theme('colors.primary.600'),
                      },
                      '&:focus': {
                          color: theme('colors.primary.600'),
                      },
                  },
              }
          },
          'secondary': {
              css: {
                  a: {
                      color: theme('colors.secondary.900'),
                      '&:hover': {
                          color: theme('colors.secondary.600'),
                      },
                      '&:focus': {
                          color: theme('colors.secondary.600'),
                      },
                  },
              }
          },
          'faq': {
              css: {
                  lineHeight: theme('leading.tight'),
                  color: theme('colors.gray.700'),
                  maxWidth: theme('maxWidth.none'),
              }
          },
          'aside': {
              css: {
                  h3: {
                      fontFamily: theme('twFontFamily.heading').join(', '),
                      fontSize: theme('fontSize.2xl'),
                      fontWeight: '400',
                      marginTop: false,
                      marginBottom: false,
                      lineHeight: false,
                      textTransform: 'uppercase',
                  },
                  h4: {
                      color: theme('colors.quinary.900'),
                      fontFamily: theme('twFontFamily.heading').join(', '),
                      fontSize: theme('fontSize.xl'),
                      fontWeight: '600',
                      marginTop: false,
                      lineHeight: false,
                      textTransform: 'uppercase',
                  },
                  h5: {
                      color: theme('colors.quinary.900'),
                      fontFamily: theme('twFontFamily.heading').join(', '),
                      fontSize: theme('fontSize.base'),
                      fontWeight: '600',
                      marginTop: false,
                      lineHeight: false,
                      textTransform: 'uppercase',
                  },
                  'ul': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      marginTop: theme('margin.2'),
                      marginBottom: theme('margin.10'),
                  },
                  'ul > li': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      paddingLeft: '0',
                      marginTop: '0',
                      marginBottom: '0',
                  },
                  'ul > li::before': {
                      'content': 'none',
                  },
                  'ul li ul.content': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      marginTop: theme('margin.2'),
                      marginBottom: theme('margin.2'),
                      marginLeft: theme('margin.4'),
                      marginRight: theme('margin.4'),
                  },
                  'ul li ul.content li': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      marginTop: '0',
                      marginBottom: theme('margin.2'),
                  },
                  'a:not(.button):not(.nostyle)': {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      fontSize: 'inherit',
                      fontWeight: theme('fontWeight.semibold'),
                      textDecoration: false,
                      color: theme('colors.primary.700'),
                      '&:hover': {
                          color: theme('colors.primary.600'),
                      },
                      '&:focus': {
                          color: theme('colors.primary.600'),
                      },
                  },
                  'h6 > a': {
                      fontSize: theme('fontSize.lg'),
                      fontFamily: theme('twFontFamily.heading').join(', '),
                      fontWeight: theme('fontWeight.semibold'),
                      color: theme('colors.quinary.900'),
                      '&:hover': {
                          color: theme('colors.quinary.700'),
                      },
                      '&:focus': {
                          color: theme('colors.quinary.700'),
                      },
                  },
                  '.more-info > ul > li': {
                      marginTop: '0',
                      marginBottom: theme('margin.6'),
                  },
                  '.get-directions > a': {
                      color: theme('colors.white.100'),
                  },
                  p: {
                      fontFamily: theme('twFontFamily.body').join(', '),
                      fontSize: theme('fontSize.sm'),
                  },
              }
          },
          'aside-lg': {
              css: {
                  h3: {
                      fontSize: theme('fontSize.2xl'),
                  },
                  h4: {
                      fontSize: theme('fontSize.2xl'),
                  },
                  h5: {
                      fontSize: theme('fontSize.lg'),
                  },
                  'ul': {
                      marginTop: theme('margin.2'),
                      marginBottom: theme('margin.10'),
                  },
                  'ul > li': {
                      paddingLeft: '0',
                      marginTop: '0',
                      marginBottom: '0',
                  },
                  a: {
                      fontSize: theme('fontSize.base'),
                  },
                  'h6 > a': {
                      fontSize: theme('fontSize.lg'),
                  },
                  '.more-info > ul > li': {
                      marginTop: theme('margin.6'),
                      marginBottom: theme('margin.6'),
                  },
                  p: {
                      fontSize: theme('fontSize.base'),
                  },
              }
          },
      }),
      // Extend the default Tailwind config here
      extend: {
          twColors: {
              gray: {
                  100: '#F4F6F7',
                  200: '#EAEAEA',
                  300: '#D7DFE0',
                  400: '#B5C1C3',
                  500: '#C7CACB',
                  600: '#707070',
                  700: '#77787B',
                  800: '#393939',
                  900: '#252526',
              },
              orange: {
                  100: '#E6BF54',
                  500: '#EB9A48',
              },
              green: {
                  50: '#E3F2EB',
                  100: 'rgba(37,157,123,0.2)',
                  200: 'rgba(37,157,123,0.4)',
                  500: '#A8B944',
                  600: '#65AC53',
                  700: '#669933',
                  800: '#308B45',
                  900: '#4C863E',
              },
              teal: {
                  400: '#219C7E',
                  500: '#1F9571',
                  800: '#00919D',
                  900: '#1D8373',
              },
              blue: {
                  300: '#A6D5FD',
                  400: '#9AD8FF',
                  500: '#8AC8EA',
                  600: '#6699CC',
                  700: '#0067AC',
                  800: '#005B98',
              }
          },
          colors: (theme) => ({
              transparent: 'transparent',
              current: 'currentColor',

              white: {
                  25: 'rgba(255,255,255,.25)',
                  50: 'rgba(255,255,255,.5)',
                  100: '#ffffff',
              },
              // greens
              primary: {
                  50: theme('twColors.green.50'),
                  100: theme('twColors.green.100'),
                  500: theme('twColors.green.500'),
                  600: theme('twColors.green.600'),
                  700: theme('twColors.green.700'),
                  800: theme('twColors.green.800'),
                  900: theme('twColors.green.900'),
              },
              // blues
              secondary: {
                  300: theme('twColors.blue.300'),
                  400: theme('twColors.blue.400'),
                  500: theme('twColors.blue.500'),
                  600: theme('twColors.blue.600'),
                  700: theme('twColors.blue.700'),
                  800: theme('twColors.blue.800'),
              },
              // yellows / gold
              tertiary: {
                  100: theme('twColors.orange.100'),
                  500: theme('twColors.orange.500'),
              },
              // teals
              quaternary: {
                  400: theme('twColors.teal.400'),
                  500: theme('twColors.teal.500'),
                  800: theme('twColors.teal.800'),
                  900: theme('twColors.teal.900'),
              },
              // grays
              quinary: {
                  100: theme('twColors.gray.100'),
                  200: theme('twColors.gray.200'),
                  300: theme('twColors.gray.300'),
                  400: theme('twColors.gray.400'),
                  500: theme('twColors.gray.500'),
                  600: theme('twColors.gray.600'),
                  700: theme('twColors.gray.700'),
                  800: theme('twColors.gray.800'),
                  900: theme('twColors.gray.900'),
              },
          }),
          spacing: {
              '9': '2.25rem',
              '14': '3.5rem',
              '18': '4.5rem',
              '28': '7rem',
              '64': '16rem',
              '128': '32rem',
              '150': '37.5rem',
              '192': '48rem',
              '1/3': '33.333333%',
          },
          minHeight: theme => ({
              '0': '0',
              ...theme('spacing'),
              full: '100%',
              screen: '100vh',
              screen80: '80vh',
          }),
          height: theme => ({
              auto: 'auto',
              ...theme('spacing'),
              vh50: '50vh',
              vh60: '60vh',
              full: '100%',
              screen: '100vh',
              line: '1px',
              nav: 'calc(100vh - 80px)',
              '90': '90vh',
              '50': '50px',
          }),
          lineHeight: theme => ({
              'loose': '1.5',
          }),
          maxHeight: {
              60: '15rem',
              '150': '37.5rem',
              nav: 'calc(100vh - 90px)',
              '3/4vh': '75vh',
          },
          width: theme => ({
              auto: 'auto',
              ...theme('spacing'),
              '1/2': '50%',
              '1/3': '33.333333%',
              '2/3': '66.666667%',
              '1/4': '25%',
              '2/4': '50%',
              '3/4': '75%',
              '1/5': '20%',
              '2/5': '40%',
              '3/5': '60%',
              '4/5': '80%',
              '1/6': '16.666667%',
              '2/6': '33.333333%',
              '3/6': '50%',
              '4/6': '66.666667%',
              '5/6': '83.333333%',
              '1/8': '0.125%',
              '1/11': '11%',
              '1/12': '8.333333%',
              '2/12': '16.666667%',
              '3/12': '25%',
              '4/12': '33.333333%',
              '5/12': '41.666667%',
              '6/12': '50%',
              '7/12': '58.333333%',
              '8/12': '66.666667%',
              '9/12': '75%',
              '10/12': '83.333333%',
              '11/12': '91.666667%',
              full: '100%',
              screen: '100vw',
              '272': '272px',
              '200': '200%',
              '300': '300%',
              '400': '400%',
              '500': '500%',
              '600': '600%',
              'item': '17rem',
              '50': '50px',
              '100': '100px',
              '80': '20rem',
          }),
          maxWidth: theme => ({
              auto: 'auto',
              ...theme('spacing'),
              100: '25rem',
              'item': '18rem',
          }),
          fontSize: {
              0: '0',
              'xxxs': '.59rem',
              'xxs': '.69rem',
              'tiny': '.95rem',
              'xl1': '1.4rem',
              '3xl': '1.875rem',
              '4xl': '2.25rem',
              '5xl': '3rem',
              '6xl': '3.75rem',
              '7xl': '4.5rem',
              '8xl': '6rem',
              '9xl': '8rem',
          },
          boxShadow: {
              'md': '0px 3px 6px #00000029',
              'dd': '7px 13px 40px #00000029'
          },
          // once upgraded to TW 2.0 remove these
          opacity: {
              '10': '.1',
              '20': '.2',
              '30': '.3',
              '40': '.4',
              '50': '.5',
              '60': '.6',
              '70': '.7',
              '80': '.8',
              '90': '.9',
          },
          screens: {
              '2xl': '1536px',
          },
          borderWidth: {
              '1': '1px',
              '3': '3px',
          },
          zIndex: {
              '100': '100',
          },
          lineHeight: {
              'loose': '1.5'
          }
      },
      twFontFamily: {
          'display': ['Sansita', 'sans-serif'],
          'body': ['Source Sans Pro', 'sans-serif'],
          'heading': ['Spartan', 'sans-serif'],
      },
      fontFamily: (theme) => ({
          'primary': theme('twFontFamily.body'),
          'secondary': theme('twFontFamily.heading'),
          'tertiary': theme('twFontFamily.display'),
      }),
      inset: {
          '0': '0',
          '-2': '-0.5rem',
          '24': '6rem',
          '32': '9rem',
          '48': '12rem',
          '1/2':'50%',
          'slideout': '18rem',
          'full': '100%',
          'filter': 'calc(100% + .5rem)',
          'dropdown': '8rem',
          auto: 'auto',
      },
  },
  variants: {
      borderWidth: ['responsive', 'last', 'hover', 'focus'],
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundImage: ['hover', 'focus', 'group-hover'],
      textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      display: ['responsive', 'hover', 'focus', 'group-focus', 'group-hover'],
  },
  corePlugins: {},
  plugins: [
      require('@tailwindcss/typography'),
  ],
  future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
  },
}