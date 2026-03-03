// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://feltpressurewashing.com', // Update this to your actual domain
  integrations: [sitemap()],
});
