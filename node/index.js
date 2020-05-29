// WIP @todo
module.exports = {
	extends: ["../index.js", "plugin:node/recommended-script"],
	parser: "espree",
	plugins: ["node"],
	rules: {
		"no-process-exit": 0,
	},
};
