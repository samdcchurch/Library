import plugin from 'eslint-plugin-jsdoc';
import { mapRules } from './utils.js';

/** @type {string[]} */
const exemptedBy = ['component', 'overload'];

/** @type {import('../types.d.ts').Config[]} */
export const jsdoc = [
  {
    plugins: {
      jsdoc: plugin
    },

    rules: mapRules(plugin.rules, ([µ]) => [`jsdoc/${µ}`, 'error']),

    settings: {
      jsdoc: {
        exemptDestructuredRootsFromChecks: true,
        ignoreInternal: true,
        ignorePrivate: true
      }
    }
  },

  {
    rules: {
      'jsdoc/check-examples': 'off',
      'jsdoc/check-param-names': ['error', { checkDestructured: false }],
      'jsdoc/check-tag-names': ['error', { definedTags: ['component'] }],
      'jsdoc/convert-to-jsdoc-comments': 'off',
      'jsdoc/imports-as-dependencies': 'off',
      'jsdoc/informative-docs': 'off',
      'jsdoc/lines-before-block': 'off',
      'jsdoc/match-name': 'off',
      'jsdoc/no-bad-blocks': [
        'error',
        {
          ignore: ['fixme', 'todo']
        }
      ],
      'jsdoc/no-missing-syntax': 'off',
      'jsdoc/no-restricted-syntax': 'off',
      'jsdoc/prefer-import-tag': 'off',
      'jsdoc/reject-any-type': 'off',
      'jsdoc/require-description': [
        'error',
        {
          checkConstructors: false,
          exemptedBy: ['overload']
        }
      ],
      'jsdoc/require-example': 'off',
      'jsdoc/require-file-overview': 'off',
      'jsdoc/require-param': ['error', { checkDestructured: false, exemptedBy }],
      'jsdoc/require-rejects': 'off',
      'jsdoc/require-returns': ['error', { checkGetters: false, exemptedBy }],
      'jsdoc/require-tags': 'off',
      'jsdoc/require-template': 'off',
      'jsdoc/require-throws': ['error', { exemptedBy }],
      'jsdoc/require-throws-type': 'off',
      'jsdoc/require-yields': 'off',
      'jsdoc/text-escaping': 'off',
      'jsdoc/type-formatting': 'off'
    }
  },

  {
    files: ['**/*.js'],
    rules: {
      'jsdoc/no-types': 'off'
    }
  }
];
