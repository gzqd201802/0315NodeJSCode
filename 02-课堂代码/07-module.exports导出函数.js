

// module.exports = (data) => {
//     console.log('导出的函数被运行了，接收到的数据是', data);
// };

const aa = 11;
const bb = 22;
const fn = ()=>{

}


module.exports = {
    aa,
    bb,
    fn
}

// module.exports 不要重新赋值多次，会出现覆盖。
