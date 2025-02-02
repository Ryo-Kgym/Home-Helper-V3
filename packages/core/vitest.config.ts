import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setup-vitest.ts"],
    alias: {
      "@/type": path.resolve(__dirname, "../../packages/type"),
    },
  },
});
