const loaderUtils = require("loader-utils");
const fs = require("fs");
const path = require("path");

module.exports = function (resource) {
	const name = loaderUtils.getOptions(this);

	const url = loaderUtils.interpolateName(this, "[name].[ext]", { resource });
	console.log("url", url);
	this.emitFile(path.join(__dirname, url), resource);
	const json = JSON.stringify(resource)
		.replace(/\u2028/g, "\\u2028")
		.replace(/\u2029/g, "\\u2029");
	// return `export defult ${json}`;
	// 通过this.callback抛出错误
	this.callback(new Error("some thing error", json)); 
	// this.async异步返回结果
};
