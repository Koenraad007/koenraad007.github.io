// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://koenraad007.github.io',
  // Every page is built to <route>/index.html, served as /<route>/.
  trailingSlash: 'always',
  redirects: {
    // The CV lives at /home/ (canonical URL); / forwards there.
    '/': '/home/',
  },
  // Scope component styles with attribute selectors that add specificity
  // (the default `:where()` strategy adds none), so page styles reliably
  // override the global ones in src/styles/global.css.
  scopedStyleStrategy: 'attribute',
});
