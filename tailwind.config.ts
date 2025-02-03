import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
        lato: ["var(--font-lato)"],
      },
      fontSize: {
        11: "11px",
        13: "13px",
        14: "14px",
        15: "15px",
      },
      colors: {
        text: {
          primary: "#37352F",
          secondary: "#4E5968",
          muted: "#8B95A1",
          gray: "#6B6B6C",
        },
        background: {
          default: "#e5e7eb",
          tag: "#F2F4F6",
          table: "#F9F9F9",
          overlay: "rgba(255,255,255,0.8)",
          selected: "#4b4453",
        },
        primary: "#F86254",
        accent: {
          blue: "#2272eb",
          cyan: "#00C9C2",
          darkCyan: "#007571",
        },
        padding: {
          base: "16px",
          lg: "20px",
        },
      },
      height: {
        header: "65px",
      },
      spacing: {
        header: "65px",
      },
      maxWidth: {
        720: "720px",
        900: "900px",
        1100: "1100px",
        1500: "1500px",
      },
    },
  },
  plugins: [],
} satisfies Config;
