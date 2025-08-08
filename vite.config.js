import { defineConfig } from 'vite';

export default defineConfig({
  base: '/interactive-rating-app/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        message: './message.html',
      },
    },
  },
});
