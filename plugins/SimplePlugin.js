module.exports = class SimplePlugin {
    constructor(options) {
        this.options = options
    }
    apply(compiler) {
        console.log('simple plugins executed')
        console.log('plugin options', this.options)
    }
}