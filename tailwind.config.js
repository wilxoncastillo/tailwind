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
        'banner-position': "-300px"
      },

      colors: {
        "azul-claro": "#37bcf9",
        "azul-osucro": "#03370b9"
      },

      animation: {
        'spin-low': "spin 2s linear infinite",
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear'
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
        }
      }
    },
  },
  plugins: [],
}
