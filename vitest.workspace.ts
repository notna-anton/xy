import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "./packages/emotion/vitest.config.ts",
  "./packages/web-components/vitest.config.ts",
  "./packages/react/vitest.config.ts",
  "./packages/styled/vitest.config.ts",
]);
