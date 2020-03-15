// 当前文件是 index.js，webpack.config.js 配置的打包入口是当前文件


// 在当前文件中导入 css 样式文件
import './style.css';

// 写入到html的内容
var element = document.createElement("div");
element.innerHTML =  `<div class="red">hello webpack</div>`;

document.body.appendChild(element);