/** @type {import('../types.d.ts').Overrides} */
export const vitest = {
  eslint: {
    rules: {
      'func-style': 'off',
      'no-await-in-loop': 'off'
    }
  },

  import: {
    rules: {
      'import-x/no-nodejs-modules': 'off'
    }
  },

  node: {
    rules: {
      'n/no-unpublished-import': 'off'
    }
  },

  sonarjs: {
    rules: {
      'sonarjs/no-duplicate-string': 'off'
    }
  },

  typescript: {
    rules: {
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/no-extra-parens': 'off',
      '@typescript-eslint/no-unnecessary-type-conversion': 'off',
      '@typescript-eslint/object-curly-spacing': 'off',
      '@typescript-eslint/space-before-function-paren': 'off'
    }
  },

  unicorn: {
    rules: {
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-promise-resolve-reject': 'off',
      'unicorn/no-zero-fractions': 'off'
    }
  }
};
