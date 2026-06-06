import globals from 'globals';

/** @type {import('../types.d.ts').Overrides} */
export const import_ = {
  eslint: {
    rules: {
      'no-duplicate-imports': 'off'
    }
  },

  import: [
    {
      files: ['**/*.config.@(j|t|mj|cj)s'],
      rules: {
        'import-x/no-default-export': 'off',
        'import-x/no-nodejs-modules': 'off'
      }
    },
    {
      files: ['**/*.cjs'],
      languageOptions: {
        globals: globals.commonjs,
        sourceType: 'commonjs'
      },
      rules: {
        'import-x/no-commonjs': 'off'
      }
    }
  ],

  node: {
    rules: {
      'import-x/no-nodejs-modules': 'off'
    }
  },

  vitest: () => ({
    files: ['**/vitest.config.@(j|t)s'],
    rules: {
      'import-x/no-internal-modules': 'off'
    }
  })
};
