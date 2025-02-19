import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://stevenlam.me",
  integrations: [mdx(), sitemap(), tailwind()],
  experimental: {
    svg: true,
  },
});
