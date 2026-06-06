import plugin from 'eslint-plugin-n';

/** @type {import('../types.d.ts').Config[]} */
export const node = [
  plugin.configs['flat/recommended-module'],

  {
    languageOptions: {
      globals: {
        NodeJS: 'readonly'
      }
    }
  },

  {
    rules: {
      'n/callback-return': 'error',
      'n/handle-callback-err': 'error',
      'n/no-callback-literal': 'error',
      'n/no-extraneous-import': 'off',
      'n/no-extraneous-require': 'off',
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
      'n/no-process-exit': 'off',
      'n/no-unpublished-import': ['error', { ignoreTypeImport: true }],
      'n/no-unsupported-features/es-syntax': ['error', { version: '>=24' }],
      'n/no-unsupported-features/node-builtins': [
        'error',
        {
          ignores: [],
          version: '>=22'
        }
      ],
      'n/shebang': 'off'
    }
  }
];
