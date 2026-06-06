import type { Config } from 'prettier';

export type Override = Exclude<Config['overrides'], undefined>[number];

export type { Config };

export declare function defineConfig(config: Config): Config;
export declare function mergeConfig(...configs: readonly Config[]): Config;
export declare function withOptions(override: Override, options?: Override['options']): Override;

export declare const baseConfig: Omit<Config, 'overrides'>;
export declare const defaultConfig: Config;

export const overrides: Record<'jsdoc' | 'packagejson', Override>;

declare const default_: Config;
export default default_;
