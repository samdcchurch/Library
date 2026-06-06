import { assemble, mergeConfig, presets, recipes } from '@tools/eslint';

export default [
  ...assemble({
    ...presets.default,

    typescript: mergeConfig(recipes.typescript, {
      context: {
        languageOptions: {
          parserOptions: {
            project: ['./tsconfig.json']
          }
        }
      }
    })
  }),

  {
    files: ['src/**/fixture.ts', 'src/test/**'],
    rules: {
      'jsdoc/require-jsdoc': 'off'
    }
  }
];
