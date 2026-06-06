import plugin from '@vitest/eslint-plugin';

/** @type {import('../types.d.ts').Config[]} */
export const vitest = [
  plugin.configs.all,

  {
    rules: {
      'vitest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
      'vitest/max-expects': 'off',
      'vitest/no-conditional-expect': 'off',
      'vitest/no-conditional-in-test': 'off',
      'vitest/no-focused-tests': ['error', { fixable: false }],
      'vitest/no-hooks': 'off',
      'vitest/prefer-called-once': 'off',
      'vitest/prefer-called-with': 'off',
      'vitest/prefer-describe-function-title': 'off',
      'vitest/prefer-expect-assertions': 'off',
      'vitest/prefer-import-in-mock': 'off',
      'vitest/prefer-to-be-falsy': 'off',
      'vitest/prefer-to-be-truthy': 'off',
      'vitest/require-top-level-describe': 'off',
      'vitest/unbound-method': 'off'
    }
  }
];
