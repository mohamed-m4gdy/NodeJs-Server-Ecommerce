module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'prettier/prettier': 2, // means error
    'no-console': 0,
    'no-var': 'error',
    'prefer-const': 'error',
  },
};
