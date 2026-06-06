/** @type {typeof import('./types.d.ts').Extensions} */
export const Extensions = Object.freeze({
  cjs: ['?(c)js'],
  esm: ['?(m)js'],
  typescript: ['ts?(x)'],
  vitest: ['test.?(c|m)js', 'test.ts?(x)']
});
