module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '175': '1.5',
      },

      display: ['hover', 'focus', 'group-hover'],
      textOpacity: ['hover', 'focus', 'group-hover'],
      translate: ['group-hover', 'hover'],
      scale: ['hover', 'focus', 'group-hover'],
      transform: ['hover', 'focus', 'group-hover'],
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.3rem',
        'full': '9999px',
        'large': '12px',
      },

      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1140px",
          xl: "1140px"
        }
      },

      zIndex: {
        '40': '40',
        '60': '60',
        '50': '50',
        '70': '70'
      },
      colors: {
        primary: '#f32d35',
        darkLight: '#0c162d',
        primarylight: '#9361e2',
        secondary: '#f32d35',
        secondaryLight: '#ef238a',
        green: '#47E189',
        greenDark: '#42cf7e',
        black: '#333',
        white: '#fff',
        red: '#e045e6',
        gray: '#F4F4F4',
        blueLight: '#c3d9f6'
      }
    }
  },
  plugins: []
}