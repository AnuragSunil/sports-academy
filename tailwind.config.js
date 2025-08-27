/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"], 
      heading: ["var(--font-inter)", "sans-serif"], // use same font for headings
    },
    colors:{
      eggshell:"#F9F6EE"
    }
  }

  },
  plugins: [],
};
