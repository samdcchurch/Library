import { eslint } from './eslint.js';
import { import_ } from './import.js';
import { jsdoc } from './jsdoc.js';
import { node } from './node.js';
import { prettier } from './prettier.js';
import { promise } from './promise.js';
import { sonarjs } from './sonarjs.js';
import { stylistic } from './stylistic.js';
import { typescript } from './typescript.js';
import { unicorn } from './unicorn.js';
import { vitest } from './vitest.js';

/** @type {typeof import('../types.d.js').configs} */
export const configs = Object.freeze({
  eslint,
  import: import_,
  jsdoc,
  node,
  prettier,
  promise,
  sonarjs,
  stylistic,
  typescript,
  unicorn,
  vitest
});
