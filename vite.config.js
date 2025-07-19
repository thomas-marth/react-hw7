import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    include: /src\/.*\.[tj]sx?$/, // чтобы обрабатывать .jsx/.tsx
  },
});
