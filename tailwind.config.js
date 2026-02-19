module.exports = {
  content: ['./*.html', './**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { top: '0px' },
          '50%': { top: '-50px' },
        }
      },
      animation: {
        upDown: 'upDown 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
