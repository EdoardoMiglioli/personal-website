import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 2%, rgba(255, 255, 255, 0.24) 50%, rgba(255, 255, 255, 0.48) 100%)',
      },
      boxShadow: {
        'custom-1': '0 0 40px 0 rgba(0, 0, 0, 0.08)',
        'custom-2': '0 0 16px 0 rgba(0, 0, 0, 0.12)',
        'custom-3': '0 0 16px 0 rgba(0, 0, 0, 0.16)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
      },
    },
  },
  plugins: [],
} satisfies Config;
