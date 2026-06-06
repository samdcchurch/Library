/** @type {import('../types.d.ts').Overrides} */
export const jsdoc = {
  prettier: {
    rules: {
      'jsdoc/check-indentation': 'off',
      'jsdoc/check-line-alignment': ['error', 'never', { wrapIndent: '  ' }],
      'jsdoc/sort-tags': 'off',
      'jsdoc/tag-lines': [
        'error',
        'any',
        {
          startLines: 1
        }
      ]
    }
  }
};
