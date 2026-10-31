import type { Config } from 'tailwindcss'

/**
 * Warm, soft theme: cream page, olive-charcoal text, coral accent, sage
 * secondary, large rounded cards. Scale names are kept from earlier versions
 * so existing class names still resolve:
 *   ink-950 = page background (cream)   ink-100 = primary text
 *   gold-*  = primary accent (coral)     rust    = secondary accent (sage)
 */
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
          950: '#efebe5',
          900: '#e7e2da',
          800: '#ddd7cc',
          700: '#cfc8bb',
          600: '#b5ae9f',
          500: '#857f72',
          400: '#5f5b50',
          300: '#3c4235',
          200: '#2f3429',
          100: '#1f2219',
        },
        gold: {
          50: '#e9f0ea',
          100: '#cfdfd2',
          200: '#2f5d3a',
          300: '#2f5d3a',
          400: '#2f5d3a',
          500: '#264c2f',
          600: '#1e3d26',
          700: '#172f1d',
          800: '#112316',
          900: '#0b170e',
        },
        accent: { DEFAULT: '#2f5d3a', soft: '#e9f0ea', deep: '#1e3d26' },
        rust: { DEFAULT: '#b8863b', soft: '#f1e6cf' },
        danger: { DEFAULT: '#c6402f', soft: '#fbe3df' },
        line: { DEFAULT: '#d7d1c6', strong: '#1f2219' },
        paper: { 50: '#f7f4ef', 100: '#efebe5', 200: '#e7e2da' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: { tightest: '-0.04em' },
      borderRadius: { '4xl': '2rem' },
      boxShadow: {
        glass: '0 1px 2px rgba(31,34,25,0.04), 0 12px 40px -24px rgba(31,34,25,0.25)',
        paper: '0 20px 60px -30px rgba(31,34,25,0.35)',
        'paper-sm': '0 8px 24px -16px rgba(31,34,25,0.3)',
        gold: '0 0 0 1px #2f5d3a',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.55' },
          '50%': { transform: 'scale(1.06)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
}

export default config
