module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Ubuntu'],
      'body': ['Ubuntu']
    },
    extend: {
      colors: {
        amber: '#f99f1b'
      },
      inset: {
        '0': 0,
        auto: 'auto',
        'menu-top': '8em',
        'menu-top-mobile': '5em',
        'menu-right': '4em',
        'menu-right-mobile': '0em'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
