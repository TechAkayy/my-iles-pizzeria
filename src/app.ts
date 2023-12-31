// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import { defineApp } from 'iles'
import 'uno.css'
import '@/assets/css/tailwind.css'
import 'prismjs/themes/prism-tomorrow.css'

import { computed } from 'vue'
import pinia from '@/plugins/pinia'

import checkDarkTheme from '~/composables/dark-color-scheme-check?raw'
import loadPgIaInHead from '~/composables/pgia?raw'
import type { Script } from '@unhead/schema'
type TurboScript = Script & { once: true }

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
  },
  head({ frontmatter, site }) {
    return {
      htmlAttrs: { lang: 'en-US' },

      // Other meta tags are added in MetaTags.vue using the Head componentsummary_large_image
      meta: [
        { property: 'charset', content: 'utf-8' },
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        { property: 'author', content: site.author },
        { property: 'keywords', content: computed(() => frontmatter.tags) },
      ],
      script: [
        { children: checkDarkTheme, once: true } as TurboScript,
        { children: loadPgIaInHead, once: true } as TurboScript,
        { tagPosition: 'head', src: 'pg-interactions/lib/head.js' },
        { tagPosition: 'bodyClose', src: 'pg-interactions/lib/index.js' },
      ],
    }
  },
})
