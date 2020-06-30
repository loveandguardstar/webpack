'use strict';

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'production',
    // watch: true,
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js' // 占位符进行区分
    },
    module: {
        rules: [
            { 
                test: /\.js$/, use: 'babel-loader'
            },
            {
                test: /\.css$/, use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/, use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                require('autoprefixer')({
                                    browsers: ['last 2 version', '>1%', 'ios 7']
                                })
                            }
                        }
                    }
                ]
            },
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // limit: 10240
                            name: '[name]_[hash:8].[ext]'
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
        new MiniCssExtractPlugin({
            filename: `[name][contenthash:8].css`
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}