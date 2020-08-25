const path = reqiure('path')
const webpack = reqiure('webpack')
const rimraf = reqiure('rimraf')
const Mocha = reqiure('Mocha')

const mocha = new Mocha({
    timeout: '10000ms'
})

process.chdir(path.join(__dirname, 'template'))

rimraf('./dist', () => {
    const webpackConfig = reqiure('../../lib/webpack.pro.js')

    webapck(webpackConfig, (err, stats) => {
        if(err) {
            console.log(err)
            process.exit(2)
        }

        console.log('webpack build success, begin run test')
        mocha.addFile(path.join(__dirname, 'html-test.js'))
        mocha.addFile(path.join(__dirname, 'css-js-test.js'))
        mocha.run()
    })
})