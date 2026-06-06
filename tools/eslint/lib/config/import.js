import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import plugin from 'eslint-plugin-import-x';
import { mapRules } from './utils.js';

// cspell:ignore espree chunkname

/** @type {import('../types.d.ts').Config[]} */
export const import_ = [
  {
    plugins: {
      'import-x': plugin
    },

    rules: mapRules(plugin.rules, ([µ]) => [`import-x/${µ}`, 'error']),

    settings: {
      ...plugin.flatConfigs.typescript.settings,

      // https://tinyurl.com/28bjjkyv
      'import-x/ignore': ['node_modules']
    }
  },

  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true
        })
      ]
    }
  },

  {
    rules: {
      'import-x/dynamic-import-chunkname': 'off',
      'import-x/exports-last': 'off',
      'import-x/extensions': ['error', 'ignorePackages'],
      'import-x/group-exports': 'off',
      'import-x/max-dependencies': 'off',
      'import-x/no-anonymous-default-export': 'off',
      'import-x/no-extraneous-dependencies': [
        'error',
        {
          includeTypes: true
        }
      ],
      'import-x/no-internal-modules': [
        'error',
        {
          allow: [
            '@astrojs/starlight/**',
            '@golf/**',
            '@trpc/server/**',
            '**/*.svg',
            '**/fixture.js',
            '**/hooks.js',
            '**/index.css',
            '**/index.js',
            '**/wiring.js',
            'astro/*',
            'csv-parse/sync',
            'dayjs/**',
            'es-toolkit/compat',
            'motion/react',
            'react-cosmos/*',
            'react-dom/*',
            'tailwindcss/**',
            'zustand/**'
          ]
        }
      ],
      'import-x/no-named-export': 'off',
      'import-x/no-namespace': 'off',
      'import-x/no-relative-parent-imports': 'off',
      'import-x/no-rename-default': 'off',
      'import-x/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
      'import-x/no-unused-modules': [
        'error',
        { suppressMissingFileEnumeratorAPIWarning: true, unusedExports: true }
      ],
      'import-x/prefer-default-export': 'off'
    }
  }
];
