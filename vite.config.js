import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "Components/*": ["/src/components/*"],
      Components: ["/src/components"],
      "Assets/*": ["/src/assets/*"],
      Assets: ["/src/assets"],
    },
  },
});
