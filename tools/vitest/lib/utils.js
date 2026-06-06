/* eslint-disable-next-line import-x/no-internal-modules */
import { coverageConfigDefaults, mergeConfig } from 'vitest/config';

/**
 * Default Vitest configuration.
 *
 * @type {typeof import('./types.d.ts').defaultConfig}
 */
export const defaultConfig = () => ({
  test: {
    coverage: {
      enabled: true,
      exclude: [
        '**/@(types|constants).ts',
        '**/*.config.[jt]s',
        '**/*.d.ts',
        '**/*.fixture.*',
        '**/*.generated.ts',
        '**/*.setup.[jt]s',
        '**/build',
        '**/dynamic-import-helper.js',
        '**/fixture.*',
        '**/index.[jt]s',
        '**/test/**',
        ...coverageConfigDefaults.exclude
      ],
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        100: true
      },
      watermarks: {
        branches: [90, 100],
        functions: [90, 100],
        lines: [90, 100],
        statements: [90, 100]
      }
    },
    include: ['**/*.test.[jt]s?(x)'],
    testTimeout: 15_000
  }
});

/**
 * Merge the specified Vitest configuration with the default configuration.
 *
 * @type {typeof import('./types.d.ts').defineConfig}
 */
export function defineConfig(config) {
  return async (/** @type {import('./types.d.ts').ConfigEnv} */ env) =>
    mergeConfig(defaultConfig(env), typeof config === 'function' ? await config(env) : config);
}

// Re-export
export { mergeConfig };
