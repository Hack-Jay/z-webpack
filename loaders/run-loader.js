const { runLoaders } = require("loader-runner");
const fs = require("fs");
const path = require("path");

runLoaders(
	{
		resource: path.join(__dirname, "./demo.txt"),
		loaders: [path.join(__dirname, "./raw-loader.js")],
		context: {
			minimize: true,
		},
		readResource: fs.readFile.bind(fs),
	}, 
	(err, result) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result);
		}
	}
);
