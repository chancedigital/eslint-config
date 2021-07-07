// WIP @todo
module.exports = {
	extends: ["../index.js", "plugin:node/recommended"],
	parser: "espree",
	plugins: ["node"],
	rules: {
		"no-process-exit": 0,
		"node/no-process-exit": 0,
	},
};
