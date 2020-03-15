## node进阶

### 目标

> 什么是nodejs的模块化
>
> npm的使用
>
> 使用第三方模块
>
> node中的自定义模块
>
> 模块查找规则
>

### 程序开发中的模块及好处

- 什么是程序开发中的模块化：把一些功能类似的代码，封装到一个单独的文件中去，这些单独抽离出来的代码文件，就能够提供各种各样好用的功能；这种通过代码功能分割文件的方式，叫做程序中的模块化；
- 好处：保证了每个文件的功能（职能）单一；需要什么特定的功能，直接调用某一个特定的模块；对将来程序开发和维护都有好处！



### Node 中的模块的分类

> node由三部分组成：ECMAScript + 核心模块 + 第三方模块

#### 核心模块

- 什么是核心模块：官方发现一些功能模块使用非常频繁，所以官方把这些模块，编译成了二进制可执行文件，打包到了Node的安装包中；这些核心模块就已经随着安装Node时候，被安装到了本地；
- 如何使用核心模块
  使用require（‘核心模块的名称’）；

#### 第三方模块

- 什么是第三方模块：除了官方提供的好用的核心模块之外，我们程序员发现，还有一些使用也很频繁的代码和方法，一些牛逼的团体、个人、公司，开发出了好用的模块，通过NPM官网，托管出去，供其他人下载使用的这些模块；统称为第三方模块；
- 我们在开发的过程中，经常需要使用到各种各样的第三方模块

#### 用户模块

- 用户模块也称为用户自定义模块
- 什么是用户模块：由于业务的需要，程序员自己定义的完成某些特定功能的JS文件，统统称为用户模块！



### npm的使用

#### npm

> 通过npm我们可以下载项目中所需要的第三方模块
>
> 第三方模块俗称包，下载第三方模块也称为下包

- 全称：node package manager
- 官方推出的包管理工具
- 不需要额外安装，安装node之后自带
- 因为服务器不在国内，所以有时候安装特别慢，甚至无法成功

#### nrm

> 有时候，npm下载可能会很慢，甚至不成功，这个时候我们就可以通过nrm切换镜像源，提高下载包的成功率

1.安装：

```js
npm install -g nrm
```

2.查看当前及所有可用的源

```js
$ nrm ls
// * 代码当前源
* npm -----  https://registry.npmjs.org/
  yarn ----- https://registry.yarnpkg.com
  cnpm ----  http://r.cnpmjs.org/
  taobao --  https://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  skimdb -- https://skimdb.npmjs.com/registry
```

3.切换当前的源

```js
$ nrm use taobao  // 切换到 taobao

    Registry has been set to: https://registry.npm.taobao.org/
```



#### npm使用流程

- 初始化：在当前nodejs项目中执行终端命名: `npm init -y`
  - 作用：生成一个`pachage.json`文件，帮你记录当前项目安装了哪些第三方模块及对应的版本号
- 安装：在当前nodejs项目中执行终端命名: `npm install 模块名`
  - 安装之后，你的项目目录会新增两个文件`node_modules`与`package-lock.json`
    - node_modules:npm会自动将所有的第三方模块放入这个文件夹中。类似于前端的`lib文件夹`
    - package.json：npm会自动记录第三方模块的下载地址，下一次安装或更新的时候直接从这个地址下载，速度更快(只是影响以后更新速度，不影响开发)



### 第三方模块的使用

1. 先使用npm下载这个模块！【注意：在安装第三方模块的时候，安装的名字，就是你在require时候导入的名字】

2. 使用require导入这个第三方模块！

3. 通过官方文档，试着去使用这个第三方模块！

4. 注意：无论是核心模块、还是第三方模块，都是通过 require来引用这个模块的！

5. 一个简单的第三方模块使用的案例

   ```js
   // 这个文件演示一下如果使用第三方模块moment实现日期数据的格式化处理
   // 1. 引入moment（引入之前确保这个模块已经正确的下载哦）
   const moment = require('moment')
   
   // 2.定义一个日期，现在日期值是未格式化的日期数据
   let timeNow = new Date()
   
   // 3.调用moment实现对日期数据的格式化处理
   console.log(moment(timeNow).format('YYYY-MM-DD HH:mm:ss'))
   ```

   



### node中的自定义模块

> 程序员自己定义的JS文件，统统属于用户模块。

#### 定义用户模块

用户自己的添加能够实现某些功能的 js 文件，都可以认为是用户自定义模块

#### 导出用户模块中的成员

##### exports

> 它是一个对象，我们可以在这个对象上挂载你想暴露的成员
>
> 使用.语法在exports上挂载成员

1.定义用户模块

```js
// 我们所创建的js文件就可以认为是一个自定义模块
var obj = {
    name:'jack',
    age:20
}

function sayHi(){
    console.log('我的名字叫：'+obj.name+",我的年龄是："+obj.age)
}

// 在模块中有一个默认的对象exports,这个对象在在这个模块被引入的时候会自动的返回
// 我们暴露成员的方式就是在这个对象上挂载你想暴露的成员
exports.sayHi = sayHi
exports.aa = obj
```

2.使用用户模块

```js
// 如何使用用户自定义模块：
// 所有模块想使用都要先引入
// 如果引入一个模块，那么这个模块默认会返回一个对象
var umodule = require('你想引入的模块路径')
umodule.sayHi()
```



##### module.exports

> 它是一个对象，我们可以在这个对象上挂载你想暴露的成员
>
> 使用.语法在module.exports上挂载成员
>
> 也可以将module.exports重置为一个新的对象，对象中就包含你想暴露的成员

1.定义用户模块

```js
// 我们所创建的js文件就可以认为是一个自定义模块
var obj = {
    name:'jack',
    age:20
}

function sayHi(){
    console.log('我的名字叫：'+obj.name+",我的年龄是："+obj.age)
}

// 在模块中有一个默认的对象module.exports,这个对象在在这个模块被引入的时候会自动的返回
// 我们暴露成员的方式就是在这个对象上挂载你想暴露的成员

// module.exports.sayHi = sayHi
// module.exports.aa = obj
// 也可以直接使用你想暴露的成员覆盖module.exports
module.exports = sayHi
```

2.使用用户模块

```js
// 如何使用用户自定义模块：
// 所有模块想使用都要先引入
// 如果引入一个模块，那么这个模块默认会返回一个对象
var umodule = require('你想引入的模块路径')
umodule.sayHi()
```



##### global (了解)

> 相当于浏览器中的window,global是一个全局对象

- 全局变量污染
- 暴露的成员不明确：不知道成员是从哪个模块中暴露出去的
- 成员可能被覆盖
- 不建议使用

```js
// 定义模块
// 我们所创建的js文件就可以认为是一个自定义模块
const obj = {
    name:'jack',
    age:20
}
const sayHi = () => {
    console.log('我的名字叫：'+obj.name+",我的年龄是："+obj.age)
}
// 在全局的global上挂载成员
global.fn = sayHi
global.obj = obj
---------------------------------------------------------
// 使用模块
require('模块路径')
global.fn()
console.log(global.obj)
```



#### exports 和 module.exports 的区别

1. 通过 module.exports 可以使用 . 的形式追加属性，也可以使用 等号 直接赋值的形式导出成员；
2. exports 只能通过 . 的形式追加属性；不能使用 等号 直接赋值的形式！
3. **注意**： 在一个 module 中，最终向外暴露的成员，以 module.exports 指向的对象为准！
4. 在一个模块中，不要混合使用 `module.exports` 和 `exports`

#### 使用用户自定义模块

1.定义用户自定义模块

2.引入并使用用户自定义模块



### 模块查找(加载)规则

1. 优先从缓存中加载

2. 加载核心模块:优先从缓存中加载；如果缓存中没有的话，再去执行加载核心模块！

3. 用户自定义模块:优先从缓存中加载；如果缓存中没有的话，再去执行加载用户模块！

   ```tex
   用户模块的查找规则：
   如果不写后缀名，则先严格按照给定的文件名去查找模块并加载执行；
   index   ->  index.js  ->   index.json    ->  index.node
   ```

4. 第三方模块查找规则：

   1. 首先，查看项目根目录中有没有 `node_modules` 文件夹
   2. 查找 `node_modules` 文件夹中，有没有和第三方模块名称一致的文件夹
   3. 在模块对应的文件夹中，查找有没有 `package.json` 这个文件
   4. 在 `package.json` 文件中，查找有没有 `main` 属性
   5. 如果有 `main` 属性，并且 `main` 属性指向的路径存在，那么就尝试加载这个路径指定的文件！
   6. 如果 `package.json` 文件中，没有 `main` 属性，或者 `main` 属性指向的路径不存在，或者没有`package.json` 文件， 那么，Node尝试加载 模块根目录中 `index` 相关文件：`index.js` -> `index.json` -> `index.node`
   7. 如果在`node_modules`文件夹中，找不到对应的模块文件夹，或者在项目根目录中根本没有`node_modules`文件夹，则向上一层文件夹中去查找，查找规则同上！
   8. 如果上一层目录中也没有查找到，则再向上翻一层去查找，直到找到当前项目所在的盘符根目录为止！
   9. 如果找到当前盘符根目录还找不到，则报错：***cannot find module***







## package.json 描述文件



package.json 文件不能直接写注释，所以在 笔记中记录一下。

```js
{
  // 项目名称 - 不能写中文
  "name": "02-NodeProject",
  // 项目版本
  "version": "1.0.0",
  // 项目描述 - 这里可以写中文
  "description": "",
  // 项目入口文件
  "main": "index.js",
  // 项目的便捷脚本
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // 项目关键词 - 可用于 npm 网站搜索
  "keywords": [],
  // 作者信息
  "author": "",
  // 版权许可
  "license": "ISC",
  // 项目依赖包
  "dependencies": {
    // 包名称 : 包版本
    "moment": "^2.24.0"
  }
}
```











