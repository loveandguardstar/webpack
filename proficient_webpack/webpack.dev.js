'use strict';


const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const setMPA = () => {
    const entry = {}
    const htmlWebpackPlugin = []

    const entryFiles = glob.sync(path.join(__dirname, '/src/*/index.js'))

    Object.keys(entryFiles)
        .map(index => {
            const entryFile = entryFiles[index]
            const match = entryFile.match(/src\/(.*)\/index\.js/)
            const pageName = match && match[1]

            entry[pageName] = entryFile
            htmlWebpackPlugin.push(
                new HtmlWebpackPlugin({ // plugins 数组
                    template: path.join(__dirname, `src/${pageName}/index.html`),
                    filename: `${pageName}.html`,
                    chunks: [pageName],
                    inject: true,
                    minify:{
                        html5:true,
                        collapseWhitespace:true,
                        preserveLineBreaks:false,
                        minifyCSS:true,
                        minifyJS:true,
                        removeComments:false
                    }
                })
            )
        })
    return {
        entry,
        htmlWebpackPlugin
    }
}

const { entry, htmlWebpackPlugin } = setMPA()

module.exports = {
    mode: 'development',
    // watch: true,
    // entry: './src/index.js',
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js' // 占位符进行区分
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
                test: /\.less$/, use: [
                    'style-loader', 'css-loader', 'less-loader'
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
    ].concat(htmlWebpackPlugin)
    ,
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: 'source-map'
}