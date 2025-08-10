import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/kma": {
        target: "https://apis.data.go.kr",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/kma/, ""),
      },
    },
  },
});
