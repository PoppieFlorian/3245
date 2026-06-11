import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3015,
    proxy: {
      '/api': {
        target: 'http://localhost:3016',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 3015,
  },
});
