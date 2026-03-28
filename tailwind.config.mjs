/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Isso liga a variável do layout.jsx às classes do Tailwind
        display: ['var(--font-archivo)'],
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};