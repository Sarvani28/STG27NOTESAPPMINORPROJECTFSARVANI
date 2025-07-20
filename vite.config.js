import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    server: {
    proxy: {
      '/api': {
        target: 'https://stg-27-notesappmnsarvani.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
