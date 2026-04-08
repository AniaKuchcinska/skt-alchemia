// @ts-check
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "");

export default defineConfig({
  output: 'server',
  adapter: vercel(),
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