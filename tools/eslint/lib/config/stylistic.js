import stylist from '@stylistic/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';

/** @type {import('../types.d.ts').Config[]} */
export const stylistic = [
  {
    plugins: {
      perfectionist
    },

    rules: perfectionist.configs['recommended-natural'].rules
  },

  {
    plugins: {
      '@stylistic': {
        rules: stylist.rules
      },

      'rules': {
        ...stylist.configs.recommended.rules
      }
    }
  },

  {
    rules: {
      '@stylistic/lines-around-comment': [
        'error',
        {
          afterBlockComment: false,
          allowArrayEnd: false,
          allowArrayStart: true,
          allowBlockEnd: false,
          allowBlockStart: true,
          allowClassEnd: false,
          allowClassStart: true,
          allowEnumEnd: false,
          allowEnumStart: true,
          allowInterfaceEnd: false,
          allowInterfaceStart: true,
          allowModuleEnd: false,
          allowModuleStart: true,
          allowObjectEnd: false,
          allowObjectStart: true,
          allowTypeEnd: false,
          allowTypeStart: true,
          beforeBlockComment: true,
          ignorePattern: 'v8|cspell'

          /*
           * https://github.com/eslint-stylistic/eslint-stylistic/issues/462
           * beforeLineComment: true
           */
        }
      ],
      '@stylistic/multiline-comment-style': ['error', 'starred-block'],
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/spaced-comment': ['error', 'always'],

      'perfectionist/sort-imports': [
        'error',
        {
          newlinesBetween: 0
        }
      ]
    }
  }
];
