import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#ff7744",
          light: "#ffb944",
        },
        secondary: "#e0e0e0",
        accent: "#F59E0B",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        "fade-in": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "gradient-flow": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "bounce-right": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(4px)",
          },
        },
        "bounce-up-down": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "gradient-flow": "gradient-flow 4s ease-in-out infinite",
        "bounce-right": "bounce-right 1s ease-in-out infinite",
        "bounce-up-down": "bounce-up-down 1s ease-in-out infinite",
      },
      rotate: {
        'y-180': '180deg',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #ff7744, #ffb944)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;