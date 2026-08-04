import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Finalna domena (potrebno za točan sitemap/SEO)
  site: "https://terssing.com",
  integrations: [sitemap()],
});
