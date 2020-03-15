
const utils = {
    aa: 11,
    bb: 22
}

// exports.aa = utils.aa;
// exports.bb = utils.bb;

// // 下面这种写法不可以，直接重新赋值会覆盖掉导出的功能
// exports = utils;


debugger;
// console.log(module.exports === exports);    // true

// exports 其实是一个变量，保存了 module.exports 的内存地址
//   前面不能给 exports 直接赋值的原因就是他本身就是引用关系，重新赋值就把失去了原有的功能


// module.exports.aa = utils.aa;
// module.exports.bb = utils.bb;

// module 模块对象
//   module.exports 就是模块对象中用于导出的语法
module.exports = utils;