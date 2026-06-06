import { assemble, presets } from './lib/index.js';

export default [
  ...assemble(presets.node),

  {
    rules: {
      'jsdoc/require-description': 'off'
    }
  }
];
