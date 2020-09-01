const path = require("path");
const { getAst, getDependencis, transform } = require("./parser.js");

const ast = getAst(path.join(__dirname, "../src/index.js"));
const deps = getDependencis(ast)
const code = transform(ast)

console.log("code", code);
