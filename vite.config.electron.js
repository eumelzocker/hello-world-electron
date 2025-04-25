import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist-electron',
    emptyOutDir: true,
    lib: {
      entry: '',
      formats: ['cjs']
    }, 
    rollupOptions: {
      input: {
        main: 'src/main/main.js',
        preload: 'src/main/preload.js'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      },
    }
  },
  plugins: [
    
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});