/** @type {import('../types.d.ts').Overrides} */
export const typescript = {
  eslint: {
    rules: {
      'class-methods-use-this': 'off',
      'init-declarations': 'off',
      'no-redeclare': 'off',
      'no-return-await': 'off',
      'no-shadow': 'off',
      'no-unreachable': 'error',
      'no-unused-vars': 'off',
      'no-use-before-define': 'off',
      'require-await': 'off'
    }
  },

  import: {
    rules: {
      'import-x/extensions': 'off'
    }
  },

  jsdoc: {
    rules: {
      'jsdoc/no-bad-blocks': [
        'error',
        {
          ignore: ['fixme', 'todo', 'ts-check', 'ts-expect-error', 'ts-ignore', 'ts-nocheck']
        }
      ],
      'jsdoc/no-types': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/require-jsdoc': [
        'error',
        {
          checkConstructors: false,
          checkGetters: false,
          enableFixer: false,
          fixerMessage: '@fixme - Missing JSDoc',
          publicOnly: true
        }
      ],
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-property-type': 'off',
      'jsdoc/require-returns-type': 'off'
    },

    settings: {
      jsdoc: {
        contexts: [
          // https://astexplorer.net
          'ExportNamedDeclaration > VariableDeclaration',
          'ArrowFunctionExpression',
          'ClassDeclaration',
          'ClassExpression',
          'FunctionDeclaration',
          'MethodDefinition',
          'TSClassProperty',
          'TSDeclareFunction',
          'TSEnumDeclaration',
          'TSInterfaceDeclaration',
          'TSMethodSignature',
          'TSTypeAliasDeclaration'
        ],
        mode: 'typescript'
      }
    }
  }
};
