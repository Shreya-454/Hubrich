/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: '"Inter",sans-serif',
        Poppins: '"Poppins",sans-serif',
      },
      backgroundImage: {
        "btn-gradient":
          "linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)",
          
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      },
animation:{
  'wiggle':'wiggle 0.1s linear infinite',
  'spin-slow':'spin 5s linear infinite',
}
    },
  },
  plugins: [],
};
