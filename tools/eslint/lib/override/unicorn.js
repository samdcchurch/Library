/** @type {import('../types.d.ts').Overrides} */
export const unicorn = {
  eslint: {
    rules: {
      'require-unicode-regexp': 'off'
    }
  },
  node: {
    rules: {
      'unicorn/no-process-exit': 'off'
    }
  }
};
