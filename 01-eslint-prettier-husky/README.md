## Setup Eslint Prettier and Husky in Node JS Typescript Project

### 1. ESLint

- Step 1 - Install the dependencies

    - [eslint](https://www.npmjs.com/package/eslint)
        - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
        - `npm install --save-dev eslint`
    - [typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
        - An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
        - `npm install --save-dev @typescript-eslint/parser`
        -   if errors raise when you install `@typescript-eslint/parser` adjust `eslint` version `npm install --save-dev eslint@^8.56.0`
    - [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 
    
        - This package provides Airbnb's .eslintrc as an extensible shared config.
        - `npm install --save-dev eslint-config-airbnb`
    - [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
        - An ESLint plugin which provides lint rules for TypeScript codebases.
        - `npm install --save-dev @typescript-eslint/eslint-plugin`

- Step 2 - Create Configuration file
    - create `.eslintrc` file in root directory and add below configuration in it

    ```
        {
            "parser": "@typescript-eslint/parser",
            "extends": [
                "airbnb/base",
                "plugin:@typescript-eslint/recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript"
            ],
            "parserOptions": {
                "ecmaVersion": 2018,
                "project": "./tsconfig.json"
            },
            "rules": {
                "semi": ["error", "always"],
                "object-curly-spacing": ["error", "always"],
                "camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-explicit-any": 1,
                "@typescript-eslint/no-inferrable-types": [
                    "warn",
                    {
                    "ignoreParameters": true
                    }
                ],
                "no-underscore-dangle": "off",
                "no-shadow": "off",
                "no-new": 0,
                "@typescript-eslint/no-shadow": ["error"],
                "@typescript-eslint/no-unused-vars": "warn",
                "quotes": [2, "single", { "avoidEscape": true }],
                "class-methods-use-this": "off",
                "import/extensions": [
                    "error",
                    "ignorePackages",
                    {
                    "js": "never",
                    "jsx": "never",
                    "ts": "never",
                    "tsx": "never"
                    }
                ]
            }
        }
    ```

- Step 3 - Add the `.eslintignore` file

    - It can helps to you tell ESLint to ignore specific files and directories using `ignorePatterns` in your config files. `ignorePatterns` patterns follow the same rules as `.eslintignore`.

    ```
        # /node_modules/* in the project root is ignored by default
        /node_modules/*

        # build artefacts
        dist/*
        build/*
        coverage/*

        # data definition files
        **/*.d.ts

        # 3rd party libs
        /src/public/

        # custom definition files
        /src/types/
    ```

- Step 4 - Add action script in `package.json`
    - To run eslint `"lint": "eslint src/**/*.ts"`
    - To fix all aut-fixable errors `"lint-fix": "eslint --fix src/**/*.ts"`

### 2. Prettier

- Step 1 - Install the dependencies

    - [prettier](https://www.npmjs.com/package/prettier)
        - Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
        - `npm install -save-dev prettier`

    - [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
        - Turns off all rules that are unnecessary or might conflict with Prettier.
        - This lets you use your favorite shareable config without letting its stylistic choices get in the way when using Prettier.
        - `npm install -save-dev eslint-config-prettier`

    - [eslint-plugin-prettier]
        - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
        - Please read Integrating with [linters](https://prettier.io/docs/en/integrating-with-linters.html) before installing.
        - `npm install -save-dev eslint-plugin-prettier`

- Step 2 - Create Configuration file

    - create `.prettierrc` file in root directory and add below configuration in it

    ```

{
    "bracketSpacing": true,
    "printWidth": 80,
    "proseWrap": "preserve",
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 4,
    "useTabs": true,
    "arrowParens": "always",
    "endOfLine": "lf",
    "overrides": [
        {
            "files": "*.json",
            "options": {
                "singleQuote": false
            }
        },
        {
            "files": ".*rc",
            "options": {
                "singleQuote": false,
                "parser": "json"
            }
        }
    ]
}


    ```

    - Add `"prettier"` to the `"extends"` array in your `.eslintrc.*` file. Make sure to put it last, so it gets the chance to override other configs.
    - Add the `"prettier"` entry in `"plugins"` array in your `.eslintrc.*` file.
    - Also add the net `"prettier/prettier": ["error"]` entry in `"rules"` object in your `.eslintrc.*` file.
    - Please check below updated `.eslintrc` config

    ```
        {
            "parser": "@typescript-eslint/parser",
            "extends": [
                "airbnb/base",
                "plugin:@typescript-eslint/recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                "prettier"
            ],
            "parserOptions": {
                "ecmaVersion": 2018,
                "project": "./tsconfig.json"
            },
            "plugins": ["prettier"],
            "rules": {
                "prettier/prettier": ["error"],
                "semi": ["error", "always"],
                "object-curly-spacing": ["error", "always"],
                "camelcase": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-explicit-any": 1,
                "@typescript-eslint/no-inferrable-types": [
                    "warn",
                    {
                    "ignoreParameters": true
                    }
                ],
                "no-underscore-dangle": "off",
                "no-shadow": "off",
                "no-new": 0,
                "@typescript-eslint/no-shadow": ["error"],
                "@typescript-eslint/no-unused-vars": "warn",
                "quotes": [2, "single", { "avoidEscape": true }],
                "class-methods-use-this": "off",
                "import/extensions": [
                    "error",
                    "ignorePackages",
                    {
                    "js": "never",
                    "jsx": "never",
                    "ts": "never",
                    "tsx": "never"
                    }
                ]
            }
        }
    ```

- Step 3 - Add the `.prettierignore` file
    -  To exclude files from formatting, create a `.prettierignore` file in the root of your project. `.prettierignore` uses gitignore syntax.

    ```
        # Ignore artifacts:
        build
        dist
        coverage

        # Ignore all HTML files:
        *.html

        .gitignore
        .prettierignore
    ```

- Step 4 - Add action script in `package.json`
    - To run prettier `"pretty": "prettier --write src/**/*.ts"`
    - Run the Prettier - `npm run pretty`

### 3. Husky

- Step 1 - Install the dependencies
    - [husky](https://www.npmjs.com/package/husky)
        - You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.
        - `npm install -save-dev husky`

- Step 2 - Add action script in `package.json`
    - Edit `package.json > prepare` script and run it once
    - `"prepare": "husky install"`
    - Add the hooks action script `"precommit"` and `"prepush"` in `package.json`
    - `"precommit": "npm run lint-fix && npm run pretty"`
    - `"prepush": "npm run lint"`
     
     ```json
     "scripts": {
  "prepare": "husky install",
  "precommit": "npm run lint-fix && npm run pretty",
  "prepush": "npm run lint"
   },
```

- Step 3 - Add the git hooks Actions
    - `npm run prepare` This script should set up Husky and create the `.husky` folder with the necessary hook files.
    - Add the `pre-commit` in `.husky folder` and which is created after running `npm run prepare`
    - Add below script in `pre-commit file`

        ```
            #!/bin/sh
            . "$(dirname "$0")/_/husky.sh"

            npm run precommit
        ```
    - Add the `pre-push` in `.husky folder` and which is created after running `npm run prepare`
    - Add below script in `pre-push file`

        ```
            #!/bin/sh
            . "$(dirname "$0")/_/husky.sh"

            npm run prepush
        ```

    - `git commit -m "Test commit"`
    - `git push origin master`

<hr/>

### Check Versions
`npm list prettier eslint eslint-plugin-prettier eslint-config-prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin
`
