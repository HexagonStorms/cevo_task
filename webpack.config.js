const path = require('path');

module.exports = {
    entry: './public/js/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        port: 9000,
        contentBase: path.join(__dirname, "public"),
    },
};