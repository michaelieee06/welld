/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        onyx: '#0a0a0a',
        charcoal: '#121214',
        borderDark: '#27272a',
        cream: '#fafafa',
        platinum: '#e4e4e7',
        mutedSilver: '#a1a1aa',
        ochre: '#d4af37', // subtle antique luxury gold
        teal: {
          DEFAULT: '#09090b',
          bright: '#ffffff',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marqueeHover: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
