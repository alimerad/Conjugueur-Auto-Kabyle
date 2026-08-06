import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    passWithNoTests: false,
  },
});
