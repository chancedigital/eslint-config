const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
	root: true,
	parser: "babel-eslint",
	plugins: ["import"],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module",
	},
	extends: ["eslint:recommended"],
	settings: {
		"import/ignore": [
			"node_modules",
			"\\.(coffee|scss|css|less|hbs|svg|json)$",
		],
	},

	rules: {
		"array-callback-return": 1,
		"brace-style": [1, "1tbs"],
		camelcase: 0,
		"comma-dangle": 0,
		"comma-style": 0,
		"consistent-return": 0,
		"default-case": [1, { commentPattern: "^no default$" }],
		"dot-location": [1, "property"],
		"dot-notation": 1,
		eqeqeq: 0,
		indent: 0,
		"max-len": 0,
		"new-cap": [1, { capIsNew: false, newIsCap: true }],
		"new-parens": 1,
		"no-array-constructor": 1,
		"no-caller": 1,
		"no-cond-assign": 1,
		"no-confusing-arrow": 0,
		"no-const-assign": 1,
		"no-dupe-args": 1,
		"no-dupe-class-members": 1,
		"no-dupe-keys": 1,
		"no-duplicate-case": 1,
		"no-duplicate-imports": 1,
		"no-else-return": 1,
		"no-empty": [1, { allowEmptyCatch: true }],
		"no-eval": 1,
		"no-extend-native": 1,
		"no-extra-bind": 1,
		"no-extra-label": 1,
		"no-extra-boolean-cast": 1,
		"no-extra-semi": 1,
		"no-fallthrough": 1,
		"no-implied-eval": 1,
		"no-iterator": 1,
		"no-label-var": 1,
		"no-lone-blocks": 1,
		"no-lonely-if": 1,
		"no-loop-func": 1,
		"no-mixed-operators": [
			1,
			{
				groups: [
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="],
					["&&", "||"],
					["in", "instanceof"],
				],
				allowSamePrecedence: false,
			},
		],
		"no-mixed-spaces-and-tabs": 0,
		"no-multiple-empty-lines": 0,
		"no-multi-str": 1,
		"no-new": 2,
		"no-new-func": 1,
		"no-new-object": 1,
		"no-new-symbol": 1,
		"no-new-wrappers": 1,
		"no-octal-escape": 2,
		"no-regex-spaces": 0,
		"no-restricted-globals": [2].concat(restrictedGlobals),
		"no-restricted-properties": [
			2,
			{
				object: "require",
				property: "ensure",
				message:
					"Please use import() instead. https://webpack.js.org/guides/code-splitting/",
			},
			{
				object: "System",
				property: "import",
				message:
					"Please use import() instead. https://webpack.js.org/guides/code-splitting/",
			},
		],
		"no-restricted-syntax": [1, "WithStatement"],
		"no-script-url": 1,
		"no-self-compare": 1,
		"no-sequences": 1,
		"no-shadow": 2,
		"no-shadow-restricted-names": 2,
		"no-template-curly-in-string": 1,
		"no-throw-literal": 1,
		"no-undef": 2,
		"no-unreachable": 1,
		"no-unused-expressions": [
			2,
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		"no-unused-labels": 1,
		"no-unused-vars": [
			1,
			{ args: "none", ignoreRestSiblings: true, varsIgnorePattern: "React" },
		],
		"no-useless-computed-key": 1,
		"no-useless-concat": 1,
		"no-useless-constructor": 1,
		"no-useless-rename": [
			1,
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],
		"no-use-before-define": [
			1,
			{
				functions: false,
				classes: false,
				variables: false,
			},
		],
		"no-var": 1,
		"no-with": 1,
		"no-whitespace-before-property": 1,
		"rest-spread-spacing": [1, "never"],
		"one-var": 0,
		"operator-linebreak": 0,
		"prefer-const": 0,
		"quote-props": [1, "as-needed"],
		quotes: 0,
		"require-await": 2,
		semi: 0,
		"space-before-blocks": 0,
		strict: [1, "never"], // assumed by babel
		"unicode-bom": [1, "never"],
		"use-isnan": 1,
		"import/first": 2,
		"import/no-amd": 2,
		"import/no-anonymous-default-export": 1,
		"import/no-webpack-loader-syntax": 2,
	},
};
