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
        mesh: "radial-gradient(at 37% 0%, var(--mesh-white) 0px, transparent 50%), radial-gradient(at 100% 51%, var(--mesh-dark) 0px, transparent 50%), radial-gradient(at 0% 89%, var(--mesh-neutral) 0px, transparent 50%)",
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
        status: {
          DEFAULT: "var(--color-green)",
        }
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
      boxShadow: {
        "to-r":
          "10px 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "to-l":
          "-10px 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dracula"],
  },
};
