import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      rymaneco: ["'RymanEco-Regular', sans-serif"],
      yesevaone: ["'YesevaOne-Regular', sans-serif"],
      phetsarath: ["'Phetsarath-Regular', sans-serif"],
      phetsarathb: ["'Phetsarath-Bold', sans-serif"],
      yeservaone: ["'YesevaOne-Regular', sans-serif"],
      secularone: ["'Secular One', sans-serif"],
    },
    extend: {
      colors: {
        "basil-green": "#555E30",
        "enchanted-forest": "#607C11",
        "bamboo-grass-green": "#7F9A4A",
        "scrofulous-brown": "#D7A23F",
        "luscious-purple": "#5F5D72",
        "sweet-buttermilk": "#FDEFDD",
        "alabaster-white": "#DED5BE",
        "winds-breath": "#e0e2da",
        "pepper-pinch": "#111309",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
