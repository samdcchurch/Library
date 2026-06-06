// cspell:ignore cyclomatic
import plugin from 'eslint-plugin-sonarjs';

/** @type {import('../types.d.ts').Config[]} */
export const sonarjs = [
  {
    plugins: {
      sonarjs: plugin
    }
  },

  {
    rules: {
      'sonarjs/arrow-function-convention': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/cyclomatic-complexity': 'off',
      'sonarjs/elseif-without-else': 'off',
      'sonarjs/file-header': 'off',
      'sonarjs/nested-control-flow': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-implicit-dependencies': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/shorthand-property-grouping': 'off',
      'sonarjs/sonar-no-magic-numbers': 'off',
      'sonarjs/too-many-break-or-continue-in-loop': 'off',
      'sonarjs/variable-name': 'off'
    }
  }
];
