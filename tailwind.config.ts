import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg2': '1140px', // Custom breakpoint for 1140px
      },
      colors:{
        'rentilee':"#ffaa00",
        'rentilee-dark':'#ff7b00'
      }
    },
  },
  plugins: [],
};
export default config;
