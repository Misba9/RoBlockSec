/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark':    '#020604', // Very dark green/black
        'brand-navy':    '#05110a',
        'brand-navy2':   '#0a1f14',
        'brand-blue':    '#d97706', // Used for secondary gold
        'brand-cyan':    '#10b981', // Emerald
        'brand-cyan2':   '#34d399',
        'brand-purple':  '#fbbf24', // Gold
        'brand-purple2': '#f59e0b',
        'brand-green':   '#10b981',
        'brand-red':     '#ef4444',
        'brand-glow':    'rgba(16, 185, 129, 0.25)',
        'brand-glow2':   'rgba(251, 191, 36, 0.25)',
        'glass':         'rgba(5, 17, 10, 0.70)',
        'glass2':        'rgba(10, 31, 20, 0.85)',
        // Light theme
        'light-bg':      '#f0fdf4',
        'light-text':    '#1c1917',
        'light-card':    '#ffffff',
        'light-border':  '#d1fae5',
      },
      fontFamily: {
        sans:    ['Inter', ...fontFamily.sans],
        display: ['Outfit', 'sans-serif'],
        body:    ['Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow':          'glow 4s ease-in-out infinite alternate',
        'glow-purple':   'glow-purple 4s ease-in-out infinite alternate',
        'subtle-glow':   'subtle-glow 5s ease-in-out infinite alternate',
        'float':         'float 8s ease-in-out infinite',
        'float-slow':    'float 12s ease-in-out infinite',
        'pulse-fast':    'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line':     'scan-line 8s linear infinite',
        'border-glow':   'border-glow 4s ease-in-out infinite alternate',
        'slide-up':      'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':       'fade-in 1s ease-out forwards',
        'typing-cursor': 'typing-cursor 0.8s step-end infinite',
        'grid-move':     'grid-move 25s linear infinite',
        'shimmer':       'shimmer 3s linear infinite',
        'rotate-slow':   'rotate-slow 25s linear infinite',
        'ping-slow':     'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%':   { textShadow: '0 0 10px #10b981, 0 0 20px #10b981', color: '#10b981' },
          '50%':  { textShadow: '0 0 20px #10b981, 0 0 40px #fbbf24, 0 0 60px #fbbf24', color: '#fbbf24' },
          '100%': { textShadow: '0 0 10px #fbbf24, 0 0 20px #fbbf24', color: '#fbbf24' },
        },
        'glow-purple': {
          '0%':   { textShadow: '0 0 10px #fbbf24, 0 0 20px #fbbf24' },
          '100%': { textShadow: '0 0 20px #10b981, 0 0 40px #10b981' },
        },
        'subtle-glow': {
          'from': { boxShadow: '0 0 10px -2px #10b98155, inset 0 0 10px -2px #10b98133' },
          'to':   { boxShadow: '0 0 20px 4px #fbbf2455, inset 0 0 20px 4px #fbbf2433' },
        },
        'border-glow': {
          'from': { borderColor: 'rgba(16,185,129,0.5)' },
          'to':   { borderColor: 'rgba(251,191,36,0.7)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        'scan-line': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'typing-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'grid-move': {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 173.2px' }, // specific for hexagons
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-1200px 0' },
          '100%': { backgroundPosition: '1200px 0' },
        },
        'rotate-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'neon-cyan':   '0 0 25px rgba(16,185,129,0.5), 0 0 80px rgba(16,185,129,0.15)',
        'neon-purple': '0 0 25px rgba(251,191,36,0.5), 0 0 80px rgba(251,191,36,0.15)',
        'neon-sm':     '0 0 12px rgba(16,185,129,0.4)',
        'card':        '0 8px 40px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.08) inset',
      },
      backgroundImage: {
        'cyber-grid':       'url("data:image/svg+xml,%3Csvg width=\'50\' height=\'86.6\' viewBox=\'0 0 50 86.6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M25 0l25 14.43v28.86L25 57.73 0 43.3V14.44zM25 86.6l25-14.43V43.31L25 28.87 0 43.3v28.87z\' stroke=\'rgba(16,185,129,0.15)\' stroke-width=\'1\' fill=\'none\'/%3E%3C/svg%3E")',
        'hero-gradient':    'radial-gradient(circle 800px at 50% 0%, rgba(251,191,36,0.15) 0%, rgba(16,185,129,0.08) 40%, transparent 80%)',
        'card-gradient':    'linear-gradient(145deg, rgba(10,31,20,0.95) 0%, rgba(5,17,10,0.98) 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.1) 50%, transparent 100%)',
        'cyan-purple':      'linear-gradient(135deg, #10b981 0%, #fbbf24 100%)',
        'purple-cyan':      'linear-gradient(135deg, #fbbf24 0%, #10b981 100%)',
      },
      backgroundSize: {
        'grid': '50px 86.6px',
      },
    },
  },
  plugins: [],
};
