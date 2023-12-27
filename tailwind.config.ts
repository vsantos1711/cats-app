import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "4rem",
        lg: "8rem",
        xl: "10rem",
        "2xl": "12rem",
      },
    },
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0",
          transform: "scale(0.5)",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
    },
    animation: {
      "fade-in": "fade-in 0.3s ease",
    },
    extend: {},
  },
};
export default config;
