// 按需导入 path 模块
const path = require('path');

//  按需导入提取样式的webpack插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            // 处理 css 文件的规则配置
            // {
            //     // test 匹配 .css 结尾的文件
            //     test: /\.css$/,			// 匹配css扩展名文件
            //     // use 配置用什么加载器 处理 .css 结尾的文件
            //     use: [					// 配置loader加载器
            //         'style-loader',		// 2. 把css代码写入到网页中
            //         'css-loader'		// 1. 读取css的代码
            //     ]
            // },
            // 新添加一个处理 less 文件的规则配置
            // {
            //     test: /\.less$/,		// 匹配less扩展名文件
            //     use:[				
            //         'style-loader',		// 3. 把读取到的 css 代码写入到网页中
            //         'css-loader',		// 2. 读取 css 的代码
            //         'less-loader'		// 1. 解释编译 less 代码处理成 css 代码
            //     ]	
            // },

            // 换成插件的两个新规则
            // 用插件处理 .css 结尾的文件 
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({	// 提取css
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            // 用插件处理 .less 结尾的文件
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({	// 提取less
                    fallback: "style-loader",
                    use: ["css-loader", "less-loader"]
                })
            },
            // 配置处理文件的 loader
            {
                // 主要处理 png|svg|jpg|gif 结尾的文件
                test: /\.(png|svg|jpg|gif)$/,	// 匹配图片文件
                use: [
                    {
                        // 配置 loader
                        loader: "file-loader",              // 处理图片文件返回链接
                        // 配置选项
                        options: {
                            publicPath: "./images/",   		//  引入图片时会在路径前面加上该选项
                            // 输出到哪里
                            outputPath: "images"            //  输出到dist下的images目录
                        }
                    }
                ]
            }
        ]
    },

    // 需要启动的插件列表
    plugins: [
        // 启动插件
        new ExtractTextPlugin('style/style.css') // 提取到dist的style文件夹中
    ]
};