import { toMerged } from 'es-toolkit';
import { describe, expect, test } from 'vitest';
import { defaultConfig, defineConfig } from './utils.js';

describe('utils', () => {
  test('defaultConfig', () => {
    expect(defaultConfig({ command: 'build', mode: 'production' })).toMatchObject({
      test: {
        coverage: {
          provider: 'v8'
        },
        include: ['**/*.test.[jt]s?(x)']
      }
    });
  });

  test('defineConfig', async () => {
    const env = { command: /** @type {any} */ ('build'), mode: 'development' };

    const config = {
      alpha: true,
      test: {
        coverage: {
          beta: 2
        },
        gamma: '1'
      }
    };

    const expectation = toMerged(defaultConfig(env), config);

    expect(expectation.alpha).toBe(true);
    expect(expectation.test.gamma).toBe('1');
    expect(expectation.test.coverage.beta).toBe(2);

    await expect(defineConfig({})(env)).resolves.toStrictEqual(defaultConfig(env));
    await expect(defineConfig(() => ({}))(env)).resolves.toStrictEqual(defaultConfig(env));

    await expect(
      defineConfig(() => /** @type {any} */ ({ delta: false }))(env)
    ).resolves.toStrictEqual({ ...defaultConfig(env), delta: false });
  });
});
