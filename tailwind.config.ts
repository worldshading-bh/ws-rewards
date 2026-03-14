import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./services/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ec5638",
          foreground: "#fff7f2"
        },
        charcoal: "#121212",
        soft: "#F9FAFB",
        gold: "#C8A75B",
        card: {
          dark: "#17191c",
          light: "#ffffff"
        }
      },
      boxShadow: {
        luxury: "0 20px 45px rgba(0, 0, 0, 0.22)",
        soft: "0 10px 30px rgba(18, 18, 18, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "SF Pro Text", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "luxury-dark": "radial-gradient(circle at top, rgba(236, 86, 56, 0.22), transparent 35%), linear-gradient(160deg, #121212 0%, #1b1d21 48%, #101010 100%)",
        "luxury-light": "radial-gradient(circle at top, rgba(236, 86, 56, 0.16), transparent 32%), linear-gradient(180deg, #ffffff 0%, #fff7f2 100%)",
        "brand-card": "linear-gradient(135deg, rgba(200,167,91,0.95) 0%, rgba(236,86,56,1) 48%, rgba(18,18,18,0.96) 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
