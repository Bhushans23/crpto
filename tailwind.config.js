
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cg: {
          primary: '#00C1A7',
          'primary-700': '#00A589',
          accent: '#6C63FF',
          bg: '#071014',
          surface: '#0B0B0D',
          elev: '#0F1416',
          text: '#E6EEF0',
          muted: '#9AA6A9',
          border: '#1C2628',
          success: '#2FD08E',
          warning: '#FFB020',
          danger: '#FF5C5C'
        }
      },
      boxShadow: {
        'cg-md': '0 6px 20px rgba(2,8,12,0.6)'
      },
      backgroundImage: {
        'cg-grad-1': 'linear-gradient(90deg,#00C1A7 0%, #6C63FF 100%)',
      }
    },
  },
  plugins: [],
}
