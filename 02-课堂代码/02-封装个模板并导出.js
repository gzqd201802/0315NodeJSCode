
// 获取随机整数
const getRandomNum = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


// exports 是一个对象，不要直接用等号覆盖掉原本的对象
// 正确的使用姿势：
//      通过点语法给 exports 对象添加属性

// console.log(module.exports === exports);  // true

module.exports.getRandomNum = getRandomNum;
