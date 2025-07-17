// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  // Configuración del sitio
  site: 'https://danirivas.com',
  trailingSlash: 'ignore',
  
  // Integraciones
  integrations: [
    // Integración con Tailwind CSS
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.mjs',
    }),
    
    // Generación de sitemap
    sitemap(),
    
    // Compresión de assets (solo en producción)
    process.env.NODE_ENV === 'production' && compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      logger: 1,
    }),
  ].filter(Boolean),
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  
  // Configuración de compilación
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
    assetsPrefix: '',
  },
  
  // Configuración de Vite
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
    optimizeDeps: {
      include: ['@astrojs/mdx'],
      exclude: ['@resvg/resvg-js'],
    },
    css: {
      devSourcemap: true,
    },
  },
  
  // Configuración de Markdown
  markdown: {
    syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'github-dark',
    },
    gfm: true,
  },
  
  // Configuración de caché
  cacheDir: './.astro/cache',
});
