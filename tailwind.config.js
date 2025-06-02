/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0ebfe',
          200: '#c7d9fd',
          300: '#a2bffb',
          400: '#769df7',
          500: '#3B82F6', // Primary blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#172554', // Navy
          900: '#111c44',
        },
        secondary: {
          50: '#eaf8ff',
          100: '#d8f1fe',
          200: '#b9e6fd',
          300: '#88d5fb',
          400: '#50bcf7',
          500: '#0F52BA', // Secondary blue
          600: '#085bb2',
          700: '#064994',
          800: '#0a3a78',
          900: '#0c3166',
        },
        accent: {
          50: '#fff4ed',
          100: '#ffe8d9',
          200: '#ffcdb3',
          300: '#ffa77d',
          400: '#ff7a45',
          500: '#f97316', // Accent orange
          600: '#e45509',
          700: '#bd3f09',
          800: '#9a330f',
          900: '#7e2b10',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};