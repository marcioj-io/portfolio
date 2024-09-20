/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '0px',
      'max-sm': { 'max': '767px' },
      'sm': '768px',
      'md': '1024px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        'custom-rgb': 'rgb(14, 231, 183)',
        'custom-rgb-ligthBlue': 'rgb(122, 199, 227)'
      },
      backgroundImage: {
        // 'xp': "url('/src/assets/sobre.jpg')",
        // 'hero': "url('/src/assets/eu.jpg')",
      },
    },
  },
  plugins: [],
}
