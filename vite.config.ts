import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import cesium from "vite-plugin-cesium";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cesium()],
  base: "./",
  define: {
    CESIUM_BASE_URL: JSON.stringify("./assets/Cesium/")
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'main-[hash].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
