

// 写法1：obj 接收整个对象
const obj = require('./02-封装个模板并导出');

console.log(obj);        // 输出结果是 02 文件导出的对象。

console.log(obj.getRandomNum(1,3));
console.log(obj.getRandomNum(1,3));
console.log(obj.getRandomNum(1,3));


console.log('-------------------------');

// 写法2：用解构赋值的语法，解构对象的成员并赋值给变常量
const { getRandomNum } = require('./02-封装个模板并导出');

console.log(getRandomNum);

console.log(getRandomNum(1,3));
console.log(getRandomNum(1,3));
console.log(getRandomNum(1,3));

debugger;
