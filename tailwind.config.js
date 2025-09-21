/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-reverse': 'spin-reverse 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'orbit': 'orbit 12s linear infinite',
        'orbit-reverse': 'orbit-reverse 10s linear infinite',
        'float-random': 'float-random 15s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'glitch': 'glitch 1s ease-in-out infinite alternate',
        'glitch-text': 'glitch-text 2s ease-in-out infinite',
        'glitch-skew': 'glitch-skew 1s ease-in-out infinite alternate',
        'blink': 'blink 1.2s step-end infinite',
        'fade-in': 'fade-in 2s ease-out forwards',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'float-random': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-30px) translateX(15px)' },
          '50%': { transform: 'translateY(-15px) translateX(-15px)' },
          '75%': { transform: 'translateY(20px) translateX(25px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'glitch-text': {
          '0%, 100%': { textShadow: '0 0 2px #2563eb, 0 0 5px #7c3aed' },
          '33%': { textShadow: '0 0 5px #06b6d4, 0 0 10px #2563eb' },
          '66%': { textShadow: '0 0 5px #d946ef, 0 0 8px #8b5cf6' },
        },
        'glitch-skew': {
          '0%, 100%': { transform: 'skew(0)' },
          '33%': { transform: 'skew(2deg)' },
          '66%': { transform: 'skew(-2deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '30px 30px',
      },
    },
  },
  plugins: [],
};
