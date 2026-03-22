/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gold': '#D4AF37',
        'gold-light': '#E5C158',
        'gold-dark': '#B5952F',
        'neutral-850': '#1f1f1f',
        'neutral-950': '#0a0a0a'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
