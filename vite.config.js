import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use a relative base so built assets load correctly when deployed
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // produce deterministic filenames so Live Server can serve built files reliably
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/chunk-[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
})