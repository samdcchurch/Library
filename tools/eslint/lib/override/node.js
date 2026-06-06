/** @type {import('../types.d.ts').Overrides} */
export const node = {
  node: {
    files: ['**/*.@(config|setup).@(j|t)s'],
    rules: {
      'n/no-unpublished-import': 'off'
    }
  }
};
