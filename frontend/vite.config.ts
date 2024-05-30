import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  server: {
    host: true,
    proxy: {
      '/users': {
        target: 'http://localhost:3000',
      }
    }
  },
  base: './',
});
