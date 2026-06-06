// @ts-expect-error
import plugin from 'eslint-plugin-promise';
import { mapRules } from './utils.js';

/** @type {import('../types.d.ts').Config[]} */
export const promise = [
  {
    plugins: {
      promise: plugin
    },

    rules: mapRules(plugin.rules, ([µ]) => [`promise/${µ}`, 'error'])
  },

  {
    rules: {
      'promise/always-return': 'off',
      'promise/avoid-new': 'off',
      'promise/catch-or-return': [
        'error',
        {
          allowFinally: true
        }
      ],
      'promise/no-native': 'off',
      'promise/prefer-await-to-callbacks': 'off',
      'promise/prefer-await-to-then': 'off'
    }
  }
];
