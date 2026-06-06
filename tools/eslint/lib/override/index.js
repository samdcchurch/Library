import { import_ } from './import.js';
import { jsdoc } from './jsdoc.js';
import { node } from './node.js';
import { promise } from './promise.js';
import { stylistic } from './stylistic.js';
import { typescript } from './typescript.js';
import { unicorn } from './unicorn.js';
import { vitest } from './vitest.js';

/** @type {typeof import('../types.d.ts').overrides} */
export const overrides = {
  import: import_,
  jsdoc,
  node,
  promise,
  stylistic,
  typescript,
  unicorn,
  vitest
};
