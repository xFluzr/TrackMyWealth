import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "investing-green":"var(--investing-green)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "text-color":"var(--text-color)",
        "investing-green":"var(--investing-green)"
      },
    },
  },
  plugins: [],
} satisfies Config;
