import type { Config } from "tailwindcss";

const config: Config = {
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
        darkGray: '#121212',
        carbonBlack: '#1C1C1C',
        leadGray: '#181818',
        anthracite: '#242424',
        deepNavy: '#0D1B2A',
      },
    },
  },
  plugins: [],
};
export default config;
