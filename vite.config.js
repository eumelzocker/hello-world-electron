import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
  ],
    build: {
    outDir: 'dist',
        rollupOptions: {
            input: {
                entry: "src/renderer/main.js",
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/renderer"),
        },
  ],
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
    },  },
});
