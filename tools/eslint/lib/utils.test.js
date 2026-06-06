import { pick } from 'es-toolkit';
import { describe, expect, test } from 'vitest';
import { configs } from './config/index.js';
import { presets } from './presets.js';
import { recipes } from './recipes.js';
import { assemble, glob, mergeConfig } from './utils.js';

/** @typedef {import('./types.d.ts').Config} Config */

describe('utils', () => {
  test('assemble', () => {
    expect(assemble({})).toStrictEqual([]);

    expect(assemble({ eslint: configs.eslint })).toHaveLength(5);

    expect(
      assemble(pick(recipes, ['eslint', 'import', 'unicorn']), { overrides: false })
    ).toHaveLength(10);

    expect(assemble(pick(recipes, ['eslint', 'import', 'unicorn']))).toHaveLength(14);

    expect(assemble(pick(recipes, ['eslint']))).toHaveLength(5);

    expect(assemble(presets.default)).toHaveLength(36);
    expect(assemble(presets.default, { overrides: false })).toHaveLength(24);

    expect(assemble(pick(recipes, ['import', 'jsdoc', 'vitest']))).toHaveLength(12);

    expect(() => assemble(/** @type {any} */ ({ foobar: true }))).toThrow(
      /^Unexpected category: foobar$/
    );

    expect(
      assemble({
        eslint: /** @type {any} */ ({
          configs: false,
          context: {
            files: '*.xyz'
          }
        }),
        typescript: /** @type {any} */ (false),
        unicorn: /** @type {any} */ ([false, null, undefined, 0])
      })
    ).toStrictEqual([]);

    expect(
      assemble({
        sonarjs: { rules: { 'sonarjs/foobar': 'warn' } }
      })
    ).toHaveLength(1);
  });

  test('glob', () => {
    expect(glob('', [])).toStrictEqual([]);
    expect(glob('xyz', [])).toStrictEqual([]);
    expect(glob('foo/bar/*', ['baz'])).toStrictEqual(['foo/bar/*.baz']);
    expect(glob('*', ['a', '.b', ' ...c ', 'd.'])).toStrictEqual(['*.a', '*.b', '*.c', '*.d.']);
  });

  test('mergeConfig', () => {
    const base = Object.freeze({ a: 'b', c: ['d'], f: ['g'], i: 'j', l: 'm' });

    expect(mergeConfig({}, {})).toStrictEqual({});
    expect(mergeConfig(base, {})).toStrictEqual(base);
    expect(mergeConfig({}, base)).toStrictEqual(base);

    expect(
      mergeConfig(base, {
        c: ['e'],
        f: 'h',
        i: ['k'],
        l: 'n'
      })
    ).toStrictEqual({
      a: 'b',
      c: ['d', 'e'],
      f: ['g', 'h'],
      i: ['j', 'k'],
      l: 'n'
    });
  });
});
