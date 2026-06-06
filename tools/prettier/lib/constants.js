/** @type {typeof import('./types.d.ts').overrides} */
export const overrides = Object.freeze({
  jsdoc: {
    files: '**/*.{ts,js,tsx,jsx,cjs,mjs}',
    options: {
      plugins: ['prettier-plugin-jsdoc']
    }
  },

  packagejson: {
    files: '**/package.json',
    options: {
      plugins: ['prettier-plugin-packagejson']
    }
  }
});

/** @type {typeof import('./types.d.ts').baseConfig} */
export const baseConfig = Object.freeze({
  $schema: 'http://json.schemastore.org/prettierrc',
  endOfLine: 'lf',
  jsxSingleQuote: true,
  printWidth: 100,
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'none',
  useTabs: false
});

/** @type {typeof import('./types.d.ts').defaultConfig} */
export const defaultConfig = Object.freeze({
  ...baseConfig,
  overrides: [overrides.jsdoc, overrides.packagejson]
});
