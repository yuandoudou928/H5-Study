### MVVM 模式

![](https://camo.githubusercontent.com/6e97c50a36095918c819119d8cb402e214d3581e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303432305f323135302e706e67)

- Model：负责数据存储
- View：负责页面展示
- View Model：负责业务逻辑处理（比如Ajax请求等），对数据进行加工后交给视图展示

参考：https://www.cnblogs.com/clwydjgs/p/10796763.html

---

### 框架

#### 框架和库的区别

##### 框架

框架是一套完整的解决方案

对项目的**侵入性**较大，项目如果需要更换框架，则需要重新架构整个项目。但是优点也很明显：功能完善、提供了一整套的解决方案

##### 库

只是提供某一个小功能

对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求

#### 前端框架

##### Vue 和 React 的相同点

- 利用虚拟DOM实现快速渲染
- 轻量级
- 响应式组件
- 支持服务器端渲染
- 易于集成路由工具、打包工具以及状态管理工具

##### 虚拟DOM

传统的web开发，是利用 jQuery 操作 DOM ，这是非常耗资源的

在 JavaScript 的内存里构建类似于 DOM 的对象，去拼装数据，拼装完整后，把数据整体解析，一次性插入到 html 里去。这就形成了虚拟 DOM

Vue1.0 没有虚拟 DOM，Vue2.0 改成了基于虚拟 DOM

---

### Vue 框架

- [中文官网](https://cn.vuejs.org/)
- [vuejs官方论坛](https://forum.vuejs.org/)
- GitHub地址：https://github.com/vuejs/vue
- Vue1.0 在线文档：http://v1-cn.vuejs.org/guide/
- Vue2.x 在线文档：https://cn.vuejs.org/v2/guide/
- Vue1下载地址：http://v1-cn.vuejs.org/js/vue.js
- Vue2下载地址：https://cdn.jsdelivr.net/npm/vue/

#### Vue 介绍

Vue 本身并不是一个框架，Vue 结合周边生态构成一个灵活的、渐进式的框架

##### Vue 的特点

- 模板渲染：基于 html 的模板语法，学习成本低。
- 响应式的更新机制：数据改变之后，视图会自动刷新
- 渐进式框架
- 组件化/模块化
- 轻量：开启 gzip 压缩后，可以达到 20kb 大小

#### Vue 环境的搭建

*首先安装 NVM、Node.js*

##### 常见插件

- Webpack ：代码模块化构建打包工具
- Gulp ：基于流的自动化构建工具
- Babel ：使用最新的规范来编写 js
- Vue ：构建数据驱动的 Web 界面的渐进式框架
- Express ：基于 Node.js 平台，快速、开放、极简的 Web 开发框架

##### 引用 Vue.js 文件

- 方式一

  使用 CDN 的方式进行引用

  ```javascript
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  ```

- 方式二

  下载 vue.js 文件，然后放到工程里面，最后引用

  ```javascript
  <script src="libs/vue.js"></script>
  ```

- 方式三

  通过 NPM 安装

  1. 下载最新稳定版

     ```
     npm install vue
     ```

  2. 然后代码中引用

     ```javascript
     import Vue from "vue";
     ```

---

### 利用 vue-cli 新建项目

[vue-cli](https://cli.vuejs.org/) 是 Vue 提供一个官方命令行工具，可用于快速搭建大型单页应用。该工具为现代化的前端开发工作流提供了开箱即用的构建配置。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目

#### 构建空项目

##### 安装 vue-cli

```
npm install -g @vue/cli
```

##### 初始化项目

```
vue create my-vue-app
```

用「方向键」选择 `Default ([Vue 2] babel, eslint)` ，然后「回车」

##### 本地运行项目

```
cd my-vue-app

npm run serve
```

浏览器访问：`http://localhost:8080/`

备注：我们在 GitHub 上下载的任何 Vue 有关的项目，第一步都是要首先执行 `npm install`，安装依赖到 `mode_modules` ，然后再运行。我们发给同事的工程文件，建议不要包含 `node_modules`

#### 构建一个非 Simple 项目

##### 初始化项目

```
vue create vue-app
```

选择 `Manually select feature` 后，出现 复选项，使用「空格」选择

◉ Choose Vue version   // 选择 vue 版本

 ◉ Babel   // ES6 转 ES5

 ◯ TypeScript   // JavaScript 超级

 ◯ Progressive Web App (PWA) Support   // 渐进式 Web 应用

 ◉ Router   // 路由

 ◯ Vuex   // 状态管理

 ◯ CSS Pre-processors   // CSS 预处理

 ◉ Linter / Formatter   // 规范类型

 ◯ Unit Testing   // 单元测试

 ◯ E2E Testing   // 测试

##### 项目结构介绍

- buid ：打包配置的文件夹
- config ：webpack对应的配置
- src ：开发项目的源码
  - App.vue ：入口组件。`.vue`文件都是组件
  - main.js ：项目入口文件
- static ：存放静态资源
- `.babelrc` ：解析 ES6 的配置文件
- `.editorcofnig` ：编辑器的配置
- `.postcssrc.js` ：html 添加前缀的配置
- `index.html` ：单页面的入口。通过 webpack 打包后，会把 src 源码进行编译，插入到这个 html 里面来
- `package.json` ：项目的基础配置，包含版本号、脚本命令、项目依赖库、开发依赖库、引擎等

#### 图片的 Base64 编码

默认是10k 以下，建议都通过 base64 编码。在配置文件 `webpack.base.conf.js` 中进行修改：

```
{
	test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
	loader: 'url-loader',
	options: {
	limit: 10000,
	name: utils.assetsPath('img/[name].[hash:7].[ext]')
}
```

---

### Vue 的系统指令

#### 插值表达式

数据绑定最常见的形式就是使用 “Mustache” 语法（双大括号）的文本插值：

```
{{ key }}
```

示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<body>
<div id="div1">
    {{ name ? "0" : "1" }}
</div>
</body>

<script>
    var myVue = new Vue({
        el: "#div1",
        data: {
            name: false
        }
    });
</script>
</html>
```

问题：

插值表达式闪烁的问题：当网络环境很差的时候，一开始会直接显示 `{{ name ? "0" : "1" }}`

#### v-cloak

保持和元素实例的关联，直到结束编译后自动消失

解决插值表达式闪烁的问题：

```html
<style>
	[v-cloak] {
		display: none;
	}
</style>

<div id="div1" v-cloak>
    {{ name ? "0" : "1" }}
</div>
```

#### v-text

将一个变量的值，渲染到指定的元素中

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-text</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="div1">
      <span v-text="name"></span>
    </div>
  </body>

  <script>
    new Vue({
      el: "#div1",
      data: {
        name: "我是t-text",
      },
    });
  </script>
</html>
```

##### 插值表达式与 v-text 的区别

- v-text 没有闪烁的问题，因为它是放在属性里的
- 插值表达式只会替换自己的这个占位符，并不会把整个元素的内容清空。v-text 会**覆盖**元素中原本的内容

#### v-html

将一个变量的值，渲染到指定的元素中，如果有 html 代码，会解析

**注意：**使用 v-html 渲染数据可能会非常危险，因为它很容易导致 XSS（跨站脚本）攻击，使用的时候请谨慎，能够使用 {{}} 或者 v-text 实现的不要使用 v-html

#### v-bind

用于动态绑定属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-bind</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="myLink">
      <a v-bind="{href:path}">{{myText}}</a>
    </div>
  </body>

  <script>
    new Vue({
      el: "#myLink",
      data: {
        myText: "点击",
        path: "http://www.baidu.com",
      },
    });
  </script>
</html>
```

#### v-on

事件绑定

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-on</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="div1">
      <!-- <button v-on:click="change">{{text}}</button> -->
      <!-- 简写 -->
      <button @click="change">{{text}}</button>
    </div>
  </body>

  <script>
    new Vue({
      el: "#div1",
      data: {
        text: "按钮",
      },
      methods: {
        change: function () {
          this.text = "点击后的按钮";
        },
      },
    });
  </script>
</html>
```

##### v-on 的常用事件

- v-on:click
- v-on:keydown
- v-on:keyup
- v-on:mousedown
- v-on:mouseover
- v-on:submit

##### v-on 的事件修饰符

- `.stop`   阻止冒泡。本质是调用 `event.stopPropagation()`
- `.prevent`   阻止默认事件。本质是调用 `event.preventDefault()`
- `.capture`   添加事件监听器时，使用捕获的方式（也就是说，事件采用捕获的方式，而不是采用冒泡的方式）
- `.self`   只有当事件在该元素本身（比如不是子元素）触发时，才会触发回调
- `.once`   事件只触发一次
- `.{keyCode | keyAlias}`   只当事件是从侦听器绑定的元素本身触发时，才触发回调
- `.native`   监听组件根元素的原生事件

#### v-model

双向数据绑定。只能用于表单元素，或者自定义组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-model</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <form action="#">
        <input type="text" id="username" v-model="myData.username" />
        <input type="text" id="pwd" v-model="myData.pwd" />
        <input type="submit" @click="btn" value="注册" />
      </form>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        myData: { username: "张三", pwd: "123" },
      },
      methods: {
        btn: function () {
          alert(`${this.myData.username}的密码是${this.myData.pwd}`);
        },
      },
    });
  </script>
</html>
```

#### vue 中通过属性绑定给元素设置 class 类样式

- 方式1

  直接传递一个数组

  ```html
  <style>
    .my-red {
      color: red;
    }
    .my-blue {
      color: blue;
    }
    .my-font {
      font-weight: 100px;
    }
  </style>
  
  <body>
    <div id="box">
      <h1 :class="['my-red', 'my-font']">vue 中给元素设置类样式</h1>
    </div>
  </body>
  
  <script>
  	new Vue({
      el: "#box"
    });
  </script>
  ```

- 方式2

  在数组中，使用三元表达式

  ```html
  <style>
    .my-red {
      color: red;
    }
    .my-blue {
      color: blue;
    }
    .my-font {
      font-weight: 100px;
    }
  </style>
  
  <body>
    <div id="box">
      <h1 :class="[flag ? 'my-red' : 'my-blue']">vue 中给元素设置类样式</h1>
    </div>
  </body>
  
  <script>
  	new Vue({
      el: "#box",
      data: {
        flag: true
      }
    });
  </script>
  ```

- 方式3

  在数组中，使用对象

  ```html
  <style>
    .my-red {
      color: red;
    }
    .my-blue {
      color: blue;
    }
    .my-font {
      font-weight: 100px;
    }
  </style>
  
  <body>
    <div id="box">
      <h1 :class="[{'my-red' : flag}]">vue 中给元素设置类样式</h1>
    </div>
  </body>
  
  <script>
  	new Vue({
      el: "#box",
      data: {
        flag: true
      }
    });
  </script>
  ```

- 方式4

  直接使用对象

  ```html
  <style>
    .my-red {
      color: red;
    }
    .my-blue {
      color: blue;
    }
    .my-font {
      font-weight: 100px;
    }
  </style>
  
  <body>
    <div id="box">
      <h1 :class="myStyle">vue 中给元素设置类样式</h1>
    </div>
  </body>
  
  <script>
  	new Vue({
      el: "#box",
      data: {
        // 使用 my-red 样式，不使用 my-blue 样式
        myStyle: {my-red: true, my-blue: false}
      }
    });
  </script>
  ```

#### vue 中通过属性绑定为元素设置 style 行内样式

- 写法1

  直接在元素上通过 `:style` 的形式，书写样式对象

  ```html
  <h1 :style="{color: "red"}">
    vue 中通过属性绑定为元素设置 style 行内样式
  </h1>
  ```

- 写法2

  将样式对象，定义到 `data` 中，然后引用到 `:style` 中

  ```html
  <body>
    <div id="box">
      <h1 :style="myStyle">vue 中给元素设置类样式</h1>
    </div>
  </body>
  
  <script>
    new Vue({
      el: "#box",
      data: {
        myStyle: {color: 'red'}
      }
    });
  </script>
  ```

- 写法3

  在 `:style` 中通过数组，引用多个 `data` 上的样式对象

  ```html
  <body>
    <div id="box">
      <h1 :style="[myStyle0, myStyle1]">vue 中给元素设置类样式</h1>
    </div>
  </body>
  
  <script>
    new Vue({
      el: "#box",
      data: {
        myStyle0: {color: 'red'},
        myStyle1: {font-size: '20px'}
      }
    });
  </script>
  ```

#### v-for

根据数组中的元素，遍历制定模版内容，然后生成内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-for</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        list: [1, 2, 3],
      },
    });
  </script>
</html>
```

##### 普通数组的遍历

```html
<body>
  <div id="box">
    <ul>
    	<li v-for="(item, index) in arr">{{item}}</li>
    </ul>
  </div>
</body>

<script>
	new Vue({
    el: "#box",
    data: {
      arr: [1, 2, 3,4 ,5]
    }
  });
</script>
```

`(item, index) in arr` 说明：

- `item`   代表数组中的元素
- `index`   该元素对应的下标
- `arr`   数组

##### 对象数组的遍历

```html
<body>
  <div id="box">
    <ul>
    	<li v-for="(item, index) in dataList">{{item.name}}</li>
    </ul>
  </div>
</body>

<script>
	new Vue({
    el: "#box",
    data: {
      dataList: [
        {name: "张三"},
        {name: "李四"}
      ]
    }
  });
</script>
```

##### 对象的遍历

```html
<body>
  <div id="box">
    <ul>
      <li v-for="(value, key) in zs">{{item}}</li>
    	<li v-for="(value, key, index) in zs">{{item}}</li>
    </ul>
  </div>
</body>

<script>
	new Vue({
    el: "#box",
    data: {
      zs: {
        name: "张三",
        age: 20
      }
    }
  });
</script>
```

##### 遍历数字

```html
<body>
  <div id="box">
    <ul>
    	<li v-for="num in 10">{{num}}</li>
    </ul>
  </div>
</body>
```

##### v-for 中的 key

在 Vue 2.2.0+ 版本，当在**组件中**使用 v-for 时，`:key` 属性是必须要加上的

`:key` 的类型只能是：string 或者 number

```html
<body>
  <div id="box">
    <p v-for="item in list" :key="item.id">
      {{item}}
    </p>
  </div>
</body>

<script>
	new Vue({
    el: "#box",
    data: {
      list: [
        {id: 0, name: "张三"},
        {id: 1, name: "李四"}
      ]
    }
  });
</script>
```

#### v-if

根据表达式的值的真假条件，来决定是否渲染元素，如果为 false 则不渲染（达到隐藏元素的目的），如果为 true 则渲染。

在切换时，元素和它的数据绑定会被销毁并重建

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-if</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <button @click="btn">{{btnText}}</button>
      <div v-if="isShow">我是盒子</div>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        btnText: "点击我",
        isShow: true,
      },
      methods: {
        btn: function () {
          this.isShow = !this.isShow;
        },
      },
    });
  </script>
</html>
```

#### v-else

取 `v-if` 的反值

#### v-show

根据表达式的真假条件，来切换元素的 `display` 属性。如果为 false，则在元素上添加 `display:none` 属性；否则移除 `display:none` 属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>v-show</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <button @click="btn">{{btnText}}</button>
      <div v-show="isShow">我是盒子</div>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        btnText: "点击我",
        isShow: true,
      },
      methods: {
        btn: function () {
          this.isShow = !this.isShow;
        },
      },
    });
  </script>
</html>
```

##### v-if 与 v-show 的区别

- v-if ：每次都会重新添加/删除 DOM 元素
- v-show ：每次不会重新进行 DOM 的添加/删除操作，只是在这个元素上添加/移除 `style="display:none"` 属性，表示节点的显示和隐藏

- v-if ：有较高的切换性能消耗。这个很好理解，毕竟每次都要进行 DOM 的添加／删除操作。
- v-show ：**有较高的初始渲染消耗**。也就是说，即使一开始 `v-show="false"` ，该节点也会被创建，只是隐藏起来了。而 `v-if="false"` 的节点，根本就不会被创建

总结：

- 如果元素涉及到频繁的切换，最好不要使用 v-if, 而是推荐使用 v-show
- 如果元素可能永远也不会被显示出来被用户看到，则推荐使用 v-if

---

### Vue 中的列表功能

1. 列表功能

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Vu中的列表功能</title>
       <script src="../lib/vue.js"></script>
       <style type="text/css">
         .table {
           width: 800px;
           margin: 20px auto;
           border-collapse: collapse;
         }
   
         .table th {
           background: #0094ff;
           color: white;
           border: 1px solid black;
           padding: 5px;
         }
   
         .table tr td {
           text-align: center;
           font-size: 16px;
           padding: 5px;
           border: 1px solid black;
         }
       </style>
     </head>
   
     <body>
       <div id="box">
         <table class="table">
           <th>编号</th>
           <th>名称</th>
           <th>创建时间</th>
           <th>操作</th>
           <tr v-for="item in list">
             <td>{{item.id}}</td>
             <td>{{item.name}}</td>
             <td>{{item.ctime}}</td>
             <td><a href="#">删除</a></td>
           </tr>
         </table>
       </div>
     </body>
   
     <script>
       new Vue({
         el: "#box",
         data: {
           list: [
             { id: 1, name: "奔驰", ctime: new Date() },
             { id: 2, name: "大众", ctime: new Date() },
           ],
         },
       });
     </script>
   </html>
   ```

2. 无数据显示时，增加提示

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Vu中的列表功能</title>
       <script src="../lib/vue.js"></script>
       <style type="text/css">
         .table {
           width: 800px;
           margin: 20px auto;
           border-collapse: collapse;
         }
   
         .table th {
           background: #0094ff;
           color: white;
           border: 1px solid black;
           padding: 5px;
         }
   
         .table tr td {
           text-align: center;
           font-size: 16px;
           padding: 5px;
           border: 1px solid black;
         }
       </style>
     </head>
   
     <body>
       <div id="box">
         <table class="table">
           <th>编号</th>
           <th>名称</th>
           <th>创建时间</th>
           <th>操作</th>
           <tr v-show="list.length == 0">
             <td colspan="4">{{noData}}</td>
           </tr>
           <tr v-for="item in list">
             <td>{{item.id}}</td>
             <td>{{item.name}}</td>
             <td>{{item.ctime}}</td>
             <td><a href="#">删除</a></td>
           </tr>
         </table>
       </div>
     </body>
   
     <script>
       new Vue({
         el: "#box",
         data: {
           noData: "暂无无数据",
           list: [
             { id: 1, name: "奔驰", ctime: new Date() },
             { id: 2, name: "大众", ctime: new Date() },
           ],
         },
       });
     </script>
   </html>
   ```

3. 添加数据

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Vu中的列表功能</title>
       <script src="../lib/vue.js"></script>
       <style type="text/css">
         .form {
           width: 800px;
           margin: 20px auto;
         }
   
         .table {
           width: 800px;
           margin: 20px auto;
           border-collapse: collapse;
         }
   
         .table th {
           background: #0094ff;
           color: white;
           border: 1px solid black;
           padding: 5px;
         }
   
         .table tr td {
           text-align: center;
           font-size: 16px;
           padding: 5px;
           border: 1px solid black;
         }
       </style>
     </head>
   
     <body>
       <div id="box">
         <div class="form">
           名称：<input type="text" v-model="formData.name" />
           <button v-on:click="addData">添加</button>
         </div>
   
         <table class="table">
           <th>编号</th>
           <th>名称</th>
           <th>创建时间</th>
           <th>操作</th>
           <tr v-show="list.length == 0">
             <td colspan="4">{{noData}}</td>
           </tr>
           <tr v-for="item in list">
             <td>{{item.id}}</td>
             <td>{{item.name}}</td>
             <td>{{item.ctime}}</td>
             <td><a href="#">删除</a></td>
           </tr>
         </table>
       </div>
     </body>
   
     <script>
       new Vue({
         el: "#box",
         data: {
           noData: "暂无无数据",
           list: [
             { id: 1, name: "奔驰", ctime: new Date() },
             { id: 2, name: "大众", ctime: new Date() },
           ],
           formData: { name: "" },
         },
         methods: {
           addData: function () {
             var newData = {
               id: this.list.length + 1,
               name: this.formData.name,
               ctime: new Date(),
             };
             this.list.push(newData);
   
             this.formData.id = 0;
             this.formData.name = "";
           },
         },
       });
     </script>
   </html>
   ```

4. 删除数据

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Vu中的列表功能</title>
       <script src="../lib/vue.js"></script>
       <style type="text/css">
         .form {
           width: 800px;
           margin: 20px auto;
         }
   
         .table {
           width: 800px;
           margin: 20px auto;
           border-collapse: collapse;
         }
   
         .table th {
           background: #0094ff;
           color: white;
           border: 1px solid black;
           padding: 5px;
         }
   
         .table tr td {
           text-align: center;
           font-size: 16px;
           padding: 5px;
           border: 1px solid black;
         }
       </style>
     </head>
   
     <body>
       <div id="box">
         <div class="form">
           名称：<input type="text" v-model="formData.name" />
           <button v-on:click="addData">添加</button>
         </div>
   
         <table class="table">
           <th>编号</th>
           <th>名称</th>
           <th>创建时间</th>
           <th>操作</th>
           <tr v-show="list.length == 0">
             <td colspan="4">{{noData}}</td>
           </tr>
           <tr v-for="item in list">
             <td>{{item.id}}</td>
             <td>{{item.name}}</td>
             <td>{{item.ctime}}</td>
             <td @click="delData(item.id)"><a href="#">删除</a></td>
           </tr>
         </table>
       </div>
     </body>
   
     <script>
       new Vue({
         el: "#box",
         data: {
           noData: "暂无无数据",
           list: [
             { id: 1, name: "奔驰", ctime: new Date() },
             { id: 2, name: "大众", ctime: new Date() },
           ],
           formData: { name: "" },
         },
         methods: {
           addData: function () {
             var newData = {
               id: this.list.length + 1,
               name: this.formData.name,
               ctime: new Date(),
             };
             this.list.push(newData);
   
             this.formData.id = 0;
             this.formData.name = "";
           },
           delData: function (id) {
             if (!confirm("确定删除吗？")) {
               return;
             }
   
             var index = this.list.findIndex(function (item) {
               return item.id == id;
             });
   
             this.list.splice(index, 1);
           },
         },
       });
     </script>
   </html>
   ```

5. 按条件筛选数据

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Vu中的列表功能</title>
       <script src="../lib/vue.js"></script>
       <style type="text/css">
         .form {
           width: 800px;
           margin: 20px auto;
         }
   
         .search {
           width: 800px;
           margin: 20px auto;
         }
   
         .table {
           width: 800px;
           margin: 20px auto;
           border-collapse: collapse;
         }
   
         .table th {
           background: #0094ff;
           color: white;
           border: 1px solid black;
           padding: 5px;
         }
   
         .table tr td {
           text-align: center;
           font-size: 16px;
           padding: 5px;
           border: 1px solid black;
         }
       </style>
     </head>
   
     <body>
       <div id="box">
         <div class="form">
           名称：<input type="text" v-model="formData.name" />
           <button v-on:click="addData">添加</button>
         </div>
   
         <div class="search">搜索：<input type="text" v-model="keywords" /></div>
   
         <table class="table">
           <th>编号</th>
           <th>名称</th>
           <th>创建时间</th>
           <th>操作</th>
           <tr v-show="search(keywords) == 0">
             <td colspan="4">{{noData}}</td>
           </tr>
           <tr v-for="item in search(keywords)">
             <td>{{item.id}}</td>
             <td>{{item.name}}</td>
             <td>{{item.ctime}}</td>
             <td @click="delData(item.id)"><a href="#">删除</a></td>
           </tr>
         </table>
       </div>
     </body>
   
     <script>
       new Vue({
         el: "#box",
         data: {
           noData: "暂无无数据",
           list: [
             { id: 1, name: "奔驰", ctime: new Date() },
             { id: 2, name: "大众", ctime: new Date() },
           ],
           formData: { name: "" },
           keywords: "",
         },
         methods: {
           addData: function () {
             var newData = {
               id: this.list.length + 1,
               name: this.formData.name,
               ctime: new Date(),
             };
             this.list.push(newData);
   
             this.formData.id = 0;
             this.formData.name = "";
           },
           delData: function (id) {
             if (!confirm("确定删除吗？")) {
               return;
             }
   
             var index = this.list.findIndex(function (item) {
               return item.id == id;
             });
   
             this.list.splice(index, 1);
           },
           search(keywords) {
             // 方法1:forEach + indexOf()
             //   var newList = [];
             //   this.list.forEach((item) => {
             //     if (item.name.indexOf(keywords) != -1) {
             //       newList.push(item);
             //     }
             //   });
             //   return newList;
   
             // 方法2:filter + includes()
             return this.list.filter((item) => {
               if (item.name.includes(keywords)) {
                 return item;
               }
             });
           },
         },
       });
     </script>
   </html>
   ```


---

### 自定义过滤器

#### 过滤器的概念

Vue.js 允许我们自定义过滤器，用于一些常见的文本格式化

过滤器可以在两个地方使用：插值表达式、v-bind表达式

过滤器应该被添加到 JavaScript 表达式的尾部，由“管道“符指示

#### Vue 1.x 中的系统过滤器

Vue1.x 版本提供了一系列的固定逻辑来使程序员更加容易的实现这些功能，这些过滤器称之为系统过滤器

系统过滤器是 Vue1.0 中存在的，在 Vue2.0 中已经删除了

#### 自定义全局过滤器

文档地址：https://v1-cn.vuejs.org/guide/custom-filter.html

##### 全局过滤器的基本使用

使用全局方法 `Vue.filter()` 注册一个自定义过滤器，它接收两个参数：**过滤器 ID** 和**过滤器函数**。过滤器函数以值为参数，返回转换后的值

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>全局过滤器的基本使用</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <!-- 1. 在插值表达式中使用 -->
      <p>{{msg | msgFormat}}</p>
    </div>
  </body>

  <script>
    Vue.filter("msgFormat", function (myMsg) {
      return myMsg.replace(/单纯/g, "邪恶");
    });

    new Vue({
      el: "#box",
      data: {
        msg:
          "曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的人",
      },
    });
  </script>
</html>
```

##### 给过滤器增加参数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>全局过滤器的基本使用</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <!-- 1. 在插值表达式中使用 -->
      <!-- "邪恶" 传递给：arg2，"并且帅气" 传递给：arg3 -->
      <p>{{msg | msgFormat("邪恶", "并且帅气")}}</p>
    </div>
  </body>

  <script>
    Vue.filter("msgFormat", function (myMsg, arg2, arg3) {
      return myMsg.replace(/单纯/g, arg2 + arg3);
    });

    new Vue({
      el: "#box",
      data: {
        msg:
          "曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的人",
      },
    });
  </script>
</html>
```

##### 同时使用多个过滤器

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>全局过滤器的基本使用</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <!-- 1. 在插值表达式中使用 -->
      <!-- "邪恶" 传递给：arg2，"并且帅气" 传递给：arg3 -->
      <p>{{msg | msgFormat("邪恶", "并且帅气") | msgFormat1}}</p>
    </div>
  </body>

  <script>
    Vue.filter("msgFormat", function (myMsg, arg2, arg3) {
      return myMsg.replace(/单纯/g, arg2 + arg3);
    });

    Vue.filter("msgFormat1", function (msg) {
      return msg + "。哈哈！";
    });

    new Vue({
      el: "#box",
      data: {
        msg:
          "曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的人",
      },
    });
  </script>
</html>
```

##### 时间格式化

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>时间格式化</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">{{time | dataFormat}}</div>
  </body>

  <script>
    Vue.filter("dataFormat", function (dataStr, pattern = "") {
      // 根据时间字符串，得到时间对象
      var dt = new Date(dataStr);

      // 获取具体的：年、月、日
      var y = dt.getFullYear();
      var m = dt.getMonth() + 1;
      var d = dt.getDate();

      if (pattern.toLowerCase() === "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;
      } else {
        var hh = dt.getHours().toString().padStart(2, "0");
        var mm = dt.getMinutes().toString().padStart(2, "0");
        var ss = dt.getSeconds().toString().padStart(2, "0");
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
      }
    });

    new Vue({
      el: "#box",
      data: {
        time: new Date(),
      },
    });
  </script>
</html>
```

#### 自定义私有过滤器

在某一个 Vue 对象内部定义的过滤器，称为私有过滤器。私有过滤器只能在当前 Vue 对象 el 指定的监管区域起作用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义私有过滤器</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">{{time | dataFormat}}</div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        time: new Date(),
      },
      filters: {
        dataFormat: function (dataStr, pattern = "") {
          // 根据时间字符串，得到时间对象
          var dt = new Date(dataStr);

          // 获取具体的：年、月、日
          var y = dt.getFullYear();
          var m = dt.getMonth() + 1;
          var d = dt.getDate();

          if (pattern.toLowerCase() === "yyyy-mm-dd") {
            return `${y}-${m}-${d}`;
          } else {
            var hh = dt.getHours().toString().padStart(2, "0");
            var mm = dt.getMinutes().toString().padStart(2, "0");
            var ss = dt.getSeconds().toString().padStart(2, "0");
            return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
          }
        },
      },
    });
  </script>
</html>
```

过滤器调用的时候，采用的是就近原则，如果私有过滤器和全局过滤器名称一致了，这时候 优先调用私有过滤器

---

### Axios

axios 是在 Vue 中专门用来发送 ajax 请求的。

但是，axios 并不依赖于 Vue.js 库，而是基于 promise 的

---

### 按键修饰符

Vue 允许为 `v-on` 在监听键盘事件时，添加按键修饰符

#### Vue 内置的按键修饰符

Vue 1.0.8+ 版本：支持单字母的按键别名

- `.enter`
- `.tab`
- `.delete`   捕获「删除」和「退格」键
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

#### 自定义按键修饰符

[JavaScript 里面的键盘事件对应的键码](http://www.cnblogs.com/wuhua1/p/6686237.html)

##### 使用键码

```html
	<input type="text" v-model="formData.name" @keyup.113="addData">
```

- `@keyup`   任何按键抬起时的监听
- `113`   「F2」的键码

##### 自定义全局按键修饰符

```javascript
Vue.config.keyCodes.f2 = 113;
```

上方代码的书写位置，与自定义全局过滤器的位置，是并列的

---

### 自定义指令

参考：https://v1-cn.vuejs.org/guide/custom-directive.html

Vue.js 也允许注册自定义指令。自定义指令提供一种机制将数据的变化映射为 DOM 行为

#### 自定义全局指令

可以用 `Vue.directive(id, definition)` 方法注册一个全局自定义指令，它接收两个参数**指令 ID** 与**定义对象**

定义对象可以提供几个钩子函数（都是可选的）：

- **bind**：只调用一次，在指令第一次绑定到元素上时调用。这时元素还没有插入到 DOM 中去
- **inserted**：只调用一次，当元素插入到 DOM 中的时候
- **update**： 在 `bind` 之后立即以初始值为参数第一次调用，之后每当绑定值变化时调用，参数为新值与旧值
- **unbind**：只调用一次，在指令从元素上解绑时调用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义全局指令</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <!-- 'red' 传递到 bind() 的第二个参数 -->
      <!-- 'red' 这里写的是字符串常量，如果去掉单引号，则表示变量 -->
      <input type="text" id="search" v-model="name" v-color="'red'" />
    </div>
  </body>

  <script>
    // Vue.directive("color", {
    //   bind: function (el, binding) {
    //     console.log(binding.name); // color
    //     console.log(binding.value); // red
    //     console.log(binding.expression); // 'red'

    //     el.style.color = binding.value;
    //   },
    //   inserted: function (el) {
    //     // 自动获取焦点
    //     el.focus();
    //   },
    // });

    // 如果只关心 bind() 和 update()，而不关心其它钩子，则可以简写：
    Vue.directive("color", function (el, binding) {
      //注意，这个function等同于把代码写到了 bind 和 update 中去
      el.style.color = binding.value;
    });

    new Vue({
      el: "#box",
      data: {
        name: "张三",
      },
    });
  </script>
</html>
```

#### 自定义私有指令

在某一个 Vue 对象内部自定义的指令称之为私有指令。这种指令只有在当前 Vue 对象的 el 指定的监管区域有用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义私有指令</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <p v-color>{{str}}</p>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        str: "自定义私有指令",
      },
      directives: {
        color: {
          bind: function (el) {
            el.style.color = "red";
          },
        },
      },
    });
  </script>
</html>
```

---

### Vue 实例的生命周期

- [Vue 实例的生命周期](https://cn.vuejs.org/v2/guide/instance.html#实例生命周期)：从 Vue 实例创建、运行、到销毁期间，总是伴随着各种各样的事件，这些事件，统称为生命周期
- [生命周期钩子](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)：就是生命周期事件的别名而已

生命周期钩子 = 生命周期函数 = 生命周期事件

#### 创建期间的生命周期函数

- **beforeCreate**：实例刚在内存中被创建出来，此时，还没有初始化好 data 和 methods 属性

- **created**：实例已经在内存中创建完成，此时 data 和 methods 已经创建完成，此时还没有开始 编译模板

  我们可以在这里进行 Ajax 请求

- **beforeMount**：此时已经完成了模板的编译，但是还没有挂载到页面中

- **mounted**：此时，已经将编译好的模板，挂载到了页面指定的容器中显示

  mounted 之后，表示真实 DOM 渲染完了，可以操作 DOM 了

#### 运行期间的生命周期函数

- **beforeUpdate**：状态更新之前执行此函数， 此时 data 中的状态值是最新的，但是界面上显示的 数据还是旧的，因为此时还没有开始重新渲染 DOM 节点
- **updated**：实例更新完毕之后调用此函数，此时 data 中的状态值 和 界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了

数据发生变化时，会触发这两个方法。不过，我们一般用 watch 来做

#### 销毁期间的生命周期函数

- **beforeDestroy**：实例销毁之前调用。在这一步，实例仍然完全可用

  可以在 beforeDestroy 里**清除定时器、或清除事件绑定**

- **destroyed**：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue 的生命周期</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <input type="button" value="修改Msg" @click="changeMsg" />
      <input type="text" v-model="msg" id="showMsg" />
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        msg: "生命周期",
      },
      methods: {
        changeMsg: function () {
          this.msg = "修改后的生命周期";
        },
      },
      beforeCreate: function () {
        console.log(this.msg);
      },
      created: function () {
        console.log(this.msg);
      },
      beforeMount: function () {
        console.log(this.msg);
      },
      mounted: function () {
        console.log(this.msg);
      },
      beforeUpdate() {
        console.log(document.getElementById("showMsg").value);
      },
      updated: function () {
        console.log(document.getElementById("showMsg").value);
      },
      beforeDestroy: function () {
        console.log("销毁前");
      },
      destroyed: function () {
        console.log("完成销毁");
      },
    });
  </script>
</html>
```

![](https://camo.githubusercontent.com/35d63eb1f11390dc47f709e86ab7806821d48c9c/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303631315f323133302e706e67)

---

### Vue 中的 Ajax 请求

#### vue-resource

GitHub 地址：https://github.com/pagekit/vue-resource

##### vue-resource 发送 Ajax 请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vue-resource</title>
    <script src="../lib/vue.js"></script>
    <script src="../lib/vue-resource.js"></script>
  </head>

  <body>
    <div id="box">
      <button value="get请求" @click="getRequest"></button>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      created: function () {
        this.getRequest();
        this.postRequest();
      },
      methods: {
        getRequest: function () {
          // get 请求
          this.$http
            .get(
              "https://www.easy-mock.com/mock/5acda34663b2d05900908b65/example/query"
            )
            .then(
              function (result) {
                console.log(result.body);
              },
              function (error) {
                console.log(error);
              }
            );
        },
        postRequest: function () {
          const url =
            "https://www.easy-mock.com/mock/5acda34663b2d05900908b65/example/upload";
          const postData = { name: "张三" }; // 设置提交的内容类型为：普通表单数据格式
          const options = { emulateJSON: true };
          this.$http.post(url, postData, options).then(
            function (result) {
              console.log(result);
            },
            function (error) {
              console.log(error);
            }
          );
        },
        jsonpRequest: function () {
          // url 后面不需要跟 callback=fn这 个参数了，jsonp 方法会自动加上
          const url = "http://vuecms.ittun.com/api/getlunbo?id=1";
          this.$http.jsonp(url).then(
            function (result) {},
            function (error) {
              console.log(error);
            }
          );
        },
      },
    });
  </script>
</html>
```

##### JSONP 的实现原理

由于浏览器的安全性限制，默认不允许 Ajax 发起跨域（协议不同、域名不同、端口号不同）的请求。浏览器认为这种访问不安全

JSONP 的实现原理：通过动态创建 `<script>` 标签的形式，用 `<script>` 标签的 `src` 属性，代表 api 接口的 url，因为script标签不存在跨域限制，这种数据获取方式，称作 JSONP（注意：根据JSONP的实现原理，知晓 JSONP 只支持 Get 请求）

具体实现过程：

1. 先在客户端定义一个回调方法，预定义对数据的操作
2. 再把这个回调方法的名称，通过 URL 传参的形式，提交到服务器的 api 接口
3. 服务器 api 接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，拼接出一个调用这个方法的字符串，发送给客户端去解析执行
4. 客户端拿到服务器返回的字符串之后，当作 Script 脚本去解析执行，这样就能够拿到JSONP的数据了

#### axios

官网：http://www.axios-js.com/

#### 通过 Vue 全局配置 API 接口的 URL 地址

API 接口的 URL 地址包括：绝对路径 + 相对路径

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue 配置 baseurl</title>
    <script src="../lib/vue.js"></script>
    <script src="../lib/vue-resource.js"></script>
  </head>

  <body>
    <div id="box"></div>
  </body>

  <script>
    // 如果配置了请求接口的 根域名，则每次单独发起 http 请求时，请求的 url 应以相对路径开头，前面不能带“/”，否则不会启用根路径做拼接
    Vue.http.options.root =
      "https://www.easy-mock.com/mock/5acda34663b2d05900908b65/example/";

    //全局启用 emulateJSON 选项
    Vue.http.options.emulateJSON = true;

    new Vue({
      el: "#box",
      created: function () {
        this.getRequest();
      },
      methods: {
        getRequest: function () {
          // get 请求
          this.$http.get("query").then(
            function (result) {
              console.log(result.body);
            },
            function (error) {
              console.log(error);
            }
          );
        },
      },
    });
  </script>
</html>
```

---

### Vue 动画

动画的作用：提高用户的体验，帮助用户更好的理解页面中的功能

#### 使用过渡类名实现动画

![](https://camo.githubusercontent.com/3b7b3db5c1151d0aeab2a778ad7cb4186f993056/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303631365f313535352e706e67)

动画进入：

- **v-enter**：动画进入之前的**初始**状态
- **v-enter-to**：动画进入之后的**结束**状态
- **v-enter-active**：动画进入的时间段

动画离开：

- **v-leave**：动画离开之前的**初始**状态
- **v-leave-to**：动画离开之后的**结束**状态
- **v-leave-active**：动画离开的时间段

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue 动画</title>
    <script src="../lib/vue.js"></script>
    <style>
      .myAnimation-enter,
      .myAnimation-leave-to {
        opacity: 0;
        /* v-enter：一开始让 DOM 元素靠右 80px 的位置 */
        transform: translateX(80px);
      }

      .myAnimation-enter-active,
      .myAnimation-leave-active {
        /* 淡入、淡出：all 表示所有的属性；持续时间为3秒；过渡状态：ease */
        transition: all 3s ease;
      }
    </style>
  </head>

  <body>
    <div id="box">
      <input type="button" value="切换" @click="flag=!flag" />
      <transition name="myAnimation">
        <h3 v-if="flag">"这是一个H3"</h3>
      </transition>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        flag: true,
      },
    });
  </script>
</html>
```

#### 使用第三方库 animate.css 实现动画

官网：https://animate.style/

中文网站：http://www.animate.net.cn/

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>animate.css</title>
    <script src="../lib/vue.js"></script>
    <link rel="stylesheet" href="../lib/animate.css" />
  </head>

  <body>
    <div id="box">
      <input type="button" value="切换" @click="flag=!flag" />
      <!-- 
        :duration="{ enter: 1000, leave: 300 }"   分别设置入场、出场的持续时间
       -->
      <transition
        enter-active-class="animated bounceIn"
        leave-active-class="animated bounceOut"
        :duration="{ enter: 1000, leave: 300 }"
      >
        <h3 v-if="flag">"我是一个H3"</h3>
      </transition>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        flag: true,
      },
    });
  </script>
</html>
```

#### 钩子函数实现半场动画

只有出场动画、没有离场动画，这种就是属于半场动画

##### 动画的钩子函数

```html
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled" >
  <!-- DOM元素 -->
</transition>
```

##### 使用钩子函数模拟小球的半场动画

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>半场动画</title>
    <script src="../lib/vue.js"></script>
    <style>
      .ball {
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 50%;
      }
    </style>
  </head>

  <body>
    <div id="box">
      <input type="button" value="加入购物车" @click="flag = !flag" />
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div class="ball" v-show="flag"></div>
      </transition>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        flag: false,
      },
      methods: {
        // 动画钩子函数的第一个参数：el ，表示 要执行动画的那个 DOM 元素，是个原生的 JS DOM 对象
        beforeEnter(el) {
          // 设置小球开始动画前的 起始位置
          el.style.transform = "translate(0, 0)";
        },
        // enter() 函数里，函数的第二个参数要加上 done，函数体的最后一行要写 done()
        // Vue官方文档的解释是这样：当只用 JavaScript 过渡的时候，在enter和leave中必须使用done进行回调。否则，它们将被同步调用，过渡会立即完成
        enter(el, done) {
          // 这句没有实际作用，但是如果不写，就没有动画效果。可以认为是在强制刷新动画
          el.offsetWidth;

          el.style.transform = "translate(150px, 300px)";
          el.style.transition = "all 1s ease";

          // done() 其实就是 afterEnter() 函数，即 done 是 afterEnter 函数的引用
          done();
        },
        afterEnter(el) {
          this.flag = !this.flag;
        },
      },
    });
  </script>
</html>
```

#### 使用 transition-group 元素实现列表动画

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用 transition-group 元素实现列表动画</title>
    <script src="../lib/vue.js"></script>
    <style>
      li {
        border: 1px dashed #999;
        margin: 5px;
        line-height: 35px;
        padding-left: 5px;
        font-size: 12px;
        width: 100%;
      }

      /* 鼠标悬停：出现背景色 */
      li:hover {
        background-color: hotpink;
        /* 背景色，有淡入的动画 */
        transition: all 0.8s ease;
      }

      .v-enter,
      .v-leave-to {
        opacity: 0;
        /* 沿 Y 轴移动 */
        transform: translateY(80px);
      }

      .v-enter-active,
      .v-leave-active {
        transition: all 0.6s ease;
      }

      /* 删除 item 后，下面的 item 有：渐渐地飘上来的效果 */
      .v-move {
        transition: all 0.6s ease;
      }
      .v-leave-active {
        position: absolute;
      }
    </style>
  </head>

  <body>
    <div id="box">
      <div>
        <label> Name: <input type="text" v-model="name" /> </label>
        <input type="button" value="添加" @click="add" />
      </div>
      <!-- appear：可以让 <transition-group> 包裹的所有 DOM 元素在刷新时，有淡入效果 -->
      <!-- 如果没有这句，<transition-group> 包裹的元素，会被默认套上一层 <span>
          tag="ul"：可以通过 tag 属性给 <transition-group> 包谷的元素套上一层 <ul>
      -->
      <transition-group appear tag="ul">
        <li v-for="(item, i) in list" :key="item.id" @click="del(i)">
          {{item.id}} --- {{item.name}}
        </li>
      </transition-group>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        name: "",
        list: [
          { id: 1, name: "赵高" },
          { id: 2, name: "秦桧" },
          { id: 3, name: "严嵩" },
          { id: 4, name: "魏忠贤" },
        ],
      },
      methods: {
        add() {
          this.list.push({ id: this.list.length + 1, name: this.name });
          this.name = "";
        },
        del(i) {
          this.list.splice(i, 1);
        },
      },
    });
  </script>
</html>
```

---

### 自定义组件

**组件**：组件的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我们需要什么样的功能，就可以去调用对应的组件即可

模块化与组件的区别：

- 模块化：是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一
- 组件化：是从 UI 界面的角度进行划分的；前端的组件化，方便 UI 组件的重用

#### 自定义全局组件

##### Vue.extend()

使用 `Vue.extend()` 方法定义组件，使用 `Vue.component()` 方法注册组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.extend()</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <registered></registered>
    </div>
  </body>

  <script>
    // 1.定义组件
    var myReg = Vue.extend({
      // 只能有一个根元素
      template: "<div><h2>我是自定义 “注册” 组件</h2></div>",
    });

    // 2.注册组件
    // 参数：标签名 自定义的组件名
    Vue.component("registered", myReg);

    new Vue({
      el: "#box",
    });
  </script>
</html>
```

##### Vue.component()

`Vue.component()` 方法定义、注册组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue.component()</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <registered></registered>
    </div>
  </body>

  <script>
    Vue.component("registered", {
      // 一定要用一个大的根元素（例如<div>）包裹起来
      template: "<div><h2>我是自定义 “注册” 组件</h2></div>",
    });

    new Vue({
      el: "#box",
    });
  </script>
</html>
```

##### 在 `<template>` 中自定义组件（荐）

在 `<template>` 标签中定义组件，使用 `Vue.component()` 方法注册组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>在 <template> 中自定义组件</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <!-- 定义组件 -->
    <template id="myReg">
      <div>
        <h2>我是自定义 “注册” 组件</h2>
      </div>
    </template>

    <div id="box">
      <registered></registered>
    </div>
  </body>

  <script>
    Vue.component("registered", {
      template: "#myReg",
    });

    new Vue({
      el: "#box",
    });
  </script>
</html>
```

#### 自定义私有组件

在一个 Vue 实例的内部定义私有组件，这样做的时候，只有当前这个 Vue 实例才可以使用这个组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义私有组件</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <template id="myReg">
      <div>
        <h2>我是自定义 “注册” 组件</h2>
      </div>
    </template>

    <div id="box">
      <registered></registered>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      components: {
        registered: {
          template: "#myReg",
        },
      },
    });
  </script>
</html>
```

#### 自定义组件的动态展示和点击事件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>自定义组件的动态展示和点击事件</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <template id="myReg">
      <div>
        <h2 @click="reg"><a href="">{{myText}}</a></h2>
      </div>
    </template>

    <div id="box">
      <registered></registered>
      <registered></registered>
    </div>
  </body>

  <script>
    Vue.component("registered", {
      template: "#myReg",
      // 在为组件添加数据时，data 不再是对象了，而是 function，而且要通过 return 的形式进行返回；否则，页面上是无法看到效果的
      data: function () {
        return {
          myText: "我是自定义 “注册” 组件",
        };
      },
      methods: {
        reg: function () {
          alert("注册成功");
        },
      },
    });

    new Vue({
      el: "#box",
    });
  </script>
</html>
```

---

### 组件的切换

#### 使用 `v-if` 和 `v-else` 实现两个组件间的切换

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>使用 v-if 和 v-else 实现两个组件间的切换</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="app">
      <!-- ".prevent" 可以阻止超链接的默认事件 -->
      <a href="" @click.prevent="flag=true">登录</a>
      <a href="" @click.prevent="flag=false">注册</a>

      <!-- 登录组件/注册组件，同时只显示一个 -->
      <login v-if="flag"></login>
      <register v-else="flag"></register>
    </div>
  </body>

  <script>
    Vue.component("login", {
      template: "<h3>登录组件</h3>",
    });

    Vue.component("register", {
      template: "<h3>注册组件</h3>",
    });

    new Vue({
      el: "#app",
      data: {
        flag: false,
      },
      methods: {},
    });
  </script>
</html>
```

#### 使用 `<component>` 标签实现组件间的切换

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用 <component> 标签实现组件间的切换</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <a href="" @click.prevent="showCom='login'">登录</a>
      <a href="" @click.prevent="showCom='register'">注册</a>
      <a href="" @click.prevent="showCom='exit'">退出</a>

      <!-- <component> 是一个占位符
          :is 属性,可以用来指定要展示的组件的名称
        -->
      <component :is="showCom"></component>
    </div>
  </body>

  <script>
    Vue.component("login", {
      template: "<h3>登录组件</h3>",
    });

    Vue.component("register", {
      template: "<h3>注册组件</h3>",
    });

    Vue.component("exit", {
      template: "<h3>退出组件</h3>",
    });

    new Vue({
      el: "#box",
      data: {
        showCom: "login",
      },
    });
  </script>
</html>
```

##### 为组件切换时，添加动画

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用 <component> 标签实现组件间的切换</title>
    <script src="../lib/vue.js"></script>
    <style>
      .v-enter,
      .v-leave-to {
        opacity: 0;
        transform: translateY(150px);
      }

      .v-enter-active,
      .v-leave-active {
        transition: all 0.5s ease;
      }
    </style>
  </head>

  <body>
    <div id="box">
      <a href="" @click.prevent="showCom='login'">登录</a>
      <a href="" @click.prevent="showCom='register'">注册</a>
      <a href="" @click.prevent="showCom='exit'">退出</a>

      <!-- 通过 mode 属性,设置组件切换时候的 过渡动画 -->
      <transition mode="out-in">
        <!-- <component> 是一个占位符
          :is 属性,可以用来指定要展示的组件的名称
        -->
        <component :is="showCom"></component>
      </transition>
    </div>
  </body>

  <script>
    Vue.component("login", {
      template: "<h3>登录组件</h3>",
    });

    Vue.component("register", {
      template: "<h3>注册组件</h3>",
    });

    Vue.component("exit", {
      template: "<h3>退出组件</h3>",
    });

    new Vue({
      el: "#box",
      data: {
        showCom: "login",
      },
    });
  </script>
</html>
```

---

### 组件之间传值

Vue 实例就是一个父组件，而我们自定义的组件（包括全局组件、私有组件）就是子组件

需要注意的是，子组件不能直接使用父组件中的数据。父组件可以通过 `props` 属性向子组件传值

#### 父组件向子组件传值

父组件通过 `props` 属性向子组件传值

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>父组件向子组件传值</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <template id="myTemplate">
      <h2>{{childData}}，{{parentMsg}}</h2>
    </template>

    <div id="box">
      <child-temp v-bind:parent-msg="msg"></child-temp>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      data: {
        msg: "我是父组件",
      },
      components: {
        childTemp: {
          template: "#myTemplate",
          // data 中的数据是子组件自身私有的，可读写
          data() {
            return {
              childData: "我是子组件",
            };
          },
          // props 中的数据是只读的
          props: ["parentMsg"],
        },
      },
    });
  </script>
</html>
```

#### 父组件向子组件传递方法

父组件通过事件绑定机制，将父组件的方法传递给子组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>父组件向子组件传递方法</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <!-- 组件模版 -->
    <template id="myTemp">
      <div @click="childClick">
        <a href="#">我是子组件，点击我调用父组件的方法</a>
      </div>
    </template>

    <div id="box">
      <!-- 将父组件的 show() 传递给子组件 -->
      <childtemp @parent-show="show"></childtemp>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      methods: {
        show() {
          console.log("我是父组件的方法");
        },
      },
      components: {
        childtemp: {
          template: "#myTemp",
          methods: {
            childClick() {
              // 通过 emit 触发父组件的方法
              this.$emit("parent-show");
            },
          },
        },
      },
    });
  </script>
</html>
```

#### 子组件向父组件传值

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>子组件向父组件传值</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <template id="myTemp">
      <div @click="childClick">
        <a href="#">我是子组件，点击我调用父组件的方法，并传值给父组件</a>
      </div>
    </template>

    <div id="box">
      <childtemp @parent-show="show"></childtemp>
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      methods: {
        show(childData) {
          console.log("我是父组件的方法");
          // 使用子组件传递过来的值
          console.log(childData);
        },
      },
      components: {
        childtemp: {
          template: "#myTemp",
          methods: {
            childClick() {
              // 在 emit 方法里，将值传递给父组件
              this.$emit("parent-show", "我是子组件的值");
            },
          },
        },
      },
    });
  </script>
</html>
```

---

### Vue 中的 ref 属性

`ref` 的英文单词是 **reference**，表示**引用**。我们平时可以经常看到控制台会报错 **referenceError** 的错误，就和引用类型的数据有关

#### 通过 ref 属性获取 DOM 元素

1. 在标签中给 DOM 元素设置 `ref` 属性

   ```html
   <h3 ref="myTitle">我是H3</h3>
   ```

2. 通过 `this.$refs.xxx` 获取 DOM 元素

   ```javascript
   this.$refs.myTitle
   ```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>通过 ref 属性获取 DOM 元素</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <h3 ref="myTitle">我是H3</h3>
      <input type="button" value="点我获取 DOM 元素" @click="getElement" />
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      methods: {
        getElement() {
          console.log(this.$refs.myTitle);
        },
      },
    });
  </script>
</html>
```

#### 使用 ref 属性获取整个子组件

在父组件中通过 `ref` 属性拿到了子组件之后，就可以进一步拿到子组件中的 data 和 method

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>父组件调用获取子组件的数据即方法</title>
    <script src="../lib/vue.js"></script>
  </head>

  <body>
    <div id="box">
      <child-temp ref="child"></child-temp>
      <input type="button" @click="getChild" value="点我" />
    </div>
  </body>

  <script>
    new Vue({
      el: "#box",
      methods: {
        getChild: function () {
          console.log(this.$refs.child.data);
          this.$refs.child.showData();
        },
      },
      components: {
        "child-temp": {
          template: "<h1>我是子组件</h1>",
          data: function () {
            return {
              data: "子组件的数据",
            };
          },
          methods: {
            showData: function () {
              console.log(this.data);
            },
          },
        },
      },
    });
  </script>
</html>
```

---

### 路由

#### 后端路由

对于普通的网站，所有的超链接都是 URL 地址，所有的 URL 地址都对应服务器上对应的资源

当前端输入 URL 请求资源时，服务器会将 URL 对应的资源返回给前端。后端这个处理过程就是通过 *路由* 来分发的

**总结**：后端路由，就是把所有 URL 地址都对应到服务器的资源，这个对应关系就是路由

#### 前端路由

对于单页面应用程序来说，主要通过URL中的 `hash`（url 地址中的#号）来实现不同页面之间的切换

同时，hash有一个特点：HTTP请求中不会包含hash相关的内容

**总结**：在**单页应用**程序中，这种通过 `hash` 改变来**切换页面**的方式，称作前端路由（区别于后端路由）

#### Vue-router

##### 安装 vue-router.js

官方文档：https://router.vuejs.org/zh/

- 导入前提：先导入 vue.js

- 导入 Vue-router 后，就可以在 `window` 这个全局对象中使用 `VueRouter` 这个对象

- 只要我们导入了 `vue-router.js` 这个包，在浏览器中打开网页时，url 后面就会显示 `#` 这个符号