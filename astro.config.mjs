// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://morbo-bot.github.io',
  base: '/morbo-blog',
  integrations: [mdx(), sitemap()],
});
