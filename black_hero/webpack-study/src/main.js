//  main.js 是项目的 JS 文件的入口

//  1. 导入 jQuery

import $ from 'jQuery'  // ES6中 导入模块方式
//  相当于 
//  const $ = require('jquery');

import './css/index.css'
//  注意 webpack 默认只能打包处理 js 类型文件，否则得手动安装第三方 loader
//  1、如果要打包处理 css 文件， 需要 运行`cnpm i style-loader css-loader --save-dev
//  2、打开 webpack.config.js 这个配置文件，新增一个 配置节点 module 对象，它身上有 数组rules 属性，其中存放了所有第三方文件的匹配和处理规则
import './css/index.less'
// import './css/index.scss'
//  配置这个会有点问题 ，可以先从网上下载 然后 在运行安装 node-sass

$(function() {
  $('li:odd').css('backgroundColor', 'pink');
  $('li:even').css('backgroundColor', function() {
    return '#' + 'D97634';
  })
})


//  1、webpack 能够处理 JS 文件之间的相互依赖关系；
//  2、webpack 能够处理 JS 的兼容问题，把高级浏览器不识别的语法转换成为低级的可以识别的语法

//  命令格式：  
//  学习思维，要学东西，学习其能力， 学习如何使用其能力