import { presets } from './presets.js';
import { assemble } from './utils.js';

export { configs } from './config/index.js';
export { Extensions } from './constants.js';
export { overrides } from './override/index.js';
export { presets } from './presets.js';
export { recipes } from './recipes.js';
export { assemble, glob, mergeConfig } from './utils.js';

// eslint-disable-next-line import-x/no-default-export
export default assemble(presets.default);
