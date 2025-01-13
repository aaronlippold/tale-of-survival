/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        serif: ["PT Serif", "serif"],
        body: ["PT Serif"],
      },
      colors: {
        "book-yellow": "#fce62e",
        "book-gray": "#1a1a1c",
        "book-theme": "#ff9500",
      },
      keyframes: {
        love: {
          'to': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'love': 'love 0.5s infinite linear alternate-reverse',
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': { margin: '0', fontWeight: 'normal' },
        'p': { marginBottom: '1em' },
      })
    }
  ],
};
