module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],
  // uncomment this if stuff breaks?
  /*   overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}']
    }
  ], */
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'], // force semicolons
    indent: ['error', 2], // indent
    'no-multi-spaces': ['error'], // avoid extraneous spaces
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true }],
    'comma-dangle': ['error', 'never']
    /* 'vue/max-len': [
      'warn',
      {
        code: 80,
        template: 80,
        tabWidth: 2,
        comments: 80,
        ignorePattern: '',
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: false,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
        ignoreRegExpLiterals: false,
        ignoreHTMLAttributeValues: false,
        ignoreHTMLTextContents: false
      }
    ] */
  }
}
