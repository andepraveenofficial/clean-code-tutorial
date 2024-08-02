# Setup : Eslint && Prettier && Husky

## Techstack : React + TypeScript + Vite

### 1. Eslint

A linter for identifying and reporting problems in your code.

1. Install (if not already installed): `npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
2. Install : `npm install -D eslint-plugin-react@latest`
3. modify eslint configure file

```cjs .eslintrc.cjs
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
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react', 'react-hooks'],
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
```

3. Add the `.eslintignore` file

```.eslintignore

    # Ignore node_modules
    node_modules/

    # Ignore build output directory

    dist/_
    build/_
    coverage/\*

    # Ignore specific files

    src/vendor/\*_/_.js

    # Ignore all test files
    **/*.test.js

```

### 2. Prettier

Code Formatter

1. Install Prettier : `npm install -D prettier`

2. Create Configuration file : `.prettierrc` file in root directory

```.prettierrc
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5",
  "endOfLine": "lf"
}

```

3.  Add the `.prettierignore` file.

```.prettierignore
# Ignore artifacts:
build
dist
coverage

# Ignore all HTML files:
*.html

.gitignore
.prettierignore

```

4.  Install `npm install -D eslint-config-prettier`

- `eslint-config-prettier` disables ESLint rules that conflict with Prettier.
- plugin:`prettier/recommended` enables the prettier/prettier rule.

```.eslintrc.cjs
module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    // Add your custom ESLint rules here
  }
};
```

5. Install `npm install -D eslint-plugin-prettier`

- Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

### 3. Husky

A tool that allows you to run scripts before, after, and during Git operations.

1. Install Husky : `npm install -D husky`
2. Initialize the git : `git init`
3. Add to action script in `package.json`

```json
  "scripts": {
    "prepare": "husky install",
    "precommit": "npm run lint-fix && npm run format",
    "prepush": "npm run lint"
  },
```

4.  Add the git hooks Actions

        - `npx husky-init` to create `.husky` folder
        - Add the `pre-commit` in `.husky folder` (If not).
        - Add below script in `pre-commit file`

```
 #!/usr/bin/env sh
. "$(dirname -- "$0")/\_/husky.sh"

# Run formatter
npm run format

# Run linter
npm run lint

# Fix lint error
npm run lint-fix

```

- Add the `pre-push` in `.husky folder`.
- Add below script in `pre-push file`

```
 #!/usr/bin/env sh
. "$(dirname -- "$0")/\_/husky.sh"

# Run formatter
npm run format

# Run linter
npm run lint

# Fix lint error
npm run lint-fix

```

- `git commit -m "Test commit"`
- `git push origin master`
