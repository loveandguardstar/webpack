'use strict';

const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
    mode: 'development',
    // watch: true,
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name][chunkhash:8].js' // 占位符进行区分
    },
    module: {
        rules: [
            { 
                test: /\.js$/, use: 'babel-loader'
            },
            {
                test: /\.css$/, use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/, use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
                
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({ // plugins 数组
        //     template: './src/index.html'
        // })
        new webpack.HotModuleReplacementPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: `[name][contenthash:8].css`
        // })
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}