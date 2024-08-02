/*
 * This is to configure the eslint and will provide the common errors while writing the code
 * and compile time
 */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
  ],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ], // Sorting imports order
    'no-unused-vars': 'error', // Unused variables
    indent: ['error', 2], // Indentation
    quotes: ['error', 'single'], // strings must be in single quotes
    'no-console': 'warn', // Allow console statements but warn, useful for development and reminding to clean up before production
    'no-debugger': 'error', // Throw an error if the debugger statement is used
    eqeqeq: ['error', 'always'], // use === and !== instead of == and !=
    semi: ['error', 'always'], // use semicolons at the end of statements
    curly: ['error', 'all'], // Require curly braces for all control statements
    camelcase: 'error', // use camelCase for variable and function names
    'no-trailing-spaces': 'error', // Disallow trailing whitespace at the end of lines
  },
};
