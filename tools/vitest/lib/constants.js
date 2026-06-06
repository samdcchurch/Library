/** @type {typeof import('./types.d.ts').fragments} */
export const fragments = Object.freeze({
  jsdom: {
    environment: 'happy-dom',
    setupFiles: ['@tools/vitest/setup/jsdom']
  }
});
