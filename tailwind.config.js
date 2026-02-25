/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#854CE6",
        background1: "#222A35",
        button: "#854CE6",
        background2: "#19212C",
        text: "#C8CFD8",
        text1: "#F2F5F7",
        text2: "#626970",
        text3: "#575C66",
        footerBackground: "#00012B",
        // 2026 Neon Theme Colors
        neon: {
          cyan: "#00f3ff",
          purple: "#bc13fe",
          pink: "#ff007f",
          blue: "#0055ff",
        },
        darkTheme: {
          bg: "#0a0a0f", // Deeper dark
          bgLight: "#12121c",
          primary: "#bc13fe", // Neon purple
          text_primary: "#f0f0f5",
          text_secondary: "#a0a0b0",
          card: "rgba(23, 23, 33, 0.4)", // Translucent for glassmorphism
          card_light: "rgba(25, 25, 36, 0.5)",
          button: "#854CE6", // Keeping old matching one for compatibility or use neon primary
          white: "#FFFFFF",
          black: "#000000",
        },
        lightTheme: {
          bg: "#FFFFFF",
          bgLight: "#f0f0f0",
          primary: "#bc13fe",
          text_primary: "#111111",
          text_secondary: "#48494a",
          card: "#FFFFFF",
          button: "#5c5b5b",
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        blob: "blob 7s infinite",
        floating: "floating 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
