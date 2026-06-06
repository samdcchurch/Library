import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      exclude: ['./lib/index.js', './lib/*.d.ts', '*.config.js'],
      provider: 'v8'
    },
    include: ['**/*.test.js']
  }
});
