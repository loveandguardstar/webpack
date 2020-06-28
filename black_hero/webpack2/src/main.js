//  JS 的入口文件

console.log('what is this');
console.log('where is it');

import './css/index.css'
import './css/index.less'
//  注意： 如果需要通过路径的形式引用node_modules中相关的文件，可以直接省略，然后写包的名称跟路径
import 'bootstrap/dist/css/bootstrap.css'

class Person {
  static info = {name: 'zs', age: 30}
}
console.log(Person.info)