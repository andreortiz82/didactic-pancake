import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
