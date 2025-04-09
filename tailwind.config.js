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
      },
      colors: {
        light: {
          bg: '#f9f9f9',
          container: '#ffffff',
          text: '#333333',
          heading: '#222222',
          subheading: '#444444',
          paragraph: '#555555',
          link: '#3a86ff',
          highlight: '#f7f7f7',
          footer: '#777777',
          border: '#eaeaea',
        },
        dark: {
          bg: '#121212',
          container: '#202020',
          text: '#e4e4e4',
          heading: '#ffffff',
          subheading: '#d8d8d8',
          paragraph: '#c8c8c8',
          link: '#78aeff',
          highlight: '#2c2c2c',
          footer: '#a8a8a8',
          border: '#383838',
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
