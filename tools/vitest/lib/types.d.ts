import type {
  ConfigEnv,
  ViteUserConfig,
  ViteUserConfigExport,
  ViteUserConfigFnPromise
} from 'vitest/config';

export { mergeConfig } from 'vitest/config';

export type Config = ViteUserConfig;
export type { ConfigEnv };

export declare function defaultConfig(env: ConfigEnv): Config;
export declare function defineConfig(config: ViteUserConfigExport): ViteUserConfigFnPromise;

export const fragments: Record<'jsdom', Partial<Config['test']>>;
