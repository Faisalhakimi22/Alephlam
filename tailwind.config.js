/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ae8d36',
          light: '#c4a44a',
          dark: '#8b6f2b',
        },
        secondary: {
          DEFAULT: '#083843',
          light: '#0a4a5a',
          dark: '#052a35',
        },
        accent: {
          DEFAULT: '#f8f9fa',
          dark: '#e9ecef',
        },
        islamic: {
          gold: '#d4af37',
          'gold-light': '#e4bf47',
          'gold-dark': '#b8992c',
          blue: '#2c5f7c',
          'blue-light': '#3a7291',
          'blue-dark': '#1f4456',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Noto Naskh Arabic', 'serif'],
        amiri: ['Amiri', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float-islamic': 'floatIslamic 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        floatIslamic: {
          '0%, 100%': { transform: 'translateY(0px) rotate(15deg)' },
          '50%': { transform: 'translateY(-20px) rotate(15deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-15deg)' },
          '50%': { transform: 'translateY(20px) rotate(-15deg)' },
        },
      },
    },
  },
  plugins: [],
}
