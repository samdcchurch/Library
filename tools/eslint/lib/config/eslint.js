import js from '@eslint/js';
import esx from 'eslint-plugin-es-x';
// eslint-disable-next-line import-x/no-internal-modules
import { defineConfig } from 'eslint/config';
import globals from 'globals';

/** @type {import('../types.d.ts').Config[]} */
export const eslint = [
  ...defineConfig(js.configs.all),

  {
    languageOptions: {
      ecmaVersion: 2023,

      globals: {
        ...globals.es2023,
        console: 'readonly'
      },

      sourceType: 'module'
    },

    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  },

  {
    plugins: {
      'es-x': {
        rules: esx.rules
      }
    },

    rules: {
      ...esx.configs['flat/restrict-to-es2023'].rules
    }
  },

  {
    ignores: ['**/*.generated.ts']
  },

  {
    rules: {
      'camelcase': 'off',
      'capitalized-comments': [
        'error',
        'always',
        {
          ignoreInlineComments: true,
          ignorePattern: 'v8|cspell|ignore|stylelint'
        }
      ],
      'complexity': 'off',
      'func-names': ['error', 'always', { generators: 'as-needed' }],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'id-length': 'off',
      'line-comment-position': 'off',
      'max-classes-per-file': 'off',
      'max-depth': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-params': 'off',
      'max-statements': 'off',
      'multiline-comment-style': 'off',
      'new-cap': [
        'error',
        {
          capIsNew: false
        }
      ],
      'no-continue': 'off',
      'no-implicit-coercion': [
        'error',
        {
          allow: ['!!']
        }
      ],
      'no-inline-comments': 'off',
      'no-magic-numbers': 'off',
      'no-nested-ternary': 'off',
      'no-plusplus': 'off',
      'no-ternary': 'off',
      'no-undef-init': 'off',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'no-useless-assignment': 'off',
      'one-var': 'off',
      'prefer-named-capture-group': 'off',
      'sort-imports': 'off',
      'sort-keys': 'off'
    }
  }
];
