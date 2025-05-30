// eslint.config.js
import antfu from '@antfu/eslint-config'
// import tseslint from 'typescript-eslint'
// import vuePlugin from 'eslint-plugin-vue'
// import vueParser from 'vue-eslint-parser'

export default antfu(
  {
    ignores: [
      // "packages/theme/dist/*.js",
      '**/node_modules',
      '**/*.md',
      // "**/*.yml",
      '**/.history/**',
      '**/dist/',
      '**/cache/',
      '**/obsidian/',
      '**/checkCodeRunnerEnvironment.js'
    ],
  },
  // {
  //   files: ['packages/**/*.{vue}'],
  //   languageOptions: {
  //     parser: vueParser,
  //     parserOptions: {
  //       parser: tseslint.parser,
  //       extraFileExtensions: ['.vue'],
  //       project: true
  //     }
  //   },
  //   plugins: {
  //     vuePlugin
  //   },
  //   rules: {
  //     ...vuePlugin.configs['flat/recommended'].rules
  //   }
  // },

  // eslintPluginPrettierRecommended,
  {
    rules: {
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/extensions': 'off',
      'quotes': ['off', 'as-needed',],
      'semi': ['warn', 'never',],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'no-param-reassign': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-restricted-syntax': 'off',
      'no-bitwise': 'off',
      'camelcase': 'off',
      'no-case-declarations': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'no-undef': 'off',
      'no-shadow': 'off',
      'max-len': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-use-before-define': 'off',
      'no-continue': 'off',
      'no-extend-native': 'warn',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'non-null-expression': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'consistent-return': 'off',
      'no-console': 'off',
      'ts/comma-dangle': 'off',
      'curly': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'ts/no-var-requires': 'off',
      'ts/no-require-imports': 'off',
      'ts/ban-ts-comment': 'off',
      'vue/prefer-import-from-vue': 'off',
      'jsdoc/no-types': 'off',
      'no-template-curly-in-string': 'off',
      // ----new test -----
      'no-var': 'warn',
      'style/quotes': ['off', 'as-needed'],
      // "quotes": "off",
      'ts/no-unused-vars': 'off',
      'ts/no-shadow': 0,
      'style/comma-dangle': 'off',
      'jsonc/sort-keys': 'off',
      'vue/html-indent': 'off',
      'style/*': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'no-unused-vars': ['warn', {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: false,
        reportUsedIgnorePattern: false,
        varsIgnorePattern: '^(?:_|temp_)',
        argsIgnorePattern: '^(?:_|temp_)'
      }],
      'unused-imports/no-unused-vars': ['warn', {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'all',
        ignoreRestSiblings: false,
        reportUsedIgnorePattern: false,
        varsIgnorePattern: '^(?:_|temp_)',
        argsIgnorePattern: '^(?:_|temp_)'
      }],
      'style/eol-last': ['off', 'always'],
      'jsonc/comma-dangle': 'off',
      'perfectionist/sort-imports': 'off',
    },
  },
)
