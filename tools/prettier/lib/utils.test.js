import { describe, test, expect } from 'vitest';
import { defineConfig, mergeConfig, withOptions } from './utils.js';
import { defaultConfig, baseConfig, overrides } from './constants.js';

describe('utils', () => {
  test('defineConfig', () => {
    const config = defineConfig({ foo: 'bar', singleQuote: false });

    expect(config).toMatchObject({
      endOfLine: 'lf',
      foo: 'bar',
      jsxSingleQuote: true,
      singleQuote: false,
      trailingComma: 'none',
      useTabs: false
    });

    expect(config.overrides).toHaveLength(2);
  });

  test('mergeConfig', () => {
    const config = mergeConfig(
      baseConfig,

      {
        overrides: [overrides.jsdoc],
        foo: ['alpha'],
        bar: 'gamma'
      },

      {
        overrides: [overrides.packagejson],
        foo: 'beta',
        bar: ['delta']
      }
    );

    expect(config).toStrictEqual({
      ...defaultConfig,
      foo: ['alpha', 'beta'],
      bar: ['gamma', 'delta']
    });
  });

  test('withOptions', () => {
    const config = defineConfig({
      overrides: [
        withOptions(overrides.jsdoc, {
          singleQuote: false,
          tabWidth: 8
        })
      ]
    });

    expect(config.overrides).toHaveLength(3);

    expect(config.overrides?.[2]).toStrictEqual({
      files: '**/*.{ts,js,tsx,jsx,cjs,mjs}',
      options: {
        plugins: ['prettier-plugin-jsdoc'],
        singleQuote: false,
        tabWidth: 8
      }
    });
  });
});
