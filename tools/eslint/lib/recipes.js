import { configs } from './config/index.js';
import { Extensions } from './constants.js';
import { glob } from './utils.js';

/** @type {typeof import('./types.d.ts').recipes} */
export const recipes = Object.freeze({
  eslint: configs.eslint,
  import: configs.import,
  jsdoc: configs.jsdoc,
  node: configs.node,
  prettier: configs.prettier,
  promise: configs.promise,
  sonarjs: configs.sonarjs,
  stylistic: configs.stylistic,
  typescript: {
    configs: configs.typescript,
    context: { files: glob('**/*', Extensions.typescript) }
  },
  unicorn: configs.unicorn,
  vitest: {
    configs: configs.vitest,
    context: { files: glob('**/*', Extensions.vitest) }
  }
});
