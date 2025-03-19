/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        primary: {
          light: '#4F46E5', // Indigo-600
          dark: '#6366F1',  // Indigo-500
        },
        secondary: {
          light: '#0EA5E9', // Sky-500
          dark: '#38BDF8',  // Sky-400
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F172A',  // Slate-900
        },
        text: {
          light: '#1E293B', // Slate-800
          dark: '#E2E8F0',  // Slate-200
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
