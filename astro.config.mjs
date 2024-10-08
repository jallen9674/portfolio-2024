import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import vue from '@astrojs/vue'

import * as cheerio from 'cheerio'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: true,
    }),
    vue(),
    icon(),
  ],
  redirects: {
    '/blog': '/',
  },
})
