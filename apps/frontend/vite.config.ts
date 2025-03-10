import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ["./src/utils/testing-utils/setup.ts"],
    browser: {
      enabled: true,
      instances: [
        { browser: 'chromium' },
      ],
    },
  }
});
