import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';
 
export default defineConfig({
  base: '/Portfolio/',  
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress',
      ext: '.gz',
      threshold: 10240
    })
  ],
})
