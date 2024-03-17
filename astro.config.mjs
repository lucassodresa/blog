import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  prefetch: true,
  site: "https://lucassodresa.com",
  integrations: [
    tailwind(),
    sanityIntegration({
      projectId: "jlf6c7o6",
      dataset: "production",
      useCdn: false,
    }),
  ],
});
