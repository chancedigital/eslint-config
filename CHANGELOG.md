# 8.0.0 (2020-11-07)

### BREAKING CHANGES

* Drop support for Node 10
* Revert default ecma version to 2018 in all configurations
* We always test React projects with Jest, so you now get the Jest superset for free when extending the React superset
* Removed import warnings from `no-restricted-properties` as not every project will use the same bundling technique

### Bug Fixes

* Fixed missing version detection in the React superset
* Change `no-unused-vars` settings from `"none"` to `"after-used"`

### Features

* Added warning rules to default config:
	* `no-empty-character-class`
	* `no-empty-pattern`
	* `no-ex-assign`
	* `no-func-assign`
	* `no-invalid-regexp`
	* `no-negated-in-lhs`
  * `getter-return`
  * `no-control-regex`
  * `no-delete-var`
  * `no-labels`
  * `no-native-reassign`
  * `no-shadow-restricted-names`
  * `no-sparse-arrays`
  * `no-this-before-super`
  * `no-useless-escape`
  * `require-yield`
  * `valid-typeof`
* Removed rules from default config:
  * `no-confusing-arrow`
  * `no-lonely-if`
  * `no-multiple-empty-lines`
  * `no-new`
  * `no-shadow`
* Added rules to `react` config:
  * `react/jsx-no-comment-textnodes`
  * `react/no-typos`
* Removed rules from `react` config:
  * `jsx-a11y/accessible-emoji`
  * `react/no-did-mount-set-state`
  * `react/no-did-update-set-state`
  * `react/no-string-refs`
  * `react/react-in-jsx-scope`
