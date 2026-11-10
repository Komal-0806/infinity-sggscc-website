/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        infinity: {
          navy: '#10182D',
          midnight: '#0B1020',
          purple: '#3020A5',
          violet: '#6845F5',
          teal: '#55A6AC',
          crimson: '#E32655',
          offwhite: '#F5F4FF',
          darkSurface: '#0E1428',
          card: 'rgba(16, 24, 45, 0.7)',
          border: 'rgba(104, 69, 245, 0.15)',
          glowTeal: 'rgba(85, 166, 172, 0.25)',
          glowCrimson: 'rgba(227, 38, 85, 0.25)',
          glowViolet: 'rgba(104, 69, 245, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
        script: ['Caveat', 'Playwrite', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'grid-slide': 'gridMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 40px' },
        }
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(104, 69, 245, 0.25) 0%, rgba(48, 32, 165, 0.15) 35%, rgba(11, 16, 32, 0.95) 75%)',
        'radial-gradient-accent': 'radial-gradient(circle at 80% 20%, rgba(85, 166, 172, 0.15) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}
