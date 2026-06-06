import { defineConfig } from '@tools/vitest';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/test/**', 'tools/**']
    }
  }
});
