// var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
    entry: [
        './public/js/app.js',
        './public/css/app.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        port: 8600,
        contentBase: path.join(__dirname, "public")
    },
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                // 'style-loader', // backup loader when not building .css file
                'css-loader!sass-loader' // loaders to preprocess CSS
            )
        }]
    },
    plugins: [
            new ExtractTextPlugin({ // define where to save the file
            filename: '../css/bundle.css',
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    }
};