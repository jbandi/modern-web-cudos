// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",

  experimental: {
    serverIslands: true,
  },

  adapter: node({
    mode: "standalone",
  }),

  integrations: [react()],
});
