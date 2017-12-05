var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        port: 9000,
        contentBase: path.join(__dirname, "public")
    },
    module: {
        rules: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'css-loader!sass-loader'
                
            )
        }]
    },
    plugins: [
            new ExtractTextPlugin({
            filename: '../css/bundle.css',
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    }
};