/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    "./src/styles/globals.css"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#081F2D',
        second: '#DF854F',
        third: '#C8A977'
      },
      fontFamily:{
        'lato':['lato','sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
