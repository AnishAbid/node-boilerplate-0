module.exports = {
    extends: ['prettier','eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier','@typescript-eslint'],
    rules: {
        'no-console': 1,       // Means warning
        'prettier/prettier': 2, // Means error
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-parameter-properties': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-var-requires': 'off'
      },
    root: true,
  };