import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: '/Gaming-/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Ensure this alias is set
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optional: Fix chunking issues
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
});
