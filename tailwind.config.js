/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mesh: "radial-gradient(at 37% 0%, hsla(300,0%,95%,1) 0px, transparent 50%), radial-gradient(at 100% 51%, hsla(213,100%,69%,0.3) 0px, transparent 50%), radial-gradient(at 0% 89%, hsla(213,81%,55%,0.5) 0px, transparent 50%)",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        highlight: {
          DEFAULT: "var(--color-highlight)",
          dark: "var(--color-highlight-dark)",
        },
        neutral: {
          DEFAULT: "var(--color-neutral)",
          blue: "var(--color-neutral-blue)",
        },
      },
      screens: {
        xs: "566px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      perspective: {
        1: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
};
