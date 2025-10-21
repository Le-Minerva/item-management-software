import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    port: 5173,      // fix the port used to run the react app
    strictPort: true, // raise error when th default port is occupied instead of changing one
    proxy: {
      '/api': 'http://localhost:5000',
    }, //any incoming requests that have a URL that starts with /api have to be forwarded to http://localhost:5000
  }
})
