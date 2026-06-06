import { defineConfig } from '@tools/vitest';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/test/**', 'src/app/**', './src/main.ts']
    },
    setupFiles: ['vitest.setup.js'],
    testTimeout: 30_000
  }
});
