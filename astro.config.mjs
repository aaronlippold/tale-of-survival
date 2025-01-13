import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import robotsTxt from 'astro-robots-txt';
import icon from "astro-icon";  // Add this import

export default defineConfig({
  site: 'https://tale-of-survival.netlify.app',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    icon({
      include: {
        heroicons: ['chevron-left-20-solid', 'chevron-right-20-solid']
      }
    })
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
