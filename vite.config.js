import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <--- ADD THIS LINE EXACTLY HERE
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
})