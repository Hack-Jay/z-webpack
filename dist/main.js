(function (modules) {
  function require(fileName) {
    const fn = modules[fileName];

    const module = { exports: {} };

    fn(require, module, module.exports);

    return module.exports;
  }
  require("/Users/barry/Documents/advanced/z-webpack/src/index.js");
})({
  "/Users/barry/Documents/advanced/z-webpack/src/index.js": function (
    require,
    module,
    exports
  ) {
    "use strict";

    var _greet = require("./greet.js");

    console.log((0, _greet.gretting)());
  },
  undefined: function (require, module, exports) {
    undefined;
  },
});
