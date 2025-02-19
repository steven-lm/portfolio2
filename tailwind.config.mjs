import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--font-sans)",
            fontFamily: "var(--font-sans)",
            p: {
              fontFamily: "var(--font-sans) !important",
            },
            "article p": {
              fontFamily: "var(--font-sans) !important",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
