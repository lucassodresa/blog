import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";
import tailwind from "@astrojs/tailwind";
import { join } from "path";

export default defineConfig({
  site: "https://blog.lucassodresa.com",
  integrations: [
    tailwind(),
    sanityIntegration({
      projectId: "jlf6c7o6",
      dataset: "production",
      useCdn: false,
    }),
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});
