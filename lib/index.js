const Compiler = require('./compiler.js')

const options = require('../simpleWebpack.config.js')

new Compiler(options).run()