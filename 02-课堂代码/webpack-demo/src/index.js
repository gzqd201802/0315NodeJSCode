// 当前文件是 index.js，webpack.config.js 配置的打包入口是当前文件


// 在当前文件中导入 css 样式文件
import './style.css';

// 导入 less 文件
import './style.less';

// 导入 logo.jpg 图片并保存到变量名 logo 中
import logo from '../images/logo.jpg';

// 写入到html的内容
var element = document.createElement("div");
// 有三个 div 结构
//  1. 一个 div 上有 red 类名
//  2. 另一个 div 上有 blue 类名
//  3. 有一个图片标签，src 挖坑并填入 logo  
element.innerHTML =  `
    <div class="red">hello webpack</div>
    <div class="blue">hello webpack and less</div>
    <img src="${logo}" />
`;

// 把 div 写入到 body 中
document.body.appendChild(element);