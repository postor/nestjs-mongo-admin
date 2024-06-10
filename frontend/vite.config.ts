import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteReactAutoRoutePlugin from 'vite-react-auto-route-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  css:{
    postcss:{
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }
  },
  plugins: [
    ViteReactAutoRoutePlugin({
      root: './src/pages', // Optional customization
      getRoutesFile: /auto-get-routes\.ts/,
    }),
    react(),
  ],
  define: {
    'process.env': process.env,
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      }
    }
  },
  base: './',
});
