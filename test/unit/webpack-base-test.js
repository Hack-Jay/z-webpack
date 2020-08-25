const assert = require("assert");

describe("webpack base.js test case", () => {
	const baseConfig = require("../../lib/webpack.base.js");

	it("entry", () => {
		assert.equal(
			baseConfig.entry.index,
			"/Users/barry/Documents/The Road To FullStack/advance/z-webpack//test/smoke/template/src/index/index.js"
		);
		assert.equal(
			baseConfig.entry.search,
			"/Users/barry/Documents/The Road To FullStack/advance/z-webpack//test/smoke/template/src/index/search.js"
		);
	});
});
