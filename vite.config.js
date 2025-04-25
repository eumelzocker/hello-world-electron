import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import electron from 'vite-plugin-electron';

export default defineConfig({
  extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  plugins: [vue(), electron([{
    entry: 'src/main/electron-main.js',
    onstart({
      startup
    }) {
      startup();
    },
  }, {
    entry: 'src/main/electron-preload.js',
    onstart({
      reload
    }) {
      reload();
    },
  }, ]), ],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        entry: 'src/renderer/main.js',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/renderer'),
    },
  },
});
;