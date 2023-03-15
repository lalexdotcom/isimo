const { resolve } = require("path");

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "index.js",
		path: resolve(__dirname, "dist"),
	},
};
