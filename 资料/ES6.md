### ECMAScript 简介

ES 的全称是 ECMAScript ，它是由 ECMA 国际标准组织制定的一套 **脚本语言的标准化规范**

详细来说，ES 是由 ECMA 的第39号技术专家委员会（Technical Committee 39，简称 TC39）负责制定的，成员包括 Microsoft、Mozilla、Google等公司

简单来说，ECMAScript 是 JavaScript 语言的标准。但是 ECMAScript 还包括其它脚本语言的标准

**ES 是由 ECMA 组织制定的 JavaScript 语言标准**

#### ECMAScript 版本发布记录

- 1995年：ECMAScript 诞生
- 1997年：ECMAScript 标准确立。ECMA 发布 ECMA-262 标准，推出浏览器标准语言 ECMAScript 1.0
- 1999年：发布 ES3。与此同时 IE5 风靡一时
- 2009年：发布 ES5。例如：foreach、Object.keys、Object.create 和 json 标准
- 2011年：发布 ES5.1。成为 ISO 国际标准，从而推动所有浏览器都支持
- 2015年：发布 ES6，即 ECMAScript 2015（前者是按版本号区分，后者是按年份区分。ES 的后续版本，请尽量用年份来命名）
- 2016 年 6 月：发布 ECMAScript 7，即 ECMAScript 2016
- 2017 年 6 月：发布 ECMAScript 8，即 ECMAScript 2017
- 2018 年 6 月：发布 ECMAScript 9，即 ECMAScript 2018
- 2019 年 6 月：发布 ECMAScript 10，即 ECMAScript 2019
- 2020 年 6 月：发布 ECMAScript 11，即 ECMAScript 2020
- ......

- 此后，每年更新一版

#### ES6 简介

ES6 是新的 JS 语法标准。ES6 实际上是一个泛指，泛指 ES 2015 及后续的版本

很多人在做业务选型的时候，会倾向于选 jQuery。其实 jQuery 的语法是偏向于 ES3 的。而现在主流的框架 Vue.js 和 React.js 的默认语法，都是用的 ES6

[ES6 入门](https://es6.ruanyifeng.com/)

##### ES6 的改进

- ES6 之前的变量提升，会导致程序在运行时，有一些不可预测性。而 ES6 中通过 let、const 关键字，优化了这一点
- ES6 增加了很多功能。比如：常量、作用域、对象代理 、异步处理、类、继承等，这些在 ES5 中想要实现，比较复杂，但是 ES6 对它们进行了封装
- ES6 之前的语法过于松散，实现相同的功能，不同人可能会写出不同的代码

ES6 的目标是：让 JS 语言可以编写复杂的大型应用程序，成为企业级开发语言

### ES6 的环境配置（兼容 ES5）

掌握 ES6 之后，如果考虑 ES5 的兼容性，可以这样做：写 ES6 的 JS 代码，然后通过 `Babel` 将 ES6 转为 ES5 ，从而支持低端浏览器

#### 建立工程目录

1. 先建立一个空的工程目录 `ES6Demo`，并在目录下建立两个文件夹 `src`和 `dist`

   - `src` ：书写 ES6 代码，我们写的 js 程序都放在这里
   - `dist` ：利用 Babel 编译生成的 ES5 代码放在这里。在 HTML 页面，需要引入这里的 js 文件

2. 在 src 里面新建文件 `index.html`

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <title>ES6 工程</title>
       <script src="./dist/index.js"></script>
     </head>
     <body></body>
   </html>
   ```

   然后在新建文件 `src/index.js`

   ```javascript
   let a = "hello world";
   const b = "么么哒";
   
   console.log(a);
   console.log(b);
   ```

   尽量使用单引号，因为在压缩之后，程序执行会更快

#### 全局安装 Babel-cli

##### 安装 Node.js

[官网](https://nodejs.org/en/)下载并安装 Node.js ，集成了 npm 软件包管理器

##### 1. 初始化项目

在安装 Babel 之前，需要先用 `npm init` 初始化我们的项目。打开命令行工具，进入项目目录，输入命令：

```
npm init -y
```

上方带阿妹中，`-y` 代表全部默认，就不用一次次按回车了（以后可以在文件中手动修改）。命令执行完后，会在项目根目录下生成 `package.json` 文件

```json
{
  "name": "ES6Demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

##### 2. 全局安装 Babel-cli

在终端输入以下命令：

```
npm install -g babel-cli
```

如果安装比较慢的话，Mac 下可以使用 `cnpm` 进行安装 ，windows 下可以使用 `nrm` 切换到 taobao 的镜像

##### 3. 本地安装 babel-preset-es2015 和 babel-cli

在终端输入以下命令：

```
npm install --save-dev babel-preset-es2015 babel-cli
```

安装完以后，`package.json` 文件里面，增加了 `devDependencies`

##### 4. 新建 `.babelrc`

在根目录下新建文件 `.babelrc` ，输入如下内容：

```json
{
	"presets": [
		"es2015"
	],
	"plugins": []
}
```

##### 5. ES6 转为 ES5

- 在终端输入以下命令：

  ```
  babel src/index.js -o dist/index.js
  ```

- 或者，在文件 `package.json` 中修改键 `scripts` 的值：

  ```json
  "scripts": {
      "build": "babel src/index.js -o dist/index.js"
    },
  ```
  
  以后，即可通过下面命令进行转换：
  
  ```
  npm run build
  ```

### ES5

#### ES 的几个重要版本

- ES5 ：2009年发布
- ES6 ：2015年发布，也称为 ECMA2015
- ES7 ：2016年发布，也称为 ECMA2016（变化不大）

#### ES5 的严格模式

##### 概念

除了正常运行模式（混杂模式），ES5 添加了第二张运行模式：严格模式（strict mode）。这种模式使得 JavaScript 在更严格的语法条件下运行

##### 目的

- 消除 JavaScript 语法的一些不合理、不严谨之处，减少一些怪异行为
- 消除代码运行的一些不安全之处，为代码的安全运行保驾护航
- 为未来新版本的 JavaScript 做好铺垫

##### 使用”严格模式“

- 针对整个 JS 文件

  在 JS 文件的第一行，输入 `"use strict"` ，则整个脚本文件将以严格模式运行

- 针对单个函数

  将 `"use strict"` 放在函数体的第一行，则整个函数以严格模式运行

如果浏览器不支持，则这句话只解析为一条简单的语句，没有任何副作用

##### 语法和函数的改变

- 必须使用 `var` 声明变量
- 禁止将自定义函数中的 `this` 指向 `window`
- 创建 eval 作用域
- 对象不能有重名属性

##### 严格模式和普通模式的区别

- 全局变量的声明

  在正常模式中，如果一个变量没有声明就赋值，则模式是全局变量

  在严格模式中，禁止这种用法，全局变量必须显示声明

- 禁止 this 关键字指向全局对象

  ```javascript
  var fn = function() {
    console.log(this);
  }
  
  fn();
  ```

  在上方代码中，普通模式打印的是 `window` ，严格模式打印的是 `undefined`

- 创建 eval 作用域

- 禁止使用 `with` 语句

  因为 `with` 语句无法在编译时就确定，属性到底归属哪个对象

- 构造函数必须通过 new 实例化对象

  构造函数必须通过 new 实例化对象，否则报错。因为 this 为 undefined ，此时无法设置属性

  ```javascript
  var Cat = function(name) {
  	this.name = name;
  }
  
  Cat('张三');
  ```

  上方代码，在严格模式下运行，会报错

- 禁止函数内部遍历调用栈

  为了代码安全，禁止在函数内部遍历调用栈

- 严格模式下无法删除变量

- 属性相关

  - 普通模式下，对一个对象的只读属性赋值，不会报错，只会默默地失败。严格模式下，将报错
  - 严格模式下，对禁止扩展的对象添加新属性，会报错
  - 普通模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误
  - 普通模式下，如果函数有多个重命名的参数，可以用 `arguments[index]` 读取。严格模式下，多个重命名参数，属于语法错误

- 函数必须声明在顶层

  将来 JavaScript 的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数

- 新增保留字

  为了向将来 JavaScript 的新版本过渡，严格模式新增了一些保留字：implements、interface、let、package、private、protected、public、static、yield

#### ES5 中的扩展

##### JSON 对象

- js 对象（数组）--> json 对象（数组）

  ```
  JSON.stringify(obj/arr);
  ```

- json 对象（数组）--> js 对象（数组）

  ```
  JSON.parse(json);
  ```

上面这两个方法是 ES5 中提供的

##### Object 的扩展

ES5 给 Object 对象扩展了一些静态方法，常有的有2个

- 方法1

  ```
  Object.create(prototype, [descriptors]);
  ```

  以指定对象为原型，创建新的对象。第二个参数，可以为新的对象添加新的属性，并对新属性进行描述

  ```javascript
  var obj1 = {name: '张三', age: 18};
  var obj2 = {address: '成都'};
  
  obj2 = Object.create(obj1, {
    sex: {
      value: '男'，
      writable: false,
      configurable: true,
      enumerable: true
    }
  });
  
  console.log(obj2);
  ```

  上方代码中，通过第二个参数，给 `obj2` 新增了一个属性 `sex` ，并通过 `value` 来设置属性值

  - `value`：设置属性值
  - `writable`：标识当前属性值是否可修改。默认为 false，不可修改
  - `configurable`：标识当前属性是否可以被删除。默认为 false，不可删除
  - `enumerable`：标识当前属性是否能用 for in 枚举。 默认为 false，不可

- 方法2

  ```
  Object.defineProperties(object, descriptors);
  ```

  为指定的对象定义扩展多个属性

  ```javascript
  var obj = {
    firstName: '张',
    lastName: '三'
  };
  
  Object.defineProperties(obj, {
    fullName: {
      get: function() {
        return this.firstName + '-' + this.lastName;
      },
      set: function(data){ // 监听扩展属性，当扩展属性发生变化的时候自动调用，然后将变化的值作为实参注入到 set 函数
        var names = data.split('-');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  });
  
  console.log(obj.fullName);
  obj.firstName = '李';
  obj.lastName = '四';
  console.log(obj.fullName);
  obj.fullName = '王-五'；
  console.log(obj.fullName);
  ```

  - `get()`  用来获取当前属性值的一个回调函数
  - `set()`   修改当前属性值时触发的回调函数，并且实参即为修改后的值

###### Object 对象自带的方法

```
get 属性名(){}   // 用来得到当前属性值的回调函数

set 属性名(){}   // 用来监视当前属性值变化的回调函数
```

##### 数组的扩展

下面的方法，都是给数组的实例使用的

- 获取 value 在数组中的第一个下标

  ```
  下标 = Array.prototype.indexOf(value);
  ```

- 获取 value 在数组中的最后一个下标

  ```
  下标 = Array.prototype.lastIndexOf(value);
  ```

- 遍历数组

  ```
  Array.prototype.forEach(function(item, index){});
  ```

- 遍历数组返回一个新的数组，返回的是**加工之后**的新数组

  ```
  Array.prototype.map(function(item, index){});
  ```

- 遍历过滤出一个新的子数组，返回条件为true的值

  ```
  Array.prototype.filter(function(item, index){});
  ```

##### 函数的扩展

ES5 中新增了 `bind()` 函数，用来改变 this 的指向

```
函数 = Function.prototype.bind(obj);   // 将函数内的this绑定为obj, 并将函数返回
```

`bind()` 不会立即调用函数，而是将函数返回，因此后面需要再加 `()` 才是调用

### ES6

#### ES6 的变量声明

- `var`   定义 **全局变量**

##### ES6 中，新增的定义变量的关键字

- `let`   定义 **局部变量**。代替 var

  用 `let` 声明的变量，只在局部（块级作用域）起作用

- `const`   定义 **常量**。定义后，不可修改

  用 `const` 声明的变量，只在局部（块级作用域）起作用
  
  不可修改是指：
  
  - 如果声明的是基本数据类型，则值无法被修改
  - 如果声明的是引用数据类型，不可修改则指的是内存地址的引用不可修改，但是对象里的内容是可以修改的

##### let 和 const 的特点

- 不存在变量提升
- 禁止重复声明
- 只支持块级作用域
- 暂时性死区

##### var、let、const 的共同点

- 在全局作用域中定义时，可以在函数中使用
- 函数中声明的变量，只能在函数及其子函数中使用，外部无法使用

##### var、let、const 的区别

- var 声明的变量会挂载在 `window` 对象上，而 let 和 const 声明的变量不会
- var 声明的变量存在变量提升，而 let 和 const 声明的变量不存在变量提升
- var 声明不存在块级作用域，而 let 和 const 声明存在块级作用域
- 在同一作用域下，var 可以重复声明一个变量，而 let 和 const 不能重复声明变量
- var 没有暂时性死区，可以先使用再声明，而 let 和 const 必须先声明，再使用
- var 和 let  声明变量是可以不赋值，而 const 声明时必须赋值

#### 暂时性死区 DTZ

ES6 规定：使用 let、const 声明变量，会使区块形成封闭的作用域。若在声明之前使用变量，就会报错

也就是说，在使用 let、const 声明变量时，变量需要**先声明，再使用**（声明语句必须放在使用之前）。这在语法上称为“暂时性死区”（temporal dead zone，简称 TDZ）

TDZ 其实是一种保护机制，可以让我们养成良好的编程习惯

#### 解构赋值

##### 变量的解构赋值

###### 解构赋值的概念

解构赋值：ES6 允许我们，按照一一对应的方式，从数组或者对象中提取值，再将提取出来的值赋值给变量

解构：分解数据解构

赋值：给变量赋值

解构赋值在实际开发中，可以大量减少代码量，并且让程序结构更清晰

##### 数组的解构赋值

将数组中的值按照位置提取出来，然后赋值给变量

ES6 之前：

```javascript
var a = 1;
var b = 2;
var c = 3;

// 或者
var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
```

ES6 及其以后：

```javascript
{
  let [a, b, c] = [1, 2, 3];
}
```

###### 默认值

```javascript
{
  var [a = '123', b = '456'];
}
```

###### 右边的值为 `undefinde` 和 `null`

- `undefined` ：如果左边有默认值，则使用默认值
- `null` ：无论左边有没有默认值，都会把 `null` 赋值给左边

###### 未匹配到的情况

数组的解构赋值，是根据位置进行一一对应来赋值的。如果左边的变量数大于右边的值的数量，则多余的变量被赋值为 undefined

##### 对象的解构赋值

将对象值的值，按照属性匹配的方式提取出来，然后赋值给变量

ES6 之前：

```javascript
var obj = {
	name: "张三",
	age: 20
};
var name = obj.name;
var age = obj.age;
```

ES6 及其以后：

```javascript
{
	const obj = {
    name: "张三",
    age: 20
	};
  
  let {name, age} = obj;
}
```

###### 未匹配到的情况

对象的解构赋值，是根据属性名进行一一对应来赋值的。如果左边的数量大于右边的数量时，多余的变量会被赋值为 undefined

###### 给左边的变量自定义命名

```javascript
{
  const obj = {
    name: "张三",
    age: 20
	};
  let {name: myName, age: myAge} = obj;
}
```

###### 圆括号的使用

如果变量 name 在解构赋值之前就已经定义了，此时再去解构赋值，就会编译报错

```javascript
{
  let name = '李四';
  {name} = {name: '张三'};
  console.log(name);
}
```

要解决报错，就用 `()` 括起来

```javascript
{
  let name = '李四';
  ({name} = {name: '张三'});
  console.log(name);
}
```

##### 字符串的解构赋值

字符串也可以解构，这是因为，此时字符串被转换成了一个类似数组的对象

```javascript
{
  const [a, b, c] = 'hello';
}
```

#### ES6 在函数方面的扩展

- 箭头函数
- 参数默认值
- 参数解构赋值
- 剩余参数
- 扩展运算符
- this 绑定
- 尾调用

##### 箭头函数

###### 定义箭头函数的语法

```
(形参1, 形参2, ...) => {
	// 函数体
}
```

- 如果有且仅有1个形参，则 `()` 可以省略
- 如果函数体有且仅有1条语句，则 `{}` 可以省略。但前提是，这条语句必须是 return 语句（不写 return）

需要强调的是，箭头函数是没有函数名的。调用时可以将整个函数赋值给一个变量，通过变量来调用函数，或者直接使用箭头函数

```javascript
const fn = (a, b) => {
  return a + b;
}

console.log(fn(1, 2));   // 打印结果：3
```

###### 箭头函数的 this 的指向

ES6 之前普通函数中，this 指向的是调用函数的对象

而在 ES6 的箭头函数中，箭头函数本身不绑定 this ，this 指向的是**箭头函数定位位置的 this**

###### 形参的默认值

传统写法：

```javascript
function fu(name) {
  var p = name || '张三';
  console.log(name);
}
```

ES6 写法：

```javascript
function fu(name = '张三') {
  console.log(name);
}
```

注意：默认值的后面，不能再没有默认值的形参

##### 剩余参数

剩余参数，允许我们将不确定数量的剩余的参数，放到一个数组中

```javascript
function fn1(a, b, ...c) {
	console.log(a);
	console.log(b);
	console.log(c);   // 打印是一个数组：[3, 4, 5]
}

fn1(1, 2, 3, 4, 5);
```

###### 应用

- 参数求和

  ```javascript
  const sum (...args) => {
    let total = 0;
    args.forEach(item => total += item);
    return totla;
  }
  
  console.log(sum(1, 2, 3));
  ```

- 剩余参数和解构赋值的配合使用

  ```javascript
  const names = ['张三', '李四', '王五'];
  let [name1, ...nameN] = names;
  
  console.log(name1);   // '张三'
  console.log(nameN);   //['李四', '王五']
  ```

##### 扩展运算符

扩展运算符和剩余参数是相反的。扩展运算符，是将数组或者对象，拆分成逗号分隔的参数序列

```javascript
const arr = [1, 2, 3];
console.log(...arr);      // 打印结果： 1 2 3
```

###### 应用

- 数组赋值

  指向的是不同的内存地址

  ```javascript
  const arr1 = [1, 2, 3];
  let arr2 = [...arr1];
  ```

- 合并数组

  ```javascript
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  
  let arr = [...arr1, ...arr2];
  ```

- 将伪数组或可遍历对象，转为真正的数组

  ```javascript
  const myDivs = document.getElementsByTagName('div');
  const divArr = [...myDivs];
  ```

#### 字符串的扩展

- `includes(str);`   判断是否包含指定的字符串
- `startsWith(str);`   判断是否以指定字符串开头
- `endsWith(str);`   判断是否以指定字符串结尾
- `repeat(count);`   将字符串重复指定的次数

#### Number 的扩展

- 二进制与八进制数值表示法：二进制用 `0b` ，八进制用 `0o`
- `Number.isFinite(num);`   判断是否为有限大的数。比如 `Infinity` 这种无穷大的数，就返回 false
- `Number.isNaN(num);`   判断是否为 NaN
- `Number.isInteger(num);`   判断是否为整数
- `Number.parseInt(str);`   将字符串转为对应的数值
- `Math.trunc(num);`   去除小数部分

#### 数组的扩展

- `Array.from();`   将伪数组或可遍历对象转换为真数组
- `find();`   找出第一个满足指定条件的元素，并返回该元素
- `findIndex();`   找出第一个满足指定条件的元素，并返回该元素的索引

#### 对象的扩展

- `Object.is(dada1, data2);`   判断两个数据是否完全相等。底层通过字符串来判断
- `Object.assign();`   浅拷贝
- `_proto_` 属性

##### 内置对象的扩展

###### Set 数据结构

ES6 提供了新的数据结构 **Set** 。Set 类似于数组，但成员的值都是唯一的，不能出现重复

- 生成 Set 数据结构

  Set 本身就是一个构造函数，可通过 `new Set()` 生成一个 Set 实例

  ```javascript
  let set1 = new Set();
  ```

- 应用：数组去重

  ```javascript
  const arr = [1, 2, 3, 2, 4, 3, 1, 5];
  const set1 = new Set(arr);
  
  console.log(set1);
  ```


### ES6 中的异步

JavaScript 的执行环境是单线程

所谓单线程，是指 JS 引擎中负责解释和执行 JS 代码的线程只有一个，也就是说，一次只能完成一项任务，这个任务执行完后才能执行写一个任务，它会 阻塞 其它任务。这个线程可称为主线程

而异步模式，可以一起执行多个任务

#### 常见的异步模式有以下几种：

- 定时器
- 接口调用
- 事件函数

#### 多次异步调用

- 多次异步调用的结果，顺序可能不同步
- 异步调用的结果，如果存在依赖，则需要嵌套

在 ES5 中，当进行多层嵌套回调时，会导致代码层次过多，很难进行维护和二次开发；而且会导致**回调地狱**的问题。ES6 中的 Promise 就可以解决这两个问题

#### 接口调用

##### 接口调用的方式

- 原生 ajax
- 基于 jQuery 的 ajax
- Fetch
- Promise
- axios

##### Promise

ES6 中的 Promise 是异步编程的一种方案。从语法上讲，Promise 是一个对象，它可以获取异步操作的消息

Promise 对象，可以**用同步的表现形式来书写异步代码**

优点：

- 可以很好地解决回调地狱的问题（避免了层层嵌套的回调函数）
- 语法非常简洁、可读性强

###### Promise 的基本使用

- 使用 new 实例化一个 Promise 对象，然后向构造函数中传递一个参数，这个参数是一个函数，该函数用于处理异步任务
- 该函数的两个参数分别是 `resolve` 和 `reject` 方法
  - 如果异步操作成功，则用 `resolve` 方法将 Promise 对象的状态，从「未完成」改为「成功」
  - 如果异步操作失败，则用 `reject` 方法将 Promise 对象的状态，从「未完成」改为「失败」
- 通过 `promise.then()` 获取「正常」时的结果。这里的 `promise` 指的是 Promise 实例
- 通过  `promise.catch()` 获取「异常」时的结果

###### Promise 封装 Ajax 请求

- 写法1

  ```javascript
  const url = "";
  const request = require("request");
  
  function requestData(urlStr) {
    return Promise((resolve, reject) => {
      request(urlStr, function(response){
        if (response.retCode == 200){
          resolve(response);
        } else {
          reject("数据请求失败");
        }
      });
    });
  }
  
  requestData(url).then((success) => {
    // 成功的处理
  }, (failure) {
    // 异常的处理            
  });
  ```

- 写法2

  ```javascript
  const request = require('request');
  
  const requestData = function(urlStr){
    const promise = new Promise((resolve, reject) => {
        request(urlStr, function(response){
          if (response.retCode == 200){
            resolve(response);
          } else {
            reject("数据请求失败");
          }
      });
    });
    return promise;
  }
  
  requestData(url).then((success) => {
    // 成功的处理
  }).catch((failure) => {
    // 异常的处理
  });
  ```


###### Promise 对象的3个状态

- 初始化状态（等待状态）：pending
- 成功状态：fulfilled
- 失败状态：rejected

1. 当 `new Promise()` 执行之后，promise 对象的状态会被初始化为 `pednding` 。`new Promise()` 这行代码的括号里，有两个参数 `resolve` 和 `reject` ，这两个参数是两个方法

   - 如果请求成功，则执行 `resolve()` ，然后 promise 的状态会被自动修改为 `fulfilled`
   - 如果请求失败，则执行 `reject()` ，然后 promise 的状态会被自动修改为 `rejected`

   `resolve()` 和 `reject()` 可以传递参数到 `then()`

2. `promise.then()` 方法，括号里也有两个参数 `function1()` 和 `function2()`

   - 如果 promise 的状态为 `fulfilled` ，则执行 `function1()`
   - 如果 promise 的状态为 `rejected` ，则执行 `function2()`

###### 基于 Promise 处理多次 Ajax 请求（链式调用）

```javascript
function request1(){
  return new Promise((resolve, reject) => {
    
  });
}

function request2(){
  return new Promise((resolve, reject) => {
    
  });
}

function request3(){
  return new Promise((resolve, reject) => {
    
  });
}

request1.then((result1) => {
  // 接口1 的结果处理
  return request2();
}).then((result2) => {
  // 接口2 的结果处理
  return request3();
}).then((result3) => {
  // 接口3 的结果处理
});
```

`then()` 中 `return` 的返回值有两种情况：

- 情况1 ：返回 Promise 对象的实例。该实例会调用下一个 `then()`
- 情况2 ：然后普通值。该值会传递给下一个 `then()` 的形参

###### Promise 常用的实例方法

- `promise.then()`   获取异步任务的正常结果
- `promise.catch()`   获取异步任务的异常结果
- `promise.finaly()`   异步任务无论成功与否，都会执行

###### Promise 常用的对象方法

- `Promise.all()`   并发处理多个异步任务，所有任务都执行成功，才能得到结果
- `Promise.race()`   并发处理多个异步任务，只要有一个任务执行成功，就能得到结果

### ES7

ES7 中新增的异步操作

- `async`   返回值是一个 Promise 对象的实例
- `await`   获取异步任务的结果

```javascript
const requentData = function() {
  const promise = new Promise(resolve, reject){
    
  };
  return promise;
};

async function queryData(){
  const response = await requestData();
  return response;
}

queryData().then(data => {
  
});
```

### Symbol

ES5 中对象的属性名都是字符串，容易造成重名，污染环境

ES6 中引入了一种新的原始数据类型 Symbol ，表示独一无二的值。它是 JavaScript 语言的第七种数据类型

#### 特点

- Symbol 属性对应的值是唯一的，解决命名冲突问题
- Symbol 值不能与其它类型的数据进行计算，包括字符串拼接
- `for..in`、`for..of` 遍历时不会遍历 Symbol 属性

#### Symbol 的使用

##### 创建 Symbol 属性值

Symbol 是函数，但并不是构造函数

```javascript
let mySymbol = Symbol([tag]);

let obj = {
  name: "张三",
  age: 20
}

obj[mySymbol] = "我是张三";   // 不能使用 .
```

##### 定义常量

```javascript
const BASE_URL = Symbol('base_url');
```

#### 内置的 Symbol 值

- `Symbol.iterator`