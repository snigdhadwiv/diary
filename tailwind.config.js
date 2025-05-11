// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'raga-primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Secondary colors (gold/saffron)
        'raga-gold': {
          50: '#fff9e6',
          100: '#ffefb3',
          200: '#ffe680',
          300: '#ffdd4d',
          400: '#ffd41a',
          500: '#e6bf00',
          600: '#b39600',
          700: '#806d00',
          800: '#4d4300',
          900: '#1a1900',
        },
        // Dark colors
        'raga-dark': {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#121417',
        },
        // Success/Error colors
        'raga-success': '#28a745',
        'raga-error': '#dc3545',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        devanagari: ['var(--font-devanagari)', 'sans-serif'],
        calligraphy: ['var(--font-devanagari)', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hard': '0 4px 20px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 0 8px rgba(255, 212, 26, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 6s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
