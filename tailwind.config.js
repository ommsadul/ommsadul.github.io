/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Text', 'serif'],
      },      colors: {
        light: {
          bg: '#ffffff',
          container: '#ffffff',
          text: '#000000',
          heading: '#000000',
          subheading: '#000000',
          paragraph: '#000000',
          link: '#000000',
          highlight: '#f5f5f5',
          footer: '#000000',
          border: '#e0e0e0',
        },
        dark: {
          bg: '#000000',
          container: '#000000',
          text: '#ffffff',
          heading: '#ffffff',
          subheading: '#ffffff',
          paragraph: '#e0e0e0',
          link: '#ffffff',
          highlight: '#111111',
          footer: '#ffffff',
          border: '#222222',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
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
      },
    },
  },
  plugins: [],
}
