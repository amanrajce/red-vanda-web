import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // YOUR BRANDING (Red Vanda)
        primary: {
          900: '#5c0607',  // Deep burgundy for headings
          800: '#7a0808',
          700: '#a80607',  // Brand red for CTAs
          600: '#c41a1a',
          500: '#e63946',  // Lighter accent
        },
        accent: {
          500: '#8b0000',  // Alternative red
          100: '#fee2e2',  // Added light red for subtle highlights
        },
        neutral: {
          950: '#0f172a',  // Rich black
          900: '#1e293b',  // Dark slate
          800: '#334155',
          700: '#475569',
          600: '#64748b',
          500: '#94a3b8',
          400: '#cbd5e1',
          300: '#e2e8f0',
          200: '#f1f5f9',
          100: '#f8fafc',
          50: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        // Technical font for "Financial Terminal" look
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'heading-1': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-2': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-3': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        // ADDED: For the Initiate Pitch button shine effect
        'shimmer': 'shimmer 1.5s infinite',
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
        // ADDED: The movement for the shine effect
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(15, 23, 42, 0.04)',
        'medium': '0 4px 16px rgba(15, 23, 42, 0.08)',
        'hard': '0 8px 32px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;