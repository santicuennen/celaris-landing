/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e5a96',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#00bcd4',
          foreground: '#ffffff',
        },
        background: '#f5f7fa',
        foreground: '#1a1f2e',
        muted: {
          DEFAULT: '#64748b',
          foreground: '#64748b',
        },
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'section': ['2.25rem', { lineHeight: '1.2' }],
        'subsection': ['1.5rem', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': '80px',
        'section-mobile': '60px',
      },
      borderRadius: {
        'lg': '0.75rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'spin': 'spin 1s linear infinite',
      },
      animationDelay: {
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
};