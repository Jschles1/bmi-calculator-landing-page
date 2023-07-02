/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
    colors: {
      gunmetal: "hsl(215, 31%, 21%)",
      "custom-blue": "hsl(227, 92%, 58%)",
      "custom-blue-light": "hsla(227, 92%, 58%, 0.15)",
      "dark-electric-blue": "hsl(215, 17%, 45%)",
      "custom-gray": "hsl(200, 24%, 88%)",
      "custom-white": "#FFF",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-315": "linear-gradient(315deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
