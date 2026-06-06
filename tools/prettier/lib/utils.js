import { mergeWith } from 'es-toolkit';
import { defaultConfig } from './constants.js';

/** @type {(x: unknown) => unknown[]} */
const toArray = (x) => (x === undefined ? [] : Array.isArray(x) ? x : [x]);

/** @type {(a: unknown, b: unknown) => unknown} */
const mergeFn = (a, b) =>
  Array.isArray(a) || Array.isArray(b) ? [...toArray(a), ...toArray(b)] : undefined;

/** @type {typeof import('./types.d.ts').defineConfig} */
export const defineConfig = (config) => mergeConfig(defaultConfig, config);

/** @type {typeof import('./types.d.ts').mergeConfig} */
export const mergeConfig = (...configs) =>
  /** @type {import('./types.d.ts').Config} */ configs.reduce(
    (acc, µ) => mergeWith(acc, µ, mergeFn),
    {}
  );

/** @type {typeof import('./types.d.ts').withOptions} */
export const withOptions = (override, options) => {
  const { files, ...rest } = override;

  return {
    files,
    ...mergeWith(rest, { options }, mergeFn)
  };
};
