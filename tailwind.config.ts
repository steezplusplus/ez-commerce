import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-slow2': 'marquee2 60s linear infinite',
        'marquee-fast': 'marquee 40s linear infinite',
        'marquee-fast2': 'marquee2 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
};
export default config;
