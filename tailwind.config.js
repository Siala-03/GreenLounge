/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        kiqao: {
          black: '#0A0A0A',
          'rich-black': '#111111',
          charcoal: '#1C1C1C',
          emerald: '#2DB87A',
          gold: '#FFFFFF',
          champagne: '#FAF8F5',
          sage: '#7BAA8A',
          cream: '#EEE8DF',
          'warm-white': '#FAF8F5',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 12px rgba(255, 255, 255, 0.18)',
        'gold': '0 4px 24px rgba(255, 255, 255, 0.24)',
        'gold-lg': '0 8px 40px rgba(255, 255, 255, 0.32)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F5 50%, #FFFFFF 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
