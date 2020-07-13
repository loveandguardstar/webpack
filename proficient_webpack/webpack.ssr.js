'use strict';

const glob = require('glob')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const setMPA = () => {
    const entry = {}
    const htmlWebpackPlugin = []

    const entryFiles = glob.sync(path.join(__dirname, '/src/*/index-server.js'))

    Object.keys(entryFiles)
        .map(index => {
            const entryFile = entryFiles[index]
            const match = entryFile.match(/src\/(.*)\/index-server\.js/)
            const pageName = match && match[1]

            entry[pageName] = entryFile
            if (pageName) {
                htmlWebpackPlugin.push(
                    new HtmlWebpackPlugin({ // plugins 数组
                        template: path.join(__dirname, `src/${pageName}/index.html`),
                        filename: `${pageName}.html`,
                        chunks: ['vendors', pageName],
                        inject: true,
                        minify: {
                            html5: true,
                            collapseWhitespace: true,
                            preserveLineBreaks: false,
                            minifyCSS: true,
                            minifyJS: true,
                            removeComments: false
                        }
                    })
                )
            }
        })
    return {
        entry,
        htmlWebpackPlugin
    }
}

const { entry, htmlWebpackPlugin } = setMPA()

module.exports = {
    mode: 'none',
    // watch: true,
    entry: entry,
    // entry: {
    //     index: './src/index.js',
    //     search: './src/search.js'
    // },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-server.js', // 占位符进行区分
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: ['babel-loader']
            },
            {
                test: /\.css$/, use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                ]
            },
            {
                test: /\.less$/, use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         plugins: () => {
                    //             require('autoprefixer')({
                    //                 browsers: ["last 2 version", ">1%", "ios7"]
                    //             })
                    //         }
                    //     }
                    // },
                    'less-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75, // 对应 750px  -> 10rem
                            remPrecision: 8
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpe?g|png|gif)$/,
                use: [
                    {
                        loader: require.resolve('file-loader'),
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

        // new HtmlWebpackPlugin({ // plugins 数组
        //     template: path.join(__dirname, 'src/search.html'),
        //     filename: 'search.html',
        //     chunks: ['search'],
        //     inject: true,
        //     minify:{
        //         html5:true,
        //         collapseWhitespace:true,
        //         preserveLineBreaks:false,
        //         minifyCSS:true,
        //         minifyJS:true,
        //         removeComments:false
        //     }
        // }),
        new CleanWebpackPlugin(),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'react',
                    entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
                    global: 'React',
                },
                {
                    module: 'react-dom',
                    entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
                    global: 'ReactDOM',
                },
            ],
        }),
        new FriendlyErrorsWebpackPlugin()
    ].concat(htmlWebpackPlugin),
    // cacheGroups: {
    //     commons: {
    //         test: /(react|react-dom)/,
    //         name: 'vendors',
    //         chunks: 'all'
    //     }
    // }
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                },
            }
        }
    }
    ,
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: 'inline-source-map'
}