//  由于 webpack 是基于 Node 进行构建的， 所有 webpack 的配置文件中，任何合法的 Node 代码都是支持的
const path = require('path');

//  引入 html-webpack-plugin 
//  在内存中，根据指定页面模板，生成一个内存中的首页，同时把自动打包好的bundle注入到页面底部。
const htmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader 需要对插件进行配置；
// import vueLoaderPlugin from 'vue-loader/lib/plugin';

//  当以命令形式运行 webpack 和 webpack-dev-server 的时候，工具会发现我们没有提供打包的入口和出口文件。
//  他会检查项目根目录中的配置文件 ，并读取再打包
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'), // 入口文件
  output: { // 指定输出选项
    path: path.join(__dirname, './dist'), // 输入路径
    filename: 'bundle.js'  // 指定输出名字
  },
  plugins: [ // 所有webpack  插件的配置节点
   new htmlWebpackPlugin({
     template: path.join(__dirname, './src/index.html'),
     filename: 'index.html'
   }),
   new vueLoaderPlugin({})
  ],
  module: { // 配置所有第三方 loader 模块
    rules: [ //配置第三方规则
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(jpg|jpeg|png|gif|bmp)$/, use: 'url-loader?limit=119&name=[hash:8]-[name].[ext]'},// 处理图片的路径
      //  当 所传内容大于limit所限制内容就进行转码，小于或等于不转码
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, // 处理字体文件的配置项
      {test: /\.js$/, use: 'babel-loader', exclude:/node_modules/}, //配置babel 来转换高级的ES语法
      {test: /\.vue$/, use: 'vue-loader'}, // 配置 vue
    ]
  },
  resolve:{ //修改 vue 的路径
    alias: {
      "vue$": "vue/dist/vue.js"
    }
  }
}