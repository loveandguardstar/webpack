

const path = require('path');

//  导入在内存中生成 HTML 页面的插件,
//  只要是插件 都得放到 plugin 节点中去
//   这个插件的作用: 
//  1、 自动在内存中根据指定路径 生成一个 页面
//  2、 自动 把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: { // 这是配置dev-server的第二种形式， --open --port 3000 --contentBase src --hot 配置
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: true,
  },
  plugins: [ // 配置插件的节点
    new htmlWebpackPlugin({  // 创建一个在内存中 生成 HTML 页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据路径中的页面， 生成内存中的页面
      filename: 'index.html', // 指定生成页面的名称
    })
  ],
  module: { // 这个节点用于配置所有第三方模块加载器
    rules: [ //  所有第三方 模块的匹配规则
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] // 配置处理 .css 文件的第三方 loader 规则
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // 配置处理 .less 文件的第三方 loader 规则
      }
    ]
  }
}

//  学会使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
//  1、 运行  npm i webpack-dev-server -D 把这个项目安装到项目的本地开发依赖
//  2、 安装完毕后， 这个工具的用法，和webpack 命令用法完全一样
//  3、 由于我们在项目中（即本地安装） 所以无法在 powershell 终端中直接运行，
//     （ 只有那些 -g 的工具，才能在终端中正常执行）
//  4、 注意： webpack-dev-server 这个工具， 想要正常运行，本地项目中必须安装 webpack
//  5、 webpack-dev-server 帮我们打包生成的 bundle.js 文件没有存到物理磁盘里，而是直接托管到电脑的内存中，
//  6、 我们可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的方式托管到了咱们项目的根目录中，
//      看不见但是与dist  src node_modules平级
//  7、 把JS 文件也托管到