const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'app': './app/assets/scripts/App.ts',
        'about': './app/assets/scripts/About.ts',
        'common': './app/assets/scripts/Common.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            },
            {
                test: /\.pug$/,
                use: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `./app/views/index.pug`,
            filename: `index.html`,
            chunks: ['common'],
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: `./app/views/homepage.pug`,
            filename: `homepage.html`,
            chunks: ['common', 'app'],
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: `./app/views/about.pug`,
            filename: `about.html`,
            chunks: ['common', 'about'],
            minify: false
        }),
        new ForkTsCheckerWebpackPlugin(),
        new CopyPlugin({
            patterns: [{from: 'app/assets', to: 'assets'}]
        })
    ]
};