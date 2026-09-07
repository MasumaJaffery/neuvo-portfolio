import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://icodedreams.com',
  output: 'static',      // pure static build — every page ships as plain HTML
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
