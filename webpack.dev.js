const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        open: true,
        hot: true,
        port: 3000,
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    'postcss-loader',
                    "sass-loader",
                ],
            },
        ]
    }
});