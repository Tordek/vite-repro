import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4040,
  },
  plugins: [
    react(),
    federation({
      name: "name",
      filename: "remoteEntry.js",

      exposes: {
        "./App": "src/App"
      },
      remotes: {
        'main': 'http://localhost:4040/remoteEntry.js'
      }
    }),
  ],
  
});
