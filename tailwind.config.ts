import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: {
          900: "#0b1220",
          800: "#111a2f",
          700: "#1b2a4a"
        },
        leaf: {
          700: "#1f7a3a",
          600: "#2a8f47",
          500: "#34a853",
          100: "#e8f5ed"
        },
        sand: {
          50: "#faf8f2",
          100: "#f4f0e4"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
