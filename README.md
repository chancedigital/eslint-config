# Chance Digital ESLint Config

Shareable configuration for [ESLint](http://eslint.org/) following Chance Digital Coding Standards.

## Installation

You should install this configuration along with its `peerDependencies` as `devDependencies` in your project:

```shell
yarn add -D @chancedigital/eslint-config eslint eslint-plugin-import eslint-plugin-jest babel-eslint
```

If you're planning to use the React superset of rules, you should also install `eslint-plugin-react` and `eslint-plugin-react-hooks`:

```
yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

If you're planning to use the WordPress superset of rules, you should also install `eslint-plugin-wpcalypso`:

```
yarn add -D eslint-plugin-wpcalypso
```

## Usage

Extend the configuration from your project's [ESLint configuration](https://eslint.org/docs/user-guide/configuring):

```
"extends": "@chancedigital"
```

Or, if your project uses React and you want to opt in to additional React-specific rules, extend the React superset:

```
"extends": "@chancedigital/eslint-config/react"
```

...or for WordPress projects:

```
"extends": "@chancedigital/eslint-config/wp"
```

Refer to the [ESLint documentation on Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) for more information.
