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
      backdropBlur: {
        'custom': '33.333px',
      },
      maskImage: {
        'gradient-to-bottom': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 1) 100%)',
      },
      boxShadow: {
        'custom-1': '0 0 40px 0 rgba(0, 0, 0, 0.08)',
        'custom-2': '0 0 16px 0 rgba(0, 0, 0, 0.12)',
        'custom-3': '0 0 16px 0 rgba(0, 0, 0, 0.16)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
      },
      screens: {
        xxs: '380px',
        xs: '420px',
        lg2: '1080px'
      },
    },
  },
  plugins: [],
} satisfies Config;
