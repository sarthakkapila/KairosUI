import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#E1E7EC",
          'neon-pink': '#FF6EC7', 
        gray: colors.slate,
      },
      boxShadow: {
        'glow-pink': '0 0 8px rgba(255, 110, 199, 0.8), 0 0 16px rgba(255, 110, 199, 0.6)',
      },
      fontFamily: {
        sans: ['"Aeonik"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

export default config;
