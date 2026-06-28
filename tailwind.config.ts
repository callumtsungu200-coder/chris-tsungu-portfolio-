import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        ink: {
          950: '#050609',
          900: '#0a0c12',
          800: '#101218',
          700: '#191c25',
          600: '#262a36',
          500: '#3a3f50',
          400: '#6c7387',
          300: '#9aa1b4',
          200: '#c8ccd6',
          100: '#e6e8ee',
        },
        gold: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fbd24e',
          400: '#fac315',
          500: '#eaa90b',
          600: '#ca8004',
          700: '#a45a07',
          800: '#86460e',
          900: '#723a10',
        },
        accent: {
          DEFAULT: '#fbd24e',
          soft: '#fde58a',
          deep: '#a45a07',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent 0%, #050609 80%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-spot':
          'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(251,210,78,0.18), transparent 70%)',
        'gold-shine':
          'linear-gradient(120deg, #fef3c7 0%, #fbd24e 30%, #eaa90b 55%, #fbd24e 80%, #fef3c7 100%)',
      },
      boxShadow: {
        glass: '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 12px 40px -12px rgba(0,0,0,0.6)',
        gold: '0 0 0 1px rgba(251,210,78,0.35), 0 8px 28px -8px rgba(251,210,78,0.35)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'float': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}

export default config
