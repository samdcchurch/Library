export default {
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        100: true
      },
      exclude: ['bin/x-prettier.js', 'lib/index.js', 'lib/types.d.ts', '*.config.js']
    },
    include: ['**/*.test.js']
  }
};
