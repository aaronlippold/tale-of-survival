import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), partytown()],
  output: 'server',
  adapter: netlify(), // Changed to Netlify adapter
});
