import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "sim-ui/dist/style.css": resolve(
        __dirname,
        "../packages/sim-ui/src/styles/index.css",
      ),
      "sim-ui": resolve(__dirname, "../packages/sim-ui/src/index.ts"),
    },
  },
  server: {
    port: 8081,
    host: "0.0.0.0",
  },
  preview: {
    port: 8081,
    host: "0.0.0.0",
  },
});
