/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulsate: {
          '0%, 100%': { transform: 'scale(1) translateX(0)' },  // Normal size and position
          '50%': { transform: 'scale(1.2) translateX(20px)' },  // Scaled up and moved slightly right
        },
      },
      animation: {
        pulsate: 'pulsate 2s ease-in-out infinite',
      },
    },
  },
  daisyui: {
    themes: ["cupcake", "cmyk"],
 },
  plugins: [ require('daisyui'),],
}

