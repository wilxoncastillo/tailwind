module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#37bcf9",
        "azul-osucro": "#03370b9"
      },

      animation: {
        'spin-low': "spin 2s linear infinite",
        'from-bellow': 'fromBellow 500ms linear'
      },

      keyframes: {
        fromBellow: {
          "0%": { transform: 'traslateY(0%)' },
          "50%": { transform: 'traslateY(50%)' },
          "100%": { transform: 'traslateY(0%)' },
        }
      }
    },
  },
  plugins: [],
}
