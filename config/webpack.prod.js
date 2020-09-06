const webpack = require("webpack");
const path = require("path");
const SimplePlugin = require("../plugins/SimplePlugin");
const ZipPlugin = require("../plugins/zip-plugin");

module.exports = {
	plugins: [
		// new webpack.DllReferencePlugin({
		// 	manifest: require("./build/library/library.json"),
		// }),
		new SimplePlugin({ name: "simple plugins" }),
		new ZipPlugin({ filename: "offline"})
	],
	resolve: {
		alias: {
			react: path.resolve(
				__dirname,
				"./node_modules/react/umd/react.production.min.js"
			),
			"react-dom": path.resolve(
				__dirname,
				"./node_modules/react-dom/umd/react-dom.production.min.js"
			),
		},
		extensions: [".js"],
		mainFields: ["main"],
	},
};
