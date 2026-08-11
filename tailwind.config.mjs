/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tinta: '#14283A',
        navy: '#1E4468',
        blue: '#1E5A8F',
        light: '#F3F5F4',
        ink: '#1A2733',
        muted: '#55636F',
        gold: '#8A6A28',
        sello: '#A63B32',
        'navy-dark': '#0E1D2B',
      },
      fontFamily: {
        display: ['Piazzolla', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['3.375rem', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'display-lg': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.7' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,40,58,0.05), 0 10px 28px -18px rgba(20,40,58,0.28)',
        'card-hover': '0 2px 4px rgba(20,40,58,0.06), 0 18px 40px -18px rgba(20,40,58,0.34)',
      },
      borderRadius: {
        card: '2px',
      },
    },
  },
  plugins: [],
};
