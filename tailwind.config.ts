import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

// Usando withMT para combinar o Material Tailwind com Tailwind
const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['GeistSans', 'Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
});

export default config;
