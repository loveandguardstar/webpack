// 引入 css
import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

const sumRes = sum(10, 20)
console.log('sumRes', sumRes)

// 引入第三方模块
import _ from 'lodash'
console.log(_.each)
// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }

console.log('window.ENV', ENV)
// 引入 img

function insertImgElem (imgFile) {
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}

import imgFile1 from './img/1.png'
insertImgElem(imgFile1)

import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)

// 引入动态数据
setTimeout(() => {
    // 联系一下 vue 的异步组件
    import('./dynamic-data.js').then(res => {
        console.log(res.default.message) // 注意这里的 default
    })
}, 1500)