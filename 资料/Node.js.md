### Node.js 的介绍

[Node.js](https://nodejs.org/zh-cn/) 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。Node.js 的包管理工具 npm 是全球最大的开源库生态系统

Node.js 不是一门语言，也不是 JavaScript 的框架，也不是像 Nginx 一样的 Web 服务器，Node.js 是 JavaScript 在服务器端的运行环境（平台）

#### Node.js 的组成

在 Node.js 里运行 JavaScript，跟在 Chrome 里运行 JavaScript 有什么不同？

二者采用的是同样的 JS 引擎。在 Node.js 里写 JS，和在前端写 JS，几乎没有不同。在写法上的区别在于：Node.js 没有浏览器、页面标签相关的 API，但是新增了一些 Node.js 相关的 API。通俗来说，对于开发者而言，在前端写 JS 是用于控制浏览器；而 Node.js 环境写 JS 可以控制整个计算机

Node.js 的组成：

- ECMAScript。ECMAScript 的所有语法在 Node 环境中都可以使用
- Node 环境提供的一些附加 API （包括文件、网络等相关的 API）

![](https://camo.githubusercontent.com/0e008c26746fbb28dbdc3076f29719105ab7b533/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303430395f313534352e706e67)

与 PHP、JSP、Python、Perl、Ruby 等“既是语言，也是平台”不同，Node.js 使用的是 JavaScript 进行编程，运行在 Chrome 的 V8 引擎上

与 PHP、JSP 等相比（PHP、JSP、.net 都需要运行在服务器程序上：Apache、Nginx、Tomcat、IIS），Node.js 跳过了 Apache、Naginx、IIS 等 HTTP 服务器，它自己不用建设在任何服务器软件之上。Node.js 的许多设计理念与经典架构（LAMP = Linux + Apache + MySQL + PHP）有着很大的不同，可以提供强大的伸缩能力。Node.js 没有 Web 容器

JS 语言非常灵活，使得它在严谨性方面不如 Java 等传统的静态语言。JS 是一门动态语言，而且融合了面向对象和函数式编程这两种编程规范

随着 ES6、ES7 等 JS 语法规范的出现，以及浏览器对这些规范的支持，使得我们可以用更为现代化的 JS 语法特性，来编写现代化的应用

#### Node.js 的架构和依赖

![](https://camo.githubusercontent.com/a3f272c6119d5fa2edf643a897b1241a29f37146/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330315f313534302e706e67)

Node.js 内部采用 Google Chrome 的 V8 引擎，作为 JavaScript 语言的解释器；同时结合自行开发的 libuv 库，扩展了 JS 在后端的能力（比如 I/O 操作、数据库操作等）。使得 JS 既可以在前端进行 DOM 操作，又可以在后端调用操作系统资源，是目前最简单的全栈式语言

其次，Node.js 生态系统活跃，提供了大量的开源库，使得 JavaScript 语言能与操作系统进行更多的交互

##### [V8 引擎](https://v8.dev/)

编译和执行 JS 代码，管理内存，垃圾回收。V8 给 JS 提供了运行环境，可以说是 JS 的虚拟机。V8 引擎本身是用 C++ 写的

##### [libuv](https://zh.wikipedia.org/wiki/Libuv)

libuv 是一个专注于异步 I/O 的跨平台类库，目前主要在 Node.js 上使用。它是 Node.js 最初的作者 Ryan Dahl 为 Node.js 写的底层类库，也可以称之为虚拟机。libuv 本身是用 C 写的

##### V8 的内存限制

Node.js 是基于 V8 构建的，所以在 Node.js 中使用的 JavaScript 对象基本上都是通过 V8 自己的方式来进行分配和管理的

所以，Node.js 中通过 JavaScript 使用内存时，64 位系统下约为 1.4GB ，32 位系统下约为 0.7GB

#### Node.js 的发展史

- 2008 年左右，随着 Ajax 的逐渐普及，Web 开发逐渐走向复杂化，系统化
- 2009 年，Node.js 由 Joyent 的员工 Ryan Dahl 开发而成，Node.js 从此诞生
- 2009 年 5 月，Ryan Dahl 在 GitHub 中开源了 Node 的最初版本，同年 11 月，在 JSConf 大会上展示了 Node 项目
- 2010 年 1 月，NPM 包管理工具诞生，使得程序员能够更方便地发布和分享 Node.js 的第三方库
- Node.js 最初只支持 Linux 和 Mac OS 操作系统。2011 年 7 月，微软参与合作，Node.js 终于支持了 Windows 平台。PS：不过，node 的生产环境基本是在 Linux 下
- 目前官网最新版本已经更新到 14.x.x 版本，最新稳定的是 12.18.0

据 Node.js 创始人 Ryan Dahl 回忆，他最初希望采用 Ruby，但是 Ruby 的虚拟机效率不行

注意：是 Node 选择了 JavaScript，不是 JavaScript 发展出来了一个 Node

#### Node.js 的应用

Node.js 拥有强大的开发者社区，现在已经发展出比较成熟的技术体系，以及庞大的生态。它被广泛地应用在 Web 服务、开发工作流、客户端应用等诸多领域。其中，在 Web 服务领域，业界对 Node.js 的接受程度最高

##### BFF 中间层

BFF ，即 Backend For Frontend（服务于前端的后端）

在 Web 服务里，搭建一个中间层，前端访问中间层的接口，中间层再访问后台的 Java/C++ 服务。这类服务的特点是不需要太强的服务器运算能力，但对程序员的灵活性有较高的要求。这两个特点，正号和 Node.js 的优势相吻合。Node.js 非常适合做 BFF 层，优势如下：

- 对于前端来说：让前端有能力自由组装后台数据，这样可以减少大量的业务沟通成本，加快业务的迭代速度，并且，前端能够自主决定与后台的通讯方式
- 对于后台和运维来说：好处是 安全性（不会把主服务器暴露在外面），降低主服务器的复杂度等

##### 页面的渲染

###### 客户端渲染（CSR：Client Side Render）

前端通过一大堆接口请求数据，然后通过 JS 动态处理和生成页面结构进行展示

优点是，前后端分离、减少服务器压力、局部刷新。缺点是，不利于 SEO、首屏渲染慢

###### 服务端渲染（SSR：Server Side Render）

服务端返回的不是接口数据，而是一整个页面的 HTML 字符串，浏览器直接显示即可

优点：有利于 SEO、首屏渲染快

*这里的「服务端渲染」只是让 Node.js 做中间层*

参考：

- https://ssr.vuejs.org/zh/

- https://blog.csdn.net/u012036171/article/details/88833200
- https://juejin.im/post/6844903731075481608

##### 后台管理系统

现在很多公司的后台管理系统，都是用 Node.js 来开发接口，毕竟，后台管理系统对性能和并发的要求不是太高。有了 Node.js 之后，通过 JS 直接操作 DB，做增删改查，生成接口，极大降低了前端同学的学习门槛

##### 项目构建工具

前端正在广泛使用的构建工具 gulp、Webpack，就是基于 Node.js 来实现的

##### PC 端的软件（基于 Electron 框架）

Electron 框架就是基于 Node.js 的。也可以说：Electron 是 Node.js 在PC客户端的技术

有一点你可能会感到惊讶：程序员们都在用的代码编辑器 VS Code 软件， 就是用 JS 语言实现的

##### 知名度较高的 Node.js 开源项目

- Express ：Node.js 中著名的 web 服务框架
- Koa ：下一代的 Node.js 的 Web 服务框架。所谓的“下一代”是相对于 Express 而言的
- [Egg](https://eggjs.org/zh-cn/) ：2016 年，阿里巴巴研发了知名的 Egg.js 开源项目，号称企业级 Web 服务框架。Egg.js 是基于 Koa 开发的

- mocha ：是现在最流行的 JavaScript 测试框架，在浏览器和 Node 环境都可以使用
- PM2 ：node 多进程管理
- jade ：非常优秀的模板引擎，不仅限于 js 语言
- CoffeeScript ：用简洁的方式展示 JavaScript 优秀的部分
- Atom ：编辑器
- VS Code ：最酷炫的编辑器
- socket.io ：实时通信框架

#### Node.js 的特点

- 异步、非阻塞 I/O 模型
- 事件循环
- 单线程

总结：轻量和高效（对于开发时来说）

Node.js 的性能和效率非常高

传统的 Java 语言是一个请求开启一个线程，当请求处理完毕后就关闭这个线程。而 Node.js 则完全没有采用这种模型，它本质上就是一个单线程

你可能会疑问：一个线程如何服务于大量的请求、如何处理高并发的呢？这是因为，Node.js 采用的是异步的、非阻塞的模型

这里所谓的“单线程”，指的是 Node 的主线程只有一个。为了确保主线程不被阻塞，主线程是用于接收客户端请求。但不会处理具体的任务。而 Node 的背后还有一个线程池，线程池会处理长时间运行的任务（比如 IO 操作、网络操作）。线程池里的任务是通过队列和事件循环的机制来执行

##### 使用 Node.js 的劣势

- 程序运行不稳定，可能会出现服务不可用的情况
- 程序运行效率较低，每秒的请求数维持在一个较低的水平
- 前端对服务器端的技术不太熟悉

#### Node.js 开发环境的安装

##### 方式一：下载安装包

去 Node.js 的[官网](https://nodejs.org/en/)下载安装包，进行安装

注意，我们以一定要用偶数版（V4、V6 等)，不要用奇数版（比如 V5），因为奇数版不稳定

后续如果需要安装其他版本，可以这样做：重新下载最新的安装包，覆盖安装即可

通过 Node.js 安装包产生的问题：

- 安装新版本时，需要覆盖就版本；而且以前版本安装的很多全局工具包，需要重新安装。
- 无法回滚到之前的旧版本。
- 无法在多个版本之间切换（很多时候，不同的项目需要使用特定版本。或者，我想临时尝鲜一下新版本的特性）

###### Node.js 版本常识

- 偶数版本为稳定版（0.6.x ，0.8.x ，8.10.x）
- 奇数版本为非稳定版（0.7.x ，0.9.x ，9.11.x）
- LTS（Long Term Support）：长期维护的版本

参考链接：[node.js 中 LTS 和 Current 的区别](https://blog.csdn.net/u012532033/article/details/73332099)

##### 方式二：通过 NVM 安装（推荐）

[NVM](https://github.com/nvm-sh/nvm)：node.js version manager，用来管理 node 的版本

1. 安装 NVM

   参考：https://www.jianshu.com/p/da1e536fe475   https://blog.csdn.net/chnyifan/article/details/104705437/

   去官方 GitHub 下载 `install.sh` 脚本，然后执行脚本文件进行自动安装（执行的时候需要使用全路径，可以直接将脚本文件拖入终端进行执行）
   
   执行脚本的时候如果提示 `Permission denied` ，就表示没有权限。那么就先获取权限 `chmod u+x 路径/脚本文件` ，获取后再执行（u 代表所有者，x 代表执行权限）

   安装后以后，根据终端的提示，添加配置文件

   最后，输入 `source ~/.bash_profile` 重启环境变量的配置

   PS：NVM 现在已经不支持 Homebrew 的方式来安装了

2. 验证

   - 输入 `nvm` 命令查看环境变量是否配置成功
   - 输入 `nvm ls` ，查看已安装的所有 node 版本
   - 输入 `nvm -v` ，查看 已安装的 nvm 版本
   - 输入 `node -v` ，查看正在使用的 node 版本

3. 安装 Node.js

   ```
   nvm install 版本号
   ```

   输入 `node -v` ，查看当前使用的 node 版本

   安装好 `Node` 之后，`npm` 也会自动安装的，输入 `npm -v` ，查看 npm 的版本

#### NVM 常用命令

- 查看当前使用的 nvm 版本

  ```
  nvm -v
  
  nvm --version
  ```

- 查看本地安装的所有 Node 版本

  ```
  nvm ls
  
  nvm list
  ```

- 安装指定的 Node 版本

  ```
  nvm install 版本号
  ```

- 卸载指定的 Node 版本

  ```
  nvm uninstall 版本号
  ```

- 查看当前使用的版本

  ```
  nvm current
  ```

- 解除当前版本绑定

  ```
  nvm deactivate
  ```

- 切换使用指定版本的 Node

  ```
  nvm use 版本号
  ```

- 查看远程服务器端的所有 Node 版本

  ```
  nvm ls-remote
  ```
  
- nvm 切换到淘宝镜像

  ```
  vim ~/.bash_profile
  
  // 加入以下两条配置文件
  export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
  export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs
  
  // 重启配置文件
  source ~/.bash_profile
  ```

#### Node.js 常用命令

- 查看 Node 版本

  ```
  node -v
  ```

- 执行脚步字符串

  ```
  node -e 'console.log("Hello World")'
  ```

- 运行脚本文件

  ```
  node 文件名
  ```

- 查看帮助

  ```
  node --help
  ```

- 进入 REPL 环境

  ```
  node
  ```

  REPL 全称：Read Eval Print Loop。类似于浏览器的控制台

  ![](https://camo.githubusercontent.com/52022f89fbe181ba64f0ad627786546c7ac9c224/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330315f313930302e706e67)

- 推出 REPL 环境

  ```
  .exit
  
  process.exit()
  ```

#### 包和 NPM

##### 什么是包

由于 Node 是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（package）的概念： 与核心模块类似，就是将一些预先设计好的功能或者说 API 封装到一个文件夹，提供给开发者使用

Node 本身并没有太多的功能性 API，所以市面上涌现出大量的第三方人员开发出来的 Package

##### 包的加载机制

如果 Node 中自带的包和第三方的包名冲突了：

- 先在系统核心（优先级最高）的模块中查找
- 然后在当前项目中 node_modules 目录中查找

##### NPM 的概念

[NPM](https://www.npmjs.com/) ，Node Package Manager。Node.js 发展到现在，已经形成了一个非常庞大的生态圈。包的生态圈一旦繁荣起来，就必须有工具去来管理这些包。NPM 应运而生

随着时间的发展，NPM 出现了两层概念：

- 一层含义是 Node 的开放式模块登记和管理系统，亦可以说是一个生态圈，一个社区
- 另一层含义是 Node 默认的模块管理器，是一个命令行下的软件，用来安装和管理 Node 模块

##### NPM 常用命令

- 查看当前版本

  ```
  npm -v
  ```

- 查看当前使用的镜像

  原镜像：http://registry.npmjs.org

  ```
  npm congfig get registry
  ```

- 配置 npm 镜像源

  阿里镜像源：https://registry.npm.taobao.org

  - 临时切换镜像源

    安装指定包的时候，通过追加 `--registry` 参数即可

    ```
    npm install [package] --registry [https://xxx]
    ```

  - 切换镜像源

    ```
    npm config set registry https://registry.npm.taobao.org
    ```

  - 通过 NRM 切换镜像源（推荐）

    NRM：Node Registry Manager。作用是：切换和管理 npm 包的镜像源

    - 项目地址：https://www.npmjs.com/package/nrm
    - GitHub 地址： https://github.com/Pana/nrm

    安装 NRM：

    ```
    npm install -g nrm
    ```

    NRM 常用命令：

    ```
    # 显示全部的镜像
    nrm ls
    
    # 使用淘宝的镜像
    nrm use taobao
    ```

  - 安装 cnpm

    项目地址：https://npm.taobao.org/

    安装 `cnpm` 替换 npm（npm 由于源服务器在国外，下载包的速度较慢，cnpm 会使用国内镜像）：

    ```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

    以后我们就可以通过 cnpm 命令去安装一个包：

    ```
    cnpm install [package]   // 这里的单词 install 可以简写成 i
    ```

- 更新版本

  ```
  npm install npm@latest -g
  ```

- 项目初始化

  ```
  npm init
  
  // 快速跳过问答式界面，选择默认配置进行初始化
  npm init --yes
  ```

- 在当前工程下安装指定的包

  ```
  npm install [package]
  ```

- 在全局安装指定的包

  ```
  npm install -g [package]
  ```

- 安装只用于开发环境的包，不用于生产环境（会出现在 `package.json` 文件中的 `devDependencies` 属性中）

  ```
  npm install [package] --save-dev
  
  npm install [package] -D
  ```

  `-dev` 表示开发依赖：

  - 开发依赖：当前这个包，只在开发环境下使用
  - 运行依赖：当前这个包，只在生产环境下使用

- 安装需要发布到生产环境的包（会出现在 `package.json` 文件中的 `dependencies` 属性中）

  ```
  npm install [package] --save
  
  npm install [package] -S
  ```

- 查看当前目录已安装的 node 包

  ```
  npm list
  ```

- 查看全局已经安装的 node 包

  ```
  npm list -g
  ```

- 查看帮助命令

  ```
  npm --help
  ```

- 查看指定命令的帮助

  ```
  npm [指定命令] --help
  ```

- 更新指定的包

  ```
  npm update [package]
  ```

- 卸载指定的包

  ```
  npm uninstall [package]
  ```

- 查看配置信息

  ```
  npm config list
  ```

- 查看本地安装的指定包的信息，没有则显示 empty

  ```
  npm ls [package]
  ```

- 查看全局安装的指定包的信息，没有则显示 empty

  ```
  npm ls [package] -g
  ```

- 查看远程 npm 上指定包的所有版本信息

  ```
  npm info [package]
  ```

- 查看当前包的安装路径

  ```
  npm root
  ```

- 查看全局包的安装路径

  ```
  npm root -g
  ```

#### 工具总结

- nvm ：安装、管理 node
- node ：js 在服务器端的运行环境
- npm ：安装、管理 node包
- nrm ：切换、管理 npm包 镜像源

#### Node.js 的简单使用

- 输入 `node` 命令，然后在里面写 js 代码
- 执行 js 文件：`node *.js`

#### Node 的调试

##### 最简单的调试

`consolo.log("str");`

##### Node 原生的调试

https://nodejs.org/api/debugger.html

##### 第三方模块提供的调试工具

```
npm install node-inspector –g

npm install devtool -g
```

##### 开发工具中调试

---

### Node.js 模块化

#### 前沿

网站越来越复杂，js 代码、js 文件 越来越多，会出现的一些问题：

- 文件依赖
- 全局污染、命名冲突

程序模块化包括：

- 日期模块
- 数学计算模块
- 日志模块
- 登录认证模块
- 报表展示模块

所有的模块共同组成了程序软件系统

一次编写，多出使用，才是提高效率的核心

#### 什么是模块化

概念：将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并组合在一起

模块的内部数据、实现是私有的，只是向外部暴露一些接口（方法）与外部其它模块通信

#### 模块化的好处

- 避免命名冲突，减少命名空间污染

- 降低耦合性；更好地分离、按需加载

- 高复用性

  代码方便重用，别人开发的模块，直接拿过来就可以使用，不需要重复开发类似的功能

- 高可维护性

  软件的声明周期中，最长的阶段其实并不是开发阶段，而是维护阶段，需求变更比较频繁。使用模块化开发，更容易维护

- 部署方便

#### 模块化规范

假设我们引入模块化，首先可能会想到的思路是：在一个文件中引入多个js文件。如下：

```html
<body>
    <script src="zepto.js"></script>
    <script src="fastClick.js"></script>
    <script src="util/login.js"></script>
    <script src="util/base.js"></script>
    <script src="util/city.js"></script>
</body>
```

但是这样做会带来很多问题：

- 请求过多：引入十个js文件，就有十次http请求
- 依赖模糊：不同的js文件可能会相互依赖，如果改其中的一个文件，另外一个文件可能会报错

以上两点，最终导致：**难以维护**

于是，这就引入了模块化规范

##### 模块化规范的概念

模块化起源于 Node.js 。Node.js 中把很大 js 打包成 package ，需要的时候直接通过 require 的方式进行调用（CommonJS），这就是模块化的方式

##### 模块化规范

- 服务器端规范

  [**CommonJS规范**](http://www.commonjs.org/) ：是 Node.js 使用的模块化规范

  CommonJS 就是一套约定标准，不是技术。用于约定我们的代码应该是怎样的一种结构

- 浏览器端规范

  - [**AMD规范**](https://github.com/amdjs/amdjs-api) ：是 **[RequireJS](http://requirejs.org/)** 在推广过程中对模块化定义的规范化产出

    ```
    - 异步加载模块；
    
    - 依赖前置、提前执行：require([`foo`,`bar`],function(foo,bar){});   //也就是说把所有的包都 require 成功，再继续执行代码。
    
    - define 定义模块：define([`require`,`foo`],function(){return});
    ```

  - **CMD规范** ：是 **[SeaJS](http://seajs.org/)** 在推广过程中对模块化定义的规范化产出。淘宝团队开发

    ```
    同步加载模块；
    
    依赖就近，延迟执行：require(./a) 直接引入。或者Require.async 异步引入。   //依赖就近：执行到这一部分的时候，再去加载对应的文件。
    
    define 定义模块， export 导出：define(function(require, export, module){});
    ```

  另外，还有ES6规范：import & export

---

### CommonJS

#### CommonJS 的介绍

[CommonJS](http://www.commonjs.org/) ：是 Node.js 使用的模块化规范。也就是说，Node.js 就是基于 CommonJS 这种模块化规范来编写的

CommonJS 规范规定：每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports）是对外的接口对象。加载某个模块，其实是加载该模块的 module.exports 对象

在 CommonJS 中，每个文件都可以当作一个模块：

- 在服务器端：模块的加载时运行时同步加载的
- 在浏览器端：模块需要提前编译打包处理。首先，既然同步的，很容易引起阻塞，其次，浏览器识别 `require` 语法，因此需要提前编译打包

#### 模块的暴露和引入

Node.js 中只有模块级作用域，两个模块之间的变量、方法，默认是互不冲突，互不影响，这样就导致一个问题：模块A 要怎样使用模块B中的变量&方法呢？这就需要通过 `exports` 关键字来实现

Node.js 中，每个模块都有一个 exports 接口对象，我们可以把公共的变量、方法挂载到这个接口对象中，其它的模块才可以使用

##### 暴露模块的方式1 ：exports

`exports` 对象用来导出当前模块的公共方法或属性。别的模块通过 `require()` 函数来调用当前模块时，得到的就是当前模块的 `exports` 对象

语法格式：

```
// 相当于给 exports 对象添加属性
exports.属性名 = 属性值;
```

##### 暴露模块的方式2 ：module.exports

`module.exports` 用来导出一个默认对象，没有指定对象名

语法格式：

```
// 方式1：导出整个 exports 对象
module.exports = value;

// 方式2：给 exports 对象添加属性
module.exports.属性名 = 属性值;
```

##### exports 和 module.exports 的区别

最重要的区别：

- 使用 exports 时，只能设置单个属性
- 使用 module.exports 时，既能设置单个属性，也可以整个赋值

其它区别：

- Node 中每个模块的最后，都会执行 `return: module.exports`

- Node 中每个模块都会把 `module.exports` 指向的对象赋值给变量 `exports` ，也就是说 `exports = module.exports`
- `module.exports = value` ，表示当前模块导出一个单一成员，就过就是 `value`
- 如果需要导出多个成员，则必须使用 `exports.add  = value1; exports.add = value2` ，或者使用 `module.exports.add = value1; module.exports.add = value2`

Node.js 中每个模块都有一个 module 对象，module 对象中的有一个 exports 属性称之为**接口对象**。我们需要把模块之间公共的方法或属性挂载在这个接口对象中，方便其他的模块使用

##### 引入模块

`require()` 函数用来在一个模块中引入另外一个模块。传入模块名，返回模块导出对象

```
const mod = require("模块名");
```

- 内置模块：require 的是**包名**
- 下载的第三方模块：require 的是**包名**
- 自定义模块：require 的是**文件路径**。文件路径既可以用绝对路径，也可以用相对路径。后缀名`.js `可以省略

###### require() 函数的作用

- 执行导入模块中的代码
- 返回导入模块中的接口对象

#### 主模块

主模块是整个程序执行的入口，可以调度其它模块

```
# 运行 main.js 启动程序，此时 main.js 就是主模块
node main.js
```

#### 模块的初始化

一个模块中的 JS 代码仅在模块第一次被使用时执行一次，并且在使用的过程中进行初始化，然后会被缓存起来，便于后续继续使用

#### 全局对象

- global

  类似于客户端，JavaScript 运行环境中的 `window`

- process

  用于获取当前 Node 的进程信息。一般用于获取环境变量之类的信息

- consolo

  Node 中内置的 consolo 模块，提供操作控制台的输入输出功能

#### 全局函数

- setInterval(callback, millisecond)
- clearInterval(timer)
- setTimeout(callback, millisecond)
- clearTimeout(timer)
- Buffer：Class
  - 用于操作二进制数据
  - 以后介绍

#### CommonJS 在服务端的实现

##### 初始化项目

在工程文件中新建如下目录和文件：

```
modules
    | module1.js
    | module2.js
    | module3.js

app.js
```

然后在根目录下执行如下命令：

```
npm init
```

然后根据提示，依次输入如下内容：

- 包名：可以自己起包名，也可以使用默认的包名（包名不能有中文，不能有大写）
- 版本：可以用默认的版本 1.0.0 ，也可以自己修改

于是，根目录下会自动生成 `package.json` 这个文件：

```json
{
  "name": "commonjs_node",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

##### 导入第三方包

`uniq` 这个第三方包的作用是保证唯一性。我们在当前工程目录下，输入如下命令进行安装：

```
npm install uniq
```

需要说明的是，我的node版本是 v8.10.0（v8以上），对应的 npm 版本是 v5.6.0，版本比较高，因此，当我输入完`npm install uniq`之后，`package.json`中就会自动添加`uniq`包的依赖：

![](https://camo.githubusercontent.com/52cd92833086f615c9996fc06faac67bd729dfd6/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303431305f313835352e706e67)

如果有些童鞋的npm版本较低，就需要手动去添加依赖；另一种方式是，可以使用 `npm install uniq --save` 命令，这个多出来的 `--save` 就可以自动添加依赖

我们去[官网](https://www.npmjs.com/package/uniq)看一下 `uniq` 的用法：

```javascript
let uniq = require('uniq');

let arr = [1, 1, 2, 2, 3, 5];
uniq(arr);
console.log(arr);  // 输出结果：[ 1, 2, 3, 5 ]
```

可以看出，这个包可以起到数组去重的作用

##### 自定义模块

- module1.js

  ```javascript
  // 暴露一个对象出去
  module.exports = {
      name: '我是 module1',
      foo(){
          console.log(this.name);
      }
  }
  
  // 我们不能再继续写 module.exports = xxx。因为重新赋值，会把之前的赋值覆盖掉
  ```

- module2.js

  ```javascript
  // 暴露一个函数出去
  module.exports = function(){
      console.log('我是 module2');
  }
  ```

- module3.js

  ```javascript
  // 往 export 对象中不断地添加属性，进行暴露
  
  exports.foo1 = function(){
      console.log('module3 中的 foo1 方法');
  }
  
  exports.foo2 = function(){
      console.log('module3 中的 foo2 方法');
  }
  
  exports.arr = [1,1,2,2,3,5,11];
  ```

- app.js

  `./` 表示当前路径

  ```javascript
  // 将其他模块汇集到主模块
  
  let uniq = require('uniq');   // 引入时，第三方模块要放在自定义模块的上面
  
  let module1 = require('./modules/module1');
  let module2 = require('./modules/module2');
  let module3 = require('./modules/module3');
  
  // 调用module1对象的方法
  module1.foo();
  
  // 调用module2的函数
  module2();   //注意，在定义时，module2对象等价于整个函数function。所以，module2()的意思是，直接调用了函数。
  
  // 调用module3中的属性
  module3.foo1();
  module3.foo2();
  
  uniq(module3.arr);   // 将module3中的数组进行去重操作
  console.log(module3.arr);   // 打印数组去重后的结果
  ```

最后在命令行输入 `node app.js` 执行

#### CommonJS 基于浏览器端的实现举例

##### 初始化项目

在工程文件中新建如下目录和文件：

```
js
    dist //打包生成文件的目录
    src //源码所在的目录
      | module1.js
      | module2.js
      | module3.js
      | app.js //应用主源文件
index.html    //因为CommonJS是基于浏览器端，js文件要跑在浏览器的页面上，所以要有这个html页面
```

然后在根目录下新建如下命令：

```
npm init
```

然后根据提示，依次输入如下内容：

- **包名**：可以自己起包名，也可以用默认的包名（包名里不能有中文，不能有大写）
- **版本**：可以用默认的版本 1.0.0，也可以自己修改包名

其他的参数，一路回车即可

于是，根目录下会自动生成 `package.json` 这个文件：

```json
{
  "name": "browser_mode",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

##### 下载第三方包

这里需要用到 [Browserify](http://browserify.org/) 这个工具进行编译打包。Browserify 称为 CommonJS 的浏览器端的打包工具

输入如下命令进行安装：（两个命令都要输入）

```
npm install browserify -g          // 全局

npm install browserify --save-dev  // 局部
```

##### 自定义模块

- module1.js

  ```javascript
  module.exports = {
      name: '我是 module1',
      foo(){
          console.log(this.name);
      }
  }
  ```

- module2.js

  ```javascript
  module.exports = function(){
      console.log('我是 module2');
  }
  ```

- module3.js

  ```javascript
  exports.foo1 = function(){
      console.log('module3 中的 foo1 方法');
  }
  
  exports.foo2 = function(){
      console.log('module3 中的 foo2 方法');
  }
  ```

- app.js

  ```javascript
  let module1 = require('./module1');  // ./ 指的是当前路径
  let module2 = require('./module2');
  let module3 = require('./module3');
  
  module1.foo();
  module2();
  module3.foo1();
  module3.foo2();
  ```

##### 打包处理 js

```
browserify js/src/app.js -o js/dist/bundle.js
```

在 `index.html` 中引入打包后的 js 文件：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CommonJS 基于浏览器端的实现举例</title>
    <script type="text/javascript" src="js/dist/bundle.js"></script>
  </head>
  <body></body>
</html>
```

---

### AMD

AMD（Asynchronous Module Definition）：异步模块定义。AMD 专门用于浏览器端，模块的加载是异步的

#### 暴露模块的方式

##### 定义没有依赖的模块

```javascript
define(function() {
	return 模块;
});
```

##### 定义有依赖的模块

```javascript
define(["模块名1", "模块名2"], function(m1, m2) {
  return 模块;
});
```

- 参数1 ：必须是数组，里面存放的是，需要依赖的其它模块
- 参数2 ：是一个 function ，形参是 参数1 的模块。这个形参的作用是，前面依赖的模块一旦声明了，就可以一一对应地注入到 function中去，从而在 function 内部使用依赖的模块。这种方式称之为**显式声明依赖注入**

#### 引入模块的方式

在主模块中引入其它模块：

```
require(["模块1", "模块2"], function() {
 // 使用模块
});
```

#### RequireJS

RequireJS 是 AMD 的实现

##### RequireJS 的使用举例

1. 创建项目结构

   在工程文件中新建如下目录：

   ```
   js
     | libs
   
     | modules
       	| alerter.js
       	| dataService.js
     | main.js
   
   index.html
   ```

2. 下载并导入 require.js

   - 官网: http://requirejs.org/docs/download.html
   - GitHub：https://github.com/requirejs/requirejs

   下载 `require.js` 后，拷贝到项目的 `js/libs/` 目录中

3. 自定义模块

   - dataService.js

     ```javascript
     // 定义没有依赖的模块
     define(function () {
       let name = "我是 dataService.js 中的内容";
       function getName() {
         return name;
       }
     
       // 暴露模块
       return { getName };
     });
     ```

   - alerter.js

     ```javascript
     // 定义有依赖的模块
     define(["myDataService"], function (dataService) {
       let msg = "我是 alerter.js 中的内容";
       function showMsg() {
         console.log(dataService.getName());
         console.log(msg);
       }
     
       return { showMsg };
     });
     ```

     `myDataService` 是自己起的名字，稍后会在 `main.js` 中做映射

   - main.js

     ```javascript
     requirejs.config({
       // baseUrl: "js/",   // 基本路径
       paths: {
         myDataService: "./modules/dataService",
         myAlerter: "./modules/alerter",
       },
     });
     
     requirejs(["myAlerter"], function (alerter) {
       alerter.showMsg();
     })();
     ```

     注释里的 `baseUrl` 的用法：表示 `paths` 中 js 文件的基本路径

   - index.html

     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>RequireJS</title>
         <script src="js/libs/require.js" data-main="js/main.js"></script>
       </head>
       <body></body>
     </html>
     ```

     通过 `src` 属性引入 `requre.js` 文件，一旦这个文件发挥作用了，会去找 `data-main` 属性里的指向，它正好指向的是主模块

---

### CMD

CMD（Common Module Definition）：同步模块定义。CMD 专门用于浏览器端，模块的加载是同步的。模块在使用时才会加载执行

#### 暴露模块的方式

##### 定义没有依赖的模块

```javascript
define(function(require, exports, moudle) {
  exports.xxx = value;
  
  // 暴露模块
  moudle.exports = value;
});
```

##### 定义有依赖的模块

```javascript
define(function(require, exports, module) {
 // 引入依赖的模块（同步）
 val module2 = require("./module2");
 
 // 引入依赖的模块（异步）
 require.async("./module3", function(m3) {
 
 });
 
 // 暴露模块
 exports.xxx = value;
});
```

#### 引入模块的方式

```javascript
define(function(require) {
  val m1 = require("./module1");
  
  m1.show();
});
```

#### SeaJS 的使用举例

1. 创建项目结构

   在工程文件中创建如下目录结构：

   ```
   js
       | libs
         	| sea.js
       | modules
         	| module1.js
         	| module2.js
         	| module3.js
         	| module4.js
         	| main.js     //主模块
   index.html
   ```

2. 下载并导入 sea.js

   - 官网: https://seajs.github.io/seajs/docs/
   - GitHub：https://github.com/seajs/seajs

3. 自定义模块

   - module1.js

     ```javascript
     // 定义没有依赖的模块
     define(function (require, exports, module) {
       let name = "我是 module1";
       function getName() {
         return name;
       }
     
       // 暴露模块：暴露的是对象，对象中的内容是 getName() 这个函数
       module.exports = { getName };
     });
     ```

   - module2.js

     ```javascript
     // 定义没有依赖的模块
     define(function (require, exports, module) {
       let name = "我是 module2";
       function showName() {
         console.log(name);
       }
     
       // 暴露模块：暴露的是 showName() 这个函数
       module.exports = showName;
     });
     ```

   - module3.js

     ```javascript
     // 定义没有依赖的模块
     define(function (require, exports, module) {
       let name = "我是 module3";
       function showName() {
         console.log(name);
       }
     
       // 暴露模块：给 exports 对象添加 module3 属性，然后暴露出去
       exports.show = { showName };
     });
     ```

   - module4.js

     ```javascript
     // 定义有依赖的模块
     define(function (require, exports, module) {
       let name = "我是 module4";
     
       // 同步方式引入 module2.js ，获取到的是一个函数
       let myModule2 = require("./module2");
       myModule2();
     
       // 异步方式引入 module3.js
       require.async("./module3", function (m3) {
         m3.show.showName();
       });
     
       function showName() {
         console.log(name);
       }
     
       exports.show = showName;
     });
     ```

   - main.js

     ```javascript
     define(function (require) {
       let m1 = require("./module1");
       console.log(m1.getName());
     
       let m4 = require("./module4");
       m4.show();
     });
     ```

   - index.html

     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>SeaJS</title>
         <script src="js/libs/sea.js"></script>
         <script>
           seajs.use("./js/modules/main.js");
         </script>
       </head>
       <body></body>
     </html>
     ```

---

### ES6 中的模块化

#### JS 开发的弊端

JS 在使用时存在的两大问题，而 Node.js 可以很好的避免这两个问题：

- 文件依赖

  比如 a 文件依赖 b 文件，b 文件依赖 c 文件。而 Node.js 中的文件依赖，不需要人工维护和人为分析

- 命名冲突

  js 的各个文件是相互开放的，容易导致命名冲突。而 Node.js 是属于半封闭的状态，可以指定哪些内容是开放的，哪些内容是封闭的

#### 软件开发中的模块化开发

一个功能就是一个模块，多个模块可以组成完整的应用，抽离一个模块不会影响其它功能的运行

![](https://camo.githubusercontent.com/6c3a9df560c10df7eac103527b04428fd1064e80/687474703a2f2f696d672e736d79687661652e636f6d2f32303230303430395f313933342e706e67)

#### Node.js 中的模块化开发

Node.js 规定，一个 js 文件就是一个模块，模块内部定义的变量和函数默认情况下在外部无法访问

模块内部可以使用 `exports` 对象导出成员，然后外部使用 `require()` 方法导入其它模块

#### ES6 模块化的基本语法

##### ES6 模块化的说明

依赖模块，需要编译打包处理，原因如下：

- 有些浏览器不支持 ES6 的语法，写完 ES6 的代码后，需要通过 `Babel` 将 ES6 转化为 ES5。
- 生成了ES5之后，里面仍然有 `require` 语法，而浏览器并不认识 `require` 这个关键字。此时，可以用  `Browserify` 编译打包 js，进行再次转换

##### 基本语法

- 导出模块

  ```
  export
  ```

- 引入模块

  ```
  import 模块名 from "模块路径";
  ```

#### ES6 模块化的使用举例（自定义模块）

##### 初始化项目

1. 在工程文件中新建如下目录结构：

   ```
   js
       | src
       	| module1.js
       	| module2.js
       	| module3.js
        	| module4.js
       	| main.js
   index.html
   ```

2. 在工程目录下，新建文件 `package.json`

   ```json
   {
       "name": "es6-babel-browserify",
       "version": "1.0.0"
   }
   ```

##### 环境配置

1. 安装 `babel` 和 `browserify`

   ```
   npm install babel-cli -g
   
   npm install babel-preset-es2015 --save-dev
   
   npm install browserify -g
   ```

2. 新建 `.babelrc`

   在根目录新建文件 `.babelrc`

   ```
   {
       "presets":[
           "es2015"
       ],
       "plugins":[]
   }
   ```

##### 编写代码

1. module1.js

   ```javascript
   // 暴露模块：采用分别暴露的方式
   export function showMsg1() {
     console.log("我是 module1.js 的 showMsg1()");
   }
   
   export function showMsg2() {
     console.log("我是 module1.js 的 showMsg2()");
   }
   
   export let arr = [1, 2, 3, 4, 5];
   ```

2. module2.js

   ```javascript
   // 暴露模块：采用统一暴露的方式
   function showMsg11() {
     console.log("我是 module2.js 的 showMsg1()");
   }
   
   function showMsg22() {
     console.log("我是 module2.js 的 showMsg2()");
   }
   
   // 统一暴露
   export { showMsg11, showMsg22 };
   ```

3. module3.js

   ```javascript
   // 暴露模块：采用默认暴露的方式
   // 默认暴露的方式，可以暴露任意数据类型，暴露的是什么数据，就收到的就收什么数据。默认暴露方式只能进行一次
   // 这里暴露的是：一个箭头函数
   export default () => {
     console.log("我是 module3.js 的 default 方式暴露的函数");
   };
   ```

4. module4.js

   ```javascript
   // 暴露方式：默认暴露方式
   // 暴露多个属性
   export default {
     msg: "我是 module4.js",
     showMsg() {
       console.log(this.msg + " 的 showMsg()");
     },
   };
   ```

5. main.js

   ```javascript
   // 采用解构赋值的形式进行导入（括号里的对象名要与 module1 中的对象名一致）
   import { showMsg1, showMsg2, arr } from "./module1";
   // 采用解构赋值的形式进行导入（括号里的对象名要与 module2 中的对象名一致）
   import { showMsg11, showMsg22 } from "./module2";
   // 采用默认暴露的方式，名字自己定义
   import m3 from "./module3";
   import m4 from "./module4";
   
   showMsg1();
   showMsg2();
   showMsg11();
   showMsg22();
   console.log(arr);
   m3();
   console.log(m4);
   m4.showMsg();
   ```

6. index.html

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>ES6 中模块化（自定义模块）</title>
     </head>
     <script src="js/dist/main.js"></script>
     <body></body>
   </html>
   ```

##### 编译转换

如果我们不进行转换，而是直接在 `index.html` 中加载 `js/src/main.js` ，是会报错的

1. 利用 `babel` 将 ES6 转换为 ES5 ：

   ```
   babel js/src -d js/build
   ```

   上方命令的意思是，将 `src` 目录下的所有ES6文件转化为ES5文件，并放在 `build` 目录下（ `build` 目录会被自动创建）

2. 利用 `browserify` 编译打包 `build` 目录下的 ES5 文件：

   转化成 ES5 之后，我们发现，如果直接在 `index.html` 中加载 `build` 目录下的ES5文件，也是会报错的，因为浏览器不认识 `main.js` 里的 `require` 关键字

   ```
   browserify build/main.js -o js/dist/main.js
   ```

#### ES6 模块化的使用举例（引入第三方模块）

1. 下载 jQuery 包：

   ```
   npm install jquery@1   // 下载 jQuery 1.X 版里最新的
   ```

2. 在 `main.js` 中引入上面的 jQuery：

   ```javascript
   import $ from "jQuery";
   ```

3. 通过 `$` 符合去写 jQuery 的代码

---

### Node.js 的内置模块

`require()`方法用于加载模块

#### Node.js 中模块的分类

- 内置模块

  常见的内置模块：

  - `path` ：处理文件路径
  - `fs` ：操作（CRUD）文件系统
  - `child_process` ：新建子进程
  - `util` ：提供一系列实用小工具
  - `http` ：提供 HTTP 服务器功能
  - `url` ：用于解析 URL
  - `querystring` ：解析 URL 中的查询字符串
  - `crypto` ：提供加密和解密功能

- 第三方模块

  require 加载第三方包的机制：

  1. 第三方包安装好后，这个包一般会存放在当前项目的 node_modules 文件夹中。我们找到这个包的 `package.json` 文件，并且找到里面的 main 属性对应的入口模块，这个入口模块就是这个包的入口文件
  2. 如果第三方包中没有找到 `package.json` 文件，或者 `package.json` 文件中没有 main 属性，则默认加载第三方包中的 `index.js` 文件
  3. 如果在 `node_modules` 文件夹中没有找到这个包，或者以上所有情况都没有找到，则会向上一级父级目录下查找 `node_modules` 文件夹，查找规则如上一致
  4. 如果一直找到该模块的磁盘根路径都没有找到，则会报错：can not find module xxx

- 自定义模块

  每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其它文件不可见

#### 文件模块

fs 全称 File System

- Node.js 的API文档（英文）： https://nodejs.org/docs/latest-v8.x/api/index.html
- Node.js 的API文档（中文）：http://nodejs.cn/api/

查阅文档时，稳定指数如下：

- 红色：废弃
- 橙色：实验。表示当前版本可用，其他版本不确定。也许不向下兼容，建议不要在生产环境中使用该特性
- 绿色：稳定。与 npm 生态系统的兼容性是最高的优先级

##### File System 的使用

参考：https://www.runoob.com/nodejs/nodejs-fs.html

- 导入文件模块

  ```javascript
  const fs = require("fs");
  ```
  
- 异步读取文件

  ```javascript
  fs.readFile("文件名", "编码", (err, data) => {
  	if (err) {
  		// 读取失败
  	} else {
  		// 读取成功
  	}
  });
  ```

- 同步读取文件

  ```javascript
  try {
    const data = fs.readFileSync("文件名", "编码");
  } catch(e) {
    throw e;
  }
  ```

- 异步写入文件

  ```
  fs.writeFile(file, data[, options], callback)
  ```
  
  writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容

  - **file** - 文件名或文件描述符
  - **data** - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象
  - **options** - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
  - **callback** - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回
  
- 删除文件

  ```
  fs.unlink(path, callback)
  ```

  - **path** - 文件路径
  - **callback** - 回调函数，没有参数

- 读取目录

  ```
  fs.readdir(path, callback)
  ```

- 创建目录

  ```
  fs.mkdir(path[, options], callback)
  ```

##### Node.js 中同步和异步的区别

fs模块对文件的几乎所有操作都有同步和异步两种形式

- 同步调用会阻塞代码的执行，异步则不会。
- 异步调用会将 读取任务 下达到任务队列，直到任务执行完成才会回调。
- 异常处理方面：同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数

#### 路径模块

Node.js 通过 `path` 这个内置模块，提供了一些路径操作的 API

参考：https://www.runoob.com/nodejs/nodejs-path-module.html

- 引入 path 模块

  ```javascript
  var path = require("path");
  ```

- 获取扩展名

  ```
  path.extname("文件名")
  ```

##### 常见的路径

- `__dirname` ：这是一个常量，表示：当前执行文件所在**完整目录**
- `__filename` ：这是一个常量。表示：当前执行文件的**完整目录 + 文件名**
- `process.cwd` ：获取当前执行 Node命令 时的目录名

#### 系统模块

参考：https://www.runoob.com/nodejs/nodejs-os-module.html

- 获得网络接口列表

  ```
  os.networkInterfaces()
  ```

---

### Node.js 操作 MySQL

#### Node.js 连接 MySQL

1. 安装 mysql 包

   ```
   npm install mysql
   ```

2. 引入 mysql 包

   ```
   let mysql = require("mysql");
   ```

3. 连接 MySQL 数据库

   ```javascript
   let mysql = require('mysql');
   
   let options = {
     host: "localhost",				// 数据库服务器地址
     port: "3306",
     user: "root",
     password: "Yx147258",
     database: "db_test",			// 数据库名
   };
   
   let connection = mysql.createConnection(options);
   
   connection.connect((err) => {
     if (err) {
       console.log(err);
     } else {
       console.log("数据库连接成功");
     }
   });
   ```

   如果运行后提示 `Client does not support authentication protocol requested by server` ，解决办法如下：

   ```
   # 注意，这里的 'root' 请填你的user账号， 'localhost' 请填 你的 host， 'password' 请填你的密码
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
   
   # 然后执行如下命令
   flush privileges;
   ```

#### Node.js 对 MySQL 的增删改查

##### 查

```javascript
connection.query("select * from people", (err, result, fields) => {
  if (err) {
    console.log(err);
  } else {
    console.log("查询结果：" + JSON.stringify(result));
    console.log(fields);
  }
});
```

##### 删

```javascript
let strSql = 'drop table people';
connection.query(strSql, (err, result) => {
    if (err) {
        // 表删除失败
        console.log(err);
    } else {
        // 表删除成功
        console.log('表删除成功：' + result);
    }
});
```

其它操作类似，使用 sql 语句

---

### Koa

官网：https://koa.bootcss.com/

Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序

---

### Node.js 中的 Http 服务器

新建 js 文件，代码如下：

```javascript
// 引入 node.js 里面的一个 http 包
const http = require("http");

// 被访问时的回调
var server = http.createServer(function (request, response) {
  console.log("被访问了");
  response.write("welcome");
  response.end();
});

// 让服务器监听 8080 端口
server.listen(8080);
```

---

### WebSocket

HTTP 协议是无状态的，服务器只会响应客户端的请求，但是它与客户端之间不具备持续连接

当用户在浏览器上进行操作时，可以请求服务器上的 API ，但是反过来却不可能，服务端发生了一个事件，无法将这个事件的信息实时主动地通知客户端，只有客户端查询服务器状态时，所发生的事件信息才会从服务端传递到客户端

Http 中实时获取服务器状态的方法：

- 轮询

  客户端每隔很短的时间，都会向服务器发出请求，查看是否有新的消息，只要轮询的速度足够快，就能给人造成交互是实时进行的印象

  这种做法是无奈之举，实际上对服务器、客户端双方都造成了大量的性能浪费

- 长连接

  客户端只请求一次，但是服务器会将连接保持，不会返回结果，当服务器有了新数据时，实时地发给客户端，而一直保持挂起的状态

  这种做法也造成了大量的性能浪费

#### WebSocket 协议

最新的 HTML5 协议，制定了 WebSocket 协议标准，允许客户端和服务端以**全双工**的方式进行通信

WebSocket 的原理：利用 HTTP 请求产生的握手，HTTP 头部含有 WebSocket 协议的请求，握手之后，双方转用 TCP 协议进行通信

WebSocket 协议需要浏览器和服务器都支持才可以使用：

- 支持WebSocket协议的浏览器有：Chrome 4、火狐 4、IE 10、Safari 5
- 支持WebSocket协议的服务器有：Node 0、Apach 7.0.2、Nginx 1.3

#### Http 长连接和 WebSocket 长连接的区别

HTTP 1.1 通过使用 `Connection:keep-alive` 进行长连接，HTTP 1.1 默认进行持久连接。在一次 TCP 连接中可以完成多个 HTTP 请求，但是对每个请求仍然要单独发 header ，keep-alive 不会永久保持连接，它有一个保持时间，可以在不同的服务器软件中设定这个时间

WebSocket 是一个真正的全双工。长连接第一次 TCP 链路建立之后，后续数据可以双方相互发生，不需要发生请求头

keep-alive 双方并没有建立真正的连接会话，服务端可以在任何一次请求完成后关闭。WebSocket 它本身就规定了真正的、双工的长连接，两边都必须要维持住连接的状态

#### Socket.IO

官网：http://socket.io/

```
npm install socket.io
```

