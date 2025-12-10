import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wisecura: {
          primary: "#0077B6", // Clinical Blue
          secondary: "#90E0EF", // Soft Cyan
          accent: "#FFB703", // Warm Gold
          background: "#F8F9FA", // Off-white
          surface: "#FFFFFF", // Pure White
          text: "#1E293B", // Slate 800
          textLight: "#64748B", // Slate 500
          border: "#E2E8F0", // Slate 200
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2))",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-hover": "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      }
    },
  },
  plugins: [],
};
export default config;
