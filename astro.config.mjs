// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "");

console.log("project id:", env.PUBLIC_SANITY_PROJECT_ID)

export default defineConfig({
  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET,
      apiVersion: "2026-03-12",
      useCdn: false,
      studioBasePath: "/studio",
    }),
    react(),
  ],
    vite: {
      plugins: [tailwindcss()],
    },
});