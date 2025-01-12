import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';
import robotsTxt from 'astro-robots-txt';
// https://astro.build/config
export default defineConfig({
  site: 'https://tale-of-survival.netlify.app',
  integrations: [
    tailwind(),
    sitemap(),
    partytown({
      config: {
        debug: false, // Change to false to reduce console noise
        forward: ['dataLayer.push'],
        resolveUrl: (url) => {
          const pathname = new URL(url).pathname;
          if (pathname.includes('/~partytown/')) {
            return url.replace('/~partytown/', '/_astro/partytown/');
          }
          return url;
        },
        storage: {
          enabled: true,
          allowedOrigins: ['https://tale-of-survival.netlify.app']
        },
        // Add performance configuration
        performance: {
          enabled: true,
          navigateFallbackDenylist: [/^\/[\w/%-]+\/?$/],
        }
      },
    }),
    robotsTxt()
  ],
  output: 'server',
  adapter: netlify(),
});
