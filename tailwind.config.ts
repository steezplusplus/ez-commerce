import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
      animation: {
        'marquee-fast': 'marquee 60s linear infinite',
        'marquee-slow': 'marquee 90s linear infinite',
      },
    },
  },
};
export default config;
