import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://institutodegestiones.com',
  server: {
    allowedHosts: [
      'vufgh7-ip-85-87-221-1.tunnelmole.net'
    ]
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.startsWith('https://institutodegestiones.com/lp/'),
    }),
  ],
  output: 'static',
});
