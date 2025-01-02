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
        "dark-blue": "#14213d",
        "light-blue": "#1d3557",
        "light-red": "#f1faee",
        "red-500": "#e63946",
        'light-gray': '#f1faee',
        'light-black': '#1E1818',
        'title' : '#333',
        'text' : '#555',
      },
      lineHeight: {
        3: '1.75rem', 
      },
    },
  },
  plugins: [],
} satisfies Config;
