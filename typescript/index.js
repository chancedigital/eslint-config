module.exports = {
	extends: "../index.js",
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: "module",
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ["@typescript-eslint"],
			// If adding a typescript-eslint version of an existing ESLint rule,
			// make sure to disable the ESLint rule here.
			rules: {
				"default-case": 0,
				"no-dupe-class-members": 0,
				"no-undef": 0,

				// Add TypeScript specific rules and turn off ESLint equivalents
				"@typescript-eslint/consistent-type-assertions": 1,
				"no-array-constructor": 0,
				"@typescript-eslint/no-array-constructor": 1,
				"no-duplicate-imports": 0,
				"@typescript-eslint/no-duplicate-imports": 1,
				"no-redeclare": 0,
				"@typescript-eslint/no-redeclare": 1,
				"no-use-before-define": 0,
				"@typescript-eslint/no-use-before-define": [
					1,
					{
						functions: false,
						classes: false,
						variables: false,
						typedefs: false,
					},
				],
				"no-unused-expressions": 0,
				"@typescript-eslint/no-unused-expressions": [
					2,
					{
						allowShortCircuit: true,
						allowTernary: true,
						allowTaggedTemplates: true,
					},
				],
				"no-unused-vars": 0,
				"@typescript-eslint/no-unused-vars": [
					1,
					{
						args: "after-used",
						ignoreRestSiblings: true,
						argsIgnorePattern: "^(event|_|React)$",
					},
				],
				"no-useless-constructor": 0,
				"@typescript-eslint/no-useless-constructor": 1,
			},
		},
	],
};
