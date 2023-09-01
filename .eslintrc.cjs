module.exports = {
    extends: ['prettier','eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier','@typescript-eslint'],
    rules: {
        'no-console': 1,       // Means warning
        'prettier/prettier': 2 // Means error
      },
    root: true,
  };