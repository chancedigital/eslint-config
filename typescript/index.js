module.exports = {
	extends: "../index.js",
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: "module",
				warnOnUnsupportedTypeScriptVersion: true,
			},
			plugins: ["@typescript-eslint"],
			rules: {
				// These ESLint rules are known to cause issues with typescript-eslint
				// See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
				camelcase: 0,
				indent: 0,
				"jsx-quotes": 0,
				"no-array-constructor": 0,
				"no-unused-vars": 0,
				"@typescript-eslint/consistent-type-assertions": 1,
				"@typescript-eslint/no-array-constructor": 1,
				"@typescript-eslint/no-namespace": 2,
				"@typescript-eslint/no-unused-vars": [
					1,
					{
						args: "none",
						ignoreRestSiblings: true,
					},
				],
			},
		},
	],
};
