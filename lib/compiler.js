const fs = require("fs");
const path = require("path");
const { getAst, getDependencis, transform } = require("./parser.js");

class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }

  run() {
    const entryModule = this.buildModule(this.entry, true);
    this.modules.push(entryModule);
    this.modules.map((_module) => {
      _module.dependencies.map((dependency) => {
        this.modules.push(dependency);
      });
    });
    console.log("this.modules", this.modules);
    this.emitFiles();
  }

  buildModule(filename, isEntry) {
    let ast;
    // 是入口文件
    if (isEntry) {
      ast = getAst(filename);
    } else {
      let absoultePath = path.join(process.cwd(), "./src/", filename);
      ast = getAst(absoultePath);
    }

    return {
      filename,
      dependencies: getDependencis(ast),
      transformCode: transform(ast),
    };
  }
  emitFiles() {
    const outputPath = path.join(this.output.path, this.output.filename);
    let modules = "";
    this.modules.map((_module) => {
      modules += `'${_module.filename}': function (require, module, exports) { ${_module.transformCode} },`;
    });

    const bundle = `
        (function(modules) {
            function require(fileName) {
                const fn = modules[fileName];
    
                const module = { exports : {} };
    
                fn(require, module, module.exports);
    
                return module.exports;
            }
            require('${this.entry}');
        })({${modules}})
    `;

    fs.writeFileSync(outputPath, bundle, "utf-8");
  }
}

module.exports = Compiler;
