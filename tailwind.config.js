module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '768px' }
      },

      backgroundImage: theme =>({
        'banner': "url('../img/bakbaner.png')"
      }),

      backgroundPosition: {
        'banner-position': "-300px -200px"
      },

      colors: {
        "azul-claro": "#37bcf9",
        "azul-oscuro": "#03370b9"
      },

      animation: {
        'spin-low': "spin 2s linear infinite",
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear',
        'bg-banner': 'backBanner 10s linear',
        'text-banner': 'showBannerText 10s linear',
        'show-card-icon': 'showCardIcon 300ms linear',
      },

      keyframes: {
        fromBellow: {
          "0%": { transform: 'traslateY(0%)' },
          "50%": { transform: 'traslateY(50%)' },
          "100%": { transform: 'traslateY(0%)' },
        },

        fromRight: {
          "0%": { transform: 'traslateX(200%)' },
          "100%": { transform: 'traslateX(0%)' },
        },

        backBanner: {
          '0%': { 'backgroundPosition': '0px 0px' },
          '100%': { 'backgroundPosition': '-300px -200px'}
        },

        showBannerText: {
          '0%': { 
            transform: "traslateX(-600%) scale(5,5)",
            opacity: 1
          },

          '50%': { 
            transform: "traslateX(600%) scale(5,5)",
            opacity: 1
          },

          '75%': { 
            transform: "traslateX(-600%) scale(5,5)",
            'text-shadow': "none",
            color: 'transparent',
            opacity: 0
          },

          '100%': { 
            transform: "traslateX(-0%) scale(1,1)",
            'text-shadow': "2px 2px 1px black",
            color: 'while',
            opacity: 1
          }
        },

        showCardIcon: {
          'from': {
            transform: 'traslateY(-200%)'
          },

          'to': {
              transform: 'traslateY(0%)'
          }
        }

      }
    },
  },

  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
    animate: ['responsive', 'hover', 'group-hover'],
    fontSize: ['responsive', 'hover', 'group-hover'],
    transform: ['responsive', 'hover', 'group-hover'],
    scale: ['responsive', 'hover', 'group-hover'],
    padding: ['responsive', 'hover', 'group-hover'],

  },

  plugins: [],
}
