import plugin from 'eslint-config-prettier';

/** @type {import('../types.d.ts').Config[]} */
export const prettier = [
  plugin,

  {
    rules: {
      curly: ['error']
    }
  }
];
