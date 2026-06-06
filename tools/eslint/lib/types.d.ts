import type {
  FlatConfig,
  LooseRuleDefinition,
  AnyRuleModule
} from '@typescript-eslint/utils/ts-eslint';

type PluginRules = Record<string, LooseRuleDefinition | AnyRuleModule>;

export type Config = Readonly<FlatConfig.Config>;

export type Category =
  | 'eslint'
  | 'import'
  | 'jsdoc'
  | 'node'
  | 'prettier'
  | 'promise'
  | 'sonarjs'
  | 'stylistic'
  | 'typescript'
  | 'unicorn'
  | 'vitest';

export type Overrides = Readonly<{
  [key in Category]?: Config | readonly Config[] | ((context: Config) => Config | Config[]);
}>;

export type Options = Readonly<Partial<{ overrides: Partial<typeof overrides> | false }>>;

export type Descriptor = Readonly<{
  context: Config;
  configs?: Config | readonly Config[];
  options?: Options;
}>;

export type Recipe = Record<Category, Config | Descriptor | readonly (Config | Descriptor)[]>;

export declare const configs: Readonly<Record<Category, Config[]>>;

export declare const overrides: Readonly<
  Record<
    Extract<
      Category,
      'import' | 'jsdoc' | 'node' | 'promise' | 'stylistic' | 'typescript' | 'unicorn' | 'vitest'
    >,
    Overrides
  >
>;

export declare const presets: Readonly<Record<'default' | 'astro', 'node', Partial<Recipe>>>;

export declare const recipes: Readonly<Recipe>;

export declare const Extensions: Record<
  Extract<Category, 'cjs' | 'esm' | 'typescript' | 'vitest'>,
  string[]
>;

export function assemble(recipe: Partial<Recipe>, options?: Options): Config[];

export declare function mergeConfig<T, U>(config: T, addendum: U): T & U;

export function glob(
  prefix: string,
  ...extensions: readonly (string | readonly string[])[]
): string[];

export declare function mapRules(
  rules: PluginRules | undefined,
  fn: (args: [string, LooseRuleDefinition]) => [string, FlatConfig.RuleEntry]
): FlatConfig.Rules;

declare const default_: Config[];

export default default_;
