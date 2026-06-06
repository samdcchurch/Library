import { pick } from 'es-toolkit';
import { recipes } from './recipes.js';

const default_ = pick(recipes, [
  'eslint',
  'import',
  'jsdoc',
  'prettier',
  'promise',
  'sonarjs',
  'stylistic',
  'unicorn',
  'vitest'
]);

/** @type {typeof import('./types.d.ts').presets} */
export const presets = Object.freeze({
  default: default_,
  node: { ...default_, ...pick(recipes, ['node']) }
});
