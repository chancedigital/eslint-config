# Chance Digital ESLint Config

[![Greenkeeper badge](https://badges.greenkeeper.io/chancedigital/eslint-config.svg)](https://greenkeeper.io/)

Shareable configuration for [ESLint](http://eslint.org/) following Chance Digital Coding Standards.

## Installation

You should install this configuration along with its `peerDependencies` as `devDependencies` in your project:

```shell
yarn add -D @chancedigital/eslint-config eslint@7 eslint-plugin-import@2 babel-eslint@10
```

## Usage

Extend the configuration from your project's [ESLint configuration](https://eslint.org/docs/user-guide/configuring):

```js
// .eslintrc
{
  "extends": ["@chancedigital"]
}
```

## Supersets

In addition to the base ruleset, you may wish to install supersets of rules based on the project you are working on. Supersets are not mutually exclusive and can be combined (for example, if you are working on a WordPress project that uses React components, you can use both the `react` and `wp` supersets).

You can extend any superset in `.eslintrc` by adding the standard into an `extends` array.

```js
// .eslintrc
{
  "extends": [
    "@chancedigital/eslint-config/[SUPERSET_NAME]"
  ]
}
```

The following is a table of available supersets along with their required `devDependencies`:

| Superset     | `devDependencies`                                                                                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `jest`       | `eslint-plugin-jest@24` `eslint-plugin-testing-library@3`                                                                                |
| `mocha`      | `eslint-plugin-mocha@8`                                                                                                                  |
| `node`       | `eslint-plugin-node@11`                                                                                                                  |
| `react`      | `eslint-plugin-react@7` `eslint-plugin-react-hooks@4` `eslint-plugin-jsx-a11y` `eslint-plugin-jest@24` `eslint-plugin-testing-library@3` |
| `typescript` | `@typescript-eslint/parser@3` `@typescript-eslint/eslint-plugin@3` `typescript@4`                                                        |
| `wp`         | `eslint-plugin-wpcalypso@5` `@wordpress/eslint-plugin@7`                                                                                 |

## Test Standards

As of v5.0, we have removed the Jest rules from the standard config. This is because some projects may use other tools such as Mocha. To use rules for Jest or Mocha, install the corresponding plugin and extend the superset as follows:

```shell
# For Jest
yarn add -D eslint-plugin-jest@23

# For Mocha
yarn add -D eslint-plugin-mocha@7
```

```js
// .eslintrc
"extends": [
  // For Jest
  "@chancedigital/eslint-config/jest"
  // For Mocha
  "@chancedigital/eslint-config/mocha"
]
```

### More Info

Refer to the [ESLint documentation on Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) for more information.
