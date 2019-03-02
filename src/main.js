//  项目的入口js文件

//1.  导入jQuery
// import **** from ***是ES6 中导入模块的方式
// import $ from 'jquery'
const $ = require('jquery')

$(function() {
  $('li:odd').css('background', 'lightblue')
  $('li:even').css('background', function() {
    return '#' + 'D97634'
  })
})