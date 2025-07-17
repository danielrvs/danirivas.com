/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,astro,html}",
    "./node_modules/daisyui/**/*.js",
    "./src/**/*.astro"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'darker-bg': '#050505',
        'neon-magenta': '#ff2bff',
        'neon-cyan': '#00f7ff',
        'neon-pink': '#ff00ff',
        'neon-green': '#00ff00',
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'card-bg': 'rgba(20, 20, 20, 0.8)',
        'card-border': 'rgba(255, 43, 255, 0.1)'
      },
      boxShadow: {
        'neon': '0 0 15px theme("colors.neon-magenta"), 0 0 30px theme("colors.neon-cyan")',
        'neon-sm': '0 0 5px theme("colors.neon-magenta"), 0 0 10px theme("colors.neon-cyan")',
        'neon-lg': '0 0 25px theme("colors.neon-magenta"), 0 0 50px theme("colors.neon-cyan")'
      },
      animation: {
        'glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px theme("colors.neon-magenta"), 0 0 20px theme("colors.neon-cyan")' },
          '50%': { boxShadow: '0 0 20px theme("colors.neon-magenta"), 0 0 40px theme("colors.neon-cyan")' }
        },
        glitch: {
          '0%': { textShadow: '0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75)' },
          '14%': { textShadow: '0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em 0.05em 0 rgba(0, 0, 255, 0.75)' },
          '15%': { textShadow: '-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '49%': { textShadow: '-0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '50%': { textShadow: '0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '99%': { textShadow: '0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)' },
          '100%': { textShadow: '-0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      transitionProperty: {
        'all': 'all',
        'colors': 'background-color, border-color, color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'],
        '3xl': ['1.75rem', '2rem'],
        '4xl': ['2.5rem', '2.5rem'],
        '5xl': ['3rem', '1'],
        '6xl': ['3.75rem', '1'],
        '7xl': ['4.5rem', '1'],
        '8xl': ['6rem', '1'],
        '9xl': ['8rem', '1'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#ff2bff",
          secondary: "#00f7ff",
          accent: "#00f7ff",
          neutral: "#1a1a1a",
          "base-100": "#0a0a0a",
          "base-200": "#050505",
          "base-300": "#000000",
          "base-content": "#ffffff",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
  },
  corePlugins: {
    preflight: true,
  }
}
