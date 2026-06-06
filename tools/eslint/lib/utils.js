import { cloneDeep, mergeWith, trimStart } from 'es-toolkit';
import { configs } from './config/index.js';
import { overrides } from './override/index.js';

/** @typedef {import('./types.d.ts').Config} Config */
/** @typedef {import('./types.d.ts').Category} Category */
/** @typedef {import('./types.d.ts').Descriptor} Descriptor */

/** @type {(x: unknown) => unknown[]} */
const toArray = (x) => (x === undefined ? [] : Array.isArray(x) ? x : [x]);

/** @type {(a: unknown, b: unknown) => unknown} */
const mergeFn = (a, b) =>
  Array.isArray(a) || Array.isArray(b) ? [...toArray(a), ...toArray(b)] : undefined;

/** @type {typeof import('./types.d.ts').mergeConfig} */
export const mergeConfig = (config, addendum) =>
  // @ts-expect-error
  mergeWith(cloneDeep(config), addendum, mergeFn);

/** @type {typeof import('./types.d.ts').assemble} */
export const assemble = (recipe, options = { overrides }) => {
  /** @type {Config[]} */
  const result = [];

  /** @type {Partial<Record<Category, Descriptor[]>>} */
  const descriptors = {};

  // Normalize descriptors
  for (const [k, v1] of Object.entries(recipe)) {
    const category = /** @type {Category} */ (k);

    // Sanity check
    if (!v1) {
      continue;
    }

    if (!configs[category]) {
      throw new Error(`Unexpected category: ${category}`);
    }

    const current = {
      /** @type {Config[]} */
      configs: [],

      /** @type {Descriptor[]} */
      descriptors: []
    };

    for (const v2 of Array.isArray(v1) ? v1 : [v1]) {
      if (!v2) {
        continue;
      }

      // Is this is just a flat config?
      if (!('context' in v2)) {
        current.configs.push(v2);

        continue;
      }

      current.descriptors.push(v2);
    }

    // Did we see any flat configs?
    if (current.configs.length > 0) {
      current.descriptors.push({
        configs: current.configs,
        context: {}
      });
    }

    if (current.descriptors.length > 0) {
      descriptors[category] = current.descriptors;
    }
  }

  // Overrides
  const ovr = [];

  // Build definitions
  for (const [k1, v1] of Object.entries(descriptors)) {
    const category = /** @type {Category} */ (k1);

    for (const v2 of v1) {
      const { context } = v2;

      // Merge configs + context
      (Array.isArray(v2.configs) ? v2.configs : [v2.configs]).forEach((µ) => {
        if (!µ) {
          return;
        }

        result.push(mergeConfig(µ, context));
      });

      // Are there any override candidates enabled for this descriptor?
      const o1 = options?.overrides;
      const o2 = v2.options?.overrides;

      if (o2 === false || o1 === false || (!o2 && !o1)) {
        continue;
      }

      const candidates = (o2 ?? o1)?.[/** @type {keyof typeof overrides} */ (category)];

      if (!candidates) {
        continue;
      }

      // Look for applicable overrides
      for (const k2 of Object.keys(descriptors)) {
        const q = candidates[/** @type {Category} */ (k2)];

        if (!q) {
          continue;
        }

        if (typeof q === 'function') {
          ovr.push(...[q(context)].flat());
        } else {
          ovr.push(...(Array.isArray(q) ? q : [q]).map((µ) => mergeConfig(µ, context)));
        }
      }
    }
  }

  // Merge overrides
  if (ovr.length > 0) {
    result.push(...ovr);
  }

  return result;
};

/** @type {typeof import('./types.d.ts').glob} */
export const glob = (prefix, ...extensions) =>
  extensions.flat().map((µ) => `${prefix}.${trimStart(µ.trim(), '.')}`);
