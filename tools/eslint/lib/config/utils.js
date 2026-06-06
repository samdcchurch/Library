/** @type {typeof import('../types.d.ts').mapRules} */
export const mapRules = (rules, fn) => {
  // Filter out deprecated rules.
  const active = Object.fromEntries(
    Object.entries(
      /* v8 ignore next */
      rules ?? {}
    ).filter(([, v]) => {
      /* v8 ignore next */
      if (typeof v === 'function') {
        return true;
      }

      const { meta } = v;

      return meta && 'deprecated' in meta ? !meta.deprecated : true;
    })
  );

  return Object.fromEntries(Object.entries(active).map(fn));
};
