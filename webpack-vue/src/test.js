

//  node中向外暴露成员的方式：
//  modules.export = {}

//  在ES6 中，也通过规范的方式，规定了 如何导入导出模块
//  导入 import 模块名称 from '模块标识符'     import '表示路径' (导入文件的方式)

//  使用 export default {} 和 export 向外暴露成员

export default {
  name: 'zs',
  age: 23
}

// 用 export default 暴露的成员可以用任意名字接收
// 注意： 用 export default 只能暴露一次
// 可以用另外一种 export 暴露，但是接收得在上一次暴露的后面用花括号接收。且名字不可更改,如果要改 用 as 的方式修改
export let myWife = '小心心'
export let good = 'hahah'

//  在node 中，使用 let 名称 = require ('模块标识符')
//  module.exports 和 exports 来暴露成员
