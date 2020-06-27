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
			rules: {
				// TypeScript's `noFallthroughCasesInSwitch` option is more robust
				"default-case": 0,
				// 'tsc' already handles this
				// https://github.com/typescript-eslint/typescript-eslint/issues/291
				"no-dupe-class-members": 0,
				// 'tsc' already handles this
				// https://github.com/typescript-eslint/typescript-eslint/issues/477
				"no-undef": 0,

				// Conflicting TS/ESLint rules
				"no-array-constructor": 0,
				"@typescript-eslint/no-array-constructor": 1,
				"no-use-before-define": 0,
				"@typescript-eslint/no-use-before-define": [
					0,
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
						args: "none",
						ignoreRestSiblings: true,
					},
				],
				"no-useless-constructor": 0,
				"@typescript-eslint/no-useless-constructor": 1,

				"@typescript-eslint/consistent-type-assertions": 1,
			},
		},
	],
};
