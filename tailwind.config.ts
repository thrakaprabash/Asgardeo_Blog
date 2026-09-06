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
        background: "#070A11",
        surface: {
          50: "#1E2638",
          100: "#161D2D",
          200: "#0F1624",
          300: "#0A0E18",
        },
        asgardeo: {
          orange: "#FF7300",
          orangeLight: "#FF9838",
          orangeDark: "#D95E00",
          purple: "#5C45FD",
          purpleLight: "#806EFF",
          purpleDark: "#432EC7",
          cyan: "#00E5FF",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "asgardeo-gradient": "linear-gradient(135deg, #FF7300 0%, #FF9838 50%, #5C45FD 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        "asgardeo-glow": "0 0 35px -5px rgba(255, 115, 0, 0.35)",
        "purple-glow": "0 0 35px -5px rgba(92, 69, 253, 0.4)",
        "cyan-glow": "0 0 30px -5px rgba(0, 229, 255, 0.35)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
