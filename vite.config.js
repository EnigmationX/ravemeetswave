import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
 import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),    ViteImageOptimizer({
      // Optimize PNG
      png: {
        quality: 75,
      },
      // Optimize JPEG
      jpeg: {
        quality: 75,
      },
      // Convert to WebP automatically
      webp: {
        quality: 80,
      },
      // Optimize AVIF for modern browsers
      avif: {
        quality: 70,
      },
      // Optimize SVG files
      svg:false,
      // Optional: cache results for faster rebuilds
       include: ['**/*.{png,jpg,jpeg,webp,avif}'], // solved the issue of svg files hailting build
      cache: true,
    }),],
})
