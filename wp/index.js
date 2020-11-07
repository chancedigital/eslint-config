/* eslint-disable quotes, array-bracket-spacing, indent */
module.exports = {
	extends: "../index.js",
	plugins: ["@wordpress", "wpcalypso"],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jquery: true,
	},
	rules: {
		"@wordpress/dependency-group": 0,
		"@wordpress/gutenberg-phase": 0,
		"@wordpress/no-unused-vars-before-return": 0,
		"@wordpress/valid-sprintf": 2,
		"@wordpress/no-base-control-with-label-without-id": 2,
		"array-bracket-spacing": [1, "always"],
		"comma-dangle": [1, "always-multiline"],
    "comma-spacing": 1,
    "comma-style": [1, "last"],
		"computed-property-spacing": [1, "always"],
		curly: 1,
    "eol-last": 1,
    eqeqeq: [1, "smart", { null: "ignore" }],
		"func-call-spacing": 1,
		indent: [
			1,
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"],
				ignoreComments: true,
			},
		],
		"key-spacing": 1,
		"keyword-spacing": 1,
		"no-multi-spaces": 0,
		"no-nested-ternary": 0,
		"no-restricted-syntax": [
			"error",
			{
				selector:
					"CallExpression[callee.name=/^(__|_n|_nx|_x)$/]:not([arguments.0.type=/^Literal|BinaryExpression$/])",
				message: "Translate function arguments must be string literals.",
			},
			{
				selector:
					"CallExpression[callee.name=/^(_n|_nx|_x)$/]:not([arguments.1.type=/^Literal|BinaryExpression$/])",
				message: "Translate function arguments must be string literals.",
			},
			{
				selector:
					"CallExpression[callee.name=_nx]:not([arguments.3.type=/^Literal|BinaryExpression$/])",
				message: "Translate function arguments must be string literals.",
			},
		],
		"no-spaced-func": 1,
		"no-trailing-spaces": 1,
		"no-underscore-dangle": 0,
		"object-curly-spacing": [1, "always"],
		"padded-blocks": [1, "never"],
		quotes: [1, "single", { avoidEscape: true, allowTemplateLiterals: true }],
		semi: 1,
		"semi-spacing": 1,
		"space-before-function-paren": [
			1,
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never",
			},
		],
		"space-in-parens": [1, "always"],
		"space-infix-ops": [1, { int32Hint: false }],
		"space-unary-ops": [
			1,
			{
				overrides: {
					"!": true,
				},
			},
		],
		"template-curly-spacing": [1, "always"],
		"wpcalypso/i18n-ellipsis": 2,
		"wpcalypso/i18n-mismatched-placeholders": 2,
		"wpcalypso/i18n-named-placeholders": 2,
		"wpcalypso/i18n-no-collapsible-whitespace": 0,
		"wpcalypso/i18n-no-placeholders-only": 2,
		"wpcalypso/i18n-no-this-translate": 0,
		"wpcalypso/i18n-no-variables": 2,
		"wpcalypso/jsx-classname-namespace": 0,
		"wpcalypso/jsx-gridicon-size": 0,
		"wpcalypso/import-docblock": 0,
		"wpcalypso/post-message-no-wildcard-targets": 0,
		"wpcalypso/redux-no-bound-selectors": 0,
		yoda: 0,
	},
	overrides: [
		{
			files: ["*.native.js"],
			rules: {
				"@wordpress/no-base-control-with-label-without-id": "off",
			},
		},
	],
	settings: {
		react: {
			version: "16.6",
		},
	},
};
