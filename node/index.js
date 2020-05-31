// WIP @todo
module.exports = {
	extends: ["../index.js", "plugin:node/recommended-script"],
	parser: "espree",
	plugins: ["node"],
	rules: {
		"node/no-process-exit": 1,
	},
};
