import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://tale-of-survival.netlify.app',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt()
  ],
  output: 'server',
  adapter: netlify(),
  assets: {
    enabled: true,
    fallback: true,
    serviceEntryPoint: '@astrojs/image/sharp'
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
