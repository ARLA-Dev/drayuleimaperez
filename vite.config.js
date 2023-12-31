import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ViteImageOptimizer({
      png: {
        quality: 80
      },
      webp: {
        quality: 80
      },
      avif: {
        quality: 80
      }
    })
  ],
  build: {
    minify: true,
    cssMinify: true
  }
})
