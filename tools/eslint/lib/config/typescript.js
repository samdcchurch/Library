// eslint-disable-next-line import-x/no-internal-modules
import { defineConfig } from 'eslint/config';
import { configs } from 'typescript-eslint';

/** @type {import('../types.d.ts').Config[]} */
export const typescript = [
  ...defineConfig(configs.all),

  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/max-params': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/no-invalid-void-type': [
        'error',
        { allowAsThisParameter: true, allowInGenericTypeArguments: true }
      ],
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false
        }
      ],
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unnecessary-condition': [
        'error',
        { allowConstantLoopConditions: true }
      ],
      // https://github.com/typescript-eslint/typescript-eslint/issues/12158
      '@typescript-eslint/no-unnecessary-type-arguments': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: false,
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          allowNamedExports: true,
          classes: true,
          functions: false,
          variables: true
        }
      ],
      '@typescript-eslint/object-curly-spacing': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/sort-type-constituents': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off'
    }
  }
];
