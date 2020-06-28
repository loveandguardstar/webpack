// 入口JS文件 

console.log('are you OK');

//  普通函数使用 vue 
//  1、 引入 vue 的包
//  2、 创建 vue 的容器 div 
//  3、 构造 vue 实例

//  webpack 中 使用 Vue 
//  使用 import 导入的 vue 只提供了 runtime-only 的方式，并没有提供 像网页中一样的使用方式。
import Vue from 'vue';
// import Vue from '../node_modules/vue/dist/vue'
// *** 回顾包的查找规则 ***
//(1)找项目根目录中有没有 node_modules 的文件夹
//(2)在node_modules 中根据包名，找相对应的 vue 文件夹
//(3)在 vue 文件夹中，找一个叫 package.json 的包配置文件
//(4)在 package.json文件中，查找一个main 属性【这个属性指定了这个包在加载时，的入口文件】

import login from './login.vue';
//  默认无法打包 .vue 文件，需要安装相关的 loader
//  cnpm i vue-loader vue-template-compiler -D

import m1, { myWife, good as good11 } from './test';
// let login = {
//   template: '<h1>66666</h1>'
// }
console.log(m1);
console.log(myWife + '----' + good11);

let vm = new Vue({
  el: "#app",
  data: {
    msg: '123'
  },
  components: {
    login
  },
  render: (createElements) => {
    return createElements(login)
  }
})