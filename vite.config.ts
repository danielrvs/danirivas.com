import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        tailwindcss(),
        postcssNested(),
        autoprefixer(),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
  optimizeDeps: {
    include: [
      '@astrojs/mdx',
      'astro',
      'react',
      'react-dom',
      'svelte',
      'vue',
    ],
    exclude: ['@resvg/resvg-js'],
  },
  server: {
    fs: {
      // Permite servir archivos desde el directorio raíz del proyecto
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      // Configura alias para rutas de importación
      '@': '/src',
      '@components': '/src/components',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
    },
  },
});
