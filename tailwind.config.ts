import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070b12",
        panel: "#0e1826",
        line: "rgba(194, 255, 235, 0.14)",
        mint: "#45f0a5",
        cyan: "#42d9ff",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(69, 240, 165, 0.14)",
        card: "0 18px 50px rgba(0, 0, 0, 0.28)",
        soft: "0 24px 90px rgba(0, 0, 0, 0.34)",
      },
    },
  },
  plugins: [],
};

export default config;
