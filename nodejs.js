// __filename __dirname
// 文件/文件夹完整路径

// 链接module
// let module1 = require('./module')
// console.log(module1)
// module1.hi('kris')

// nodejs 上有现成的module
var cowsay = require('cowsay')

console.log(
  cowsay.say({
    text: "I'm lfh",
    e: 'oO',
    T: 'U ',
  }),
)

// or cowsay.think()
