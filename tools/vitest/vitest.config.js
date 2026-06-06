import { defineConfig } from './lib/utils.js';

export default defineConfig({
  test: {
    coverage: {
      exclude: ['./lib/constants.js', './lib/setup/*.ts']
    }
  }
});
