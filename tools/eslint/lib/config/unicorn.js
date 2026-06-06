import plugin from 'eslint-plugin-unicorn';

/** @type {import('../types.d.ts').Config[]} */
export const unicorn = [
  plugin.configs.all,

  {
    rules: {
      'unicorn/catch-error-name': [
        'error',
        {
          ignore: ['cause']
        }
      ],
      'unicorn/consistent-destructuring': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-array-reverse': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-immediate-mutation': 'off',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prefer-switch': 'off',
      'unicorn/prevent-abbreviations': 'off'
    }
  }
];
