// 按需导入 path 模块
const path = require('path');

// 导出打包配置
module.exports = {
    // 打包哪个文件
    entry: './src/index.js',					// 项目入口
    // 输出到哪里
    output: {
        // 输出时候的文件名
        filename: 'bundle.js',                  // 默认打包后的文件名 bundle.js
        // 输出的路径
        path: path.join(__dirname, 'dist')      // 默认打包后的文件目录 dist
    },
    // 注意：module 和 output 是同级书写的
    // module 模块加载器配置项
    module: {
        // 处理规则
        rules: [
            {
                // test 匹配 .css 结尾的文件
                test: /\.css$/,			// 匹配css扩展名文件
                // use 配置用什么加载器 处理 .css 结尾的文件
                use: [					// 配置loader加载器
                    'style-loader',		// 2. 把css代码写入到网页中
                    'css-loader'		// 1. 读取css的代码
                ]
            }
        ]
    }
};