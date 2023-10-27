module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.cjs', 'webpack.config.js', '.*.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
      '@typescript-eslint',
      '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,

    'no-mixed-spaces-and-tabs': 1,
    'no-trailing-spaces': 1,
    'quotes': [1, 'single', 'avoid-escape'],
    'semi:': 0,
    "indent": 'off',
    "object-curly-spacing": [2, "always"],

    'comma-spacing': 0,
    'no-multi-spaces': 0,
    'brace-style': 0,
  },
}
