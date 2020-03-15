

// require()   功能
//      1. 根据路径找到某个 js 文件
//      2. 自动运行 js 文件里面的代码
//      3. 函数的返回就是 js 文件的 exports 对象
const obj = require('./04-exports对象');

console.log(obj.aa);
console.log(obj.bb);
console.log(obj.cc);


const { aa,bb,cc } = require('./04-exports对象');

console.log(aa);
console.log(bb);
console.log(cc);


debugger;