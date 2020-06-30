import { helloworld } from './helloworld.js'

document.write(helloworld())

let arr = ['234', 234]
arr.map(item => {
    console.log(item)
})
console.log(arr.find(element => element > 10))
let a = new Promise((resolve, reject) => {
    resolve(1231)
})
a.then(res => {
    console.log(res)
})