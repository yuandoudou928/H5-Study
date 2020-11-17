### Bootstrap

Bootstrap 是 Twitter 的工程师 Mark Otto 和 Jacob Thornton 在2001年开发的前端框架。使用它可以非常方便的设计出好看的页面效果

Bootstrap 是基于 HTML、CSS、JavaScript 开发的，它简洁灵活，代码优雅。它用于开发响应式布局、移动设备优先的 Web 项目

- 官方网站：https://getbootstrap.com/
- 中文网站：http://www.bootcss.com/

#### Bootstrap 版本介绍

##### 2.3.2 版本

- 2013 年之后，停止维护
- 支持更广泛的浏览器
- 代码不够简洁，功能不够多

##### 3.x .x 版本

- 目前最新的稳定版本
- 不支持 IE7 和早期的 Firefox
- 支持 IE8，单效果不好

##### 版本号代号介绍

- alpha 版本：内部测试版。α 是希腊字母的第一个，表示最早的版本，bug很多。主要是给开发和测试人员找 bug 用的
- beta 版本：公开测试版本。主要是给 “部落” 用户和忠实用户测试用的。bug依然很多，但比 Alpha 版要稳定。这个阶段的版本还会不断增加新功能，如果你是发烧友，可以下载这个版本
- rc 版本：候选版本（Release Candidate）。该版本不再增加新的功能。类似于最终发行版之前的预览版（发行的候选版本）。此版本的发布，预示着最终发行版即将到来。作为普通用户，如果很着急，也可以下载 rc 版
- stable 版本：稳定版。在开源软件中，都有 stable 版本，这个是开源软件的最终发行版，用户可以放心大胆地使用

#### Bootstrap 的引用

进入官网下载用于生产的版本，然后解压

`dist` ：表示编译之后的文件

因为 Bootstrap 依赖 jQuery ，所以要先引入 jquery.js ，再引入 bootstrap.js

#### Bootstrap 基础模版的介绍

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

- http-equiv="X-UA-Compatible"

  参考：https://juejin.im/post/6844904087083810823

  ```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  ```

  这个是针对 IE8 以上浏览器的一个属性，IE8 以下版本无法识别。也就是说 IE8 以上浏览器遇到这个属性，会执行 `content` 的描述，`content` 大小写不敏感

  - content="IE=edge"

    IE 浏览器将执行当前支持的最高版本

  - content="IE=5"

    所有的版本都使用 IE5 的文档模式（IE5、IE6 使用的是 quirks mode ，译作“怪异模式”）

  - content=“IE=7”

    无论页面是否包含 `<!DOCTYPE>` 指令，均使用 IE7 的标准渲染模式

  - content=“IE=8”

    开启 IE8 的标准渲染模式。但由于 `X-UA_Compatible` 文件头，仅支持 IE8 以上版本，因此等同于冗余代码

  - content=“edge”

    Edge 模式。通知 IE 浏览器以最高级别的可用模式显示内容，这实际上破坏了“锁定”模式。即如果你有IE9的话说明你有IE789，那么就调用高版本的那个也就是IE9，页面不会进入 quirks 模式

  - content=“IE=edge, chrome=1”

    `IE=edge` ：表示 IE 应该使用最新的渲染引擎

    `chrome=1` ：表示 IE 应该使用 Chrome 渲染引擎（如果已安装）

    针对 IE6、IE7、IE8 等版本的浏览器插件 Google Chrome Frame ，可以让用户的浏览器外观依然是 IE 的菜单和界面，但用户在浏览网页时，实际上使用的是 Google Chrome 浏览器的内核

  - content=“IE=EmulateIE8”

    EmulateIE7 ：在标准模式指令下以IE7标准模式渲染页面，在Quirks混杂模式指令下以IE5模式渲染页面

    EmulateIE8 ：在标准模式指令下以IE8标准模式渲染页面，在Quirks混杂模式指令下以IE5模式渲染页面

    EmulateIE9 ：在标准模式指令下以IE9标准模式渲染页面，在Quirks混杂模式指令下以IE5模式渲染页面

- viewport 视口

  声明当前网页在移动端浏览器中展示的相关设置

  视口的作用：在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟的一个页面容器，会将页面缩放到设备这么大，然后进行展示

  属性解释：

  - width ：设置 viewport 的宽度

    device-width ：表示在移动端页面的宽度为设备的宽度

  - initial-scale ：初始化的缩放比例

  - minimum-scale ：最小的缩放比例

  - maximum-scale ：最大的缩放比例

  - user-scalable ：是否允许用户手动缩放（值可以写成 yes/no，也可以写成 1/0）

    如果设置了不允许用户缩放，那么最小缩放和最大缩放就没有意义了。二者是矛盾的

#### 使用 Bootstrap 搭建项目

1. 工程文件的目录结构

   ```
   ├─ Demo ·························· 项目所在目录
   └─┬─ /css/ ······················· 我们自己的CSS文件
     ├─ /font/ ······················ 使用到的字体文件
     ├─ /img/ ······················· 使用到的图片文件
     ├─ /js/ ························ 自己写的JS脚步
     ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
     ├─ /favicon.ico ················ 站点图标
     └─ /index.html ················· 入口文件
   ```

2. 下载并引入 Bootstrap 库文件

   先引入 html5shiv、respond、jQuery 这三个库文件，再引入 Bootstrap

3. 字符集、viewport、浏览器兼容模式 的设置

   ```html
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
   ```

   上诉三个 `<meta>` 标签必须放在最前面，任何其它内容都必须跟随其后

4. 设置站点图标

   ```html
   <link rel="shortcut icon" type="image/x-icon" href="123.ico">
   ```

5. 引入相应的第三方文件

   ```html
   <!-- 引入 Bootstrap 的核心样式文件（必须） -->
   <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
   
   <!-- 引入我们自己写的 css 样式文件 -->
   <link rel="stylesheet" href="css/my.css">
   ...
   
   <script src="lib/jquery/jquery.js"></script>
   <script src="lib/bootstrap/js/bootstrap.js"></script>
   
   <!-- 引入我们自己写的 js 文件 -->
   <script src="js/my.js"></script>
   ...
   ```

   先引入第三方文件，再引入我们自己写的文件

6. 默认字体

   ```html
   body{
     font-family: "Helvetica Neue",
                   Helvetica,
                   Microsoft Yahei,
                   Hiragino Sans GB,
                   WenQuanYi Micro Hei,
                   sans-serif;
   }
   ```

7. 完成页面空结构

   先划分好页面中的大容器，然后再具体看每一个容器中单独的情况

   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
   
   <head>
       <meta charset="utf-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
       <title>我的网站</title>
       <!--建议：第三方引用的css库放在上面，我们自己写的文件，都放在下面-->
   
       <!-- 引入 Bootstrap 的核心样式文件（必须） -->
       <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
       <!-- 引入我们自己写的 css 样式文件-->
       <link rel="stylesheet" href="css/main.css">
       <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
       <!--[if lt IE 9]>
       <script src="lib/html5shiv/html5shiv.min.js"></script>
       <script src="lib/respond/respond.min.js"></script>
       <![endif]-->
   </head>
   
   <body>
   <!-- 头部区域 -->
   <header id="header">
   </header>
   <!-- /头部区域 -->
   
   <!-- 广告轮播 -->
   <section id="main_ad"></section>
   <!-- /广告轮播 -->
   
   <!-- 特色介绍 -->
   <section></section>
   <!-- /特色介绍 -->
   
   <!-- 立即预约 -->
   <section></section>
   <!-- /立即预约 -->
   
   <!-- 产品推荐 -->
   <section></section>
   <!-- /产品推荐 -->
   
   <!-- 新闻列表 -->
   <section></section>
   <!-- /新闻列表 -->
   
   <!-- 合作伙伴 -->
   <section></section>
   <!-- /合作伙伴 -->
   
   <!-- 脚注区域 -->
   <footer></footer>
   <!-- /脚注区域 -->
   
   <script src="lib/jquery/jquery.js"></script>
   <script src="lib/bootstrap/js/bootstrap.js"></script>
   <script src="js/main.js"></script>
   </body>
   
   </html>
   ```

#### Bootstrap 中的 CSS 样式

##### 全局 CSS 样式

https://v3.bootcss.com/css/

如果需要哪个样式，直接根据文档的指引，在相应的元素里添加指定的类名即可

##### 布局容器：container 类

Bootstrap 需要为页面内容和栅格系统包裹一个 `.container` 容器。我们提供了两个作此用处的类。注意，由于 `padding` 等属性的原因，这两种 容器类不能互相嵌套

- `.container` 类用于固定宽度并支持响应式布局的容器
- `.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器

##### 栅格系统

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列

| 超小屏幕 手机 (<768px) | 小屏幕 平板 (≥768px)       | 中等屏幕 桌面显示器 (≥992px)                        | 大屏幕 大桌面显示器 (≥1200px) |            |
| :--------------------- | :------------------------- | :-------------------------------------------------- | :---------------------------- | ---------- |
| 栅格系统行为           | 总是水平排列               | 开始是堆叠在一起的，当大于这些阈值时将变为水平排列C |                               |            |
| `.container` 最大宽度  | None （自动）              | 750px                                               | 970px                         | 1170px     |
| 类前缀                 | `.col-xs-`                 | `.col-sm-`                                          | `.col-md-`                    | `.col-lg-` |
| 列（column）数         | 12                         |                                                     |                               |            |
| 最大列（column）宽     | 自动                       | ~62px                                               | ~81px                         | ~97px      |
| 槽（gutter）宽         | 30px （每列左右均有 15px） |                                                     |                               |            |
| 可嵌套                 | 是                         |                                                     |                               |            |
| 偏移（Offsets）        | 是                         |                                                     |                               |            |
| 列排序                 | 是                         |                                                     |                               |            |

##### 组件

一个按钮称之样式，两个按钮在一起，就可以称之为[组件](https://v3.bootcss.com/components/)

我们现在需要关注的不是组件怎么用，而是里面有哪些组件，避免重复造轮子：别人已经做得很好了，不需要我们再重复

##### JavaScript 插件

https://v3.bootcss.com/javascript/

---

### CSS 预处理器

CSS 预处理器式 CSS 语言的超集

CSS 预处理器定义里一种新的语言，其基本思想是：用一种专门的编程语言，为 CSS 增加一些编程的特性，无需考虑浏览器的兼容性问题，将 CSS 作为目标生成文件，然后开发者就只要使用这种语言进行编码工作

通俗的说，CSS 预处理器是用一种专门的编程语言，进行 Web 页面样式的设计，然后再编译成正常的 CSS 文件，以供项目使用

CSS 预处理器：**Sass（SCSS）、LESS**、**Stylus**、Turbine、Swithch CSS、CSS Cacheer、DT CSS

#### Less

Less 是一款比较流行的 CSS 预处理语言，支持变量、混合、函数、嵌套、循环、运算等

官网：http://lesscss.org/

中文网：http://lesscss.cn/

Bootstrap网站的文档：https://less.bootcss.com/

##### 注释

- 模版注释

  转换成 CSS 后，将会删除

  ```
  // 模版注释
  ```

- CSS 注释语法

  ```
  /* CSS注释语法 */
  ```

##### 变量

我们可以把要重复使用或经常修改的值，定义为变量，在需要使用的地方引用这个变量。这样就可以避免很多重复的工作量

```
@变量名: 变量值;

// 引用变量
body {
	background-color: @变量名;
}
```

##### 嵌套

普通 css 定义如下：

```css
.box {
  width: 100px;
}

.box > ul {
  color: red;
}

.box > ul > li {
  border: 1px solid yellow;
}

.box > ul > li: hover{
  color: #123;
}

.box #box2 {
  width: 50px;
}
```

在 Less 中定义如下：

```less
.box {
  width: 100px;
  > ul {
    color: red;
    > li {
      border: 1px solid yellow;
      
      &:hover {
        color: #123;
      }
    }
  }
  #box2 {
    width: 50px;
  }
}
```

##### Mixin（混合）

Mixin 的作用是把重复的代码放到一个类当中，每次只要引用类名，就可以引用到里面的代码了，非常方便

1. 在 Less 文件中定义一个类

   ```less
   .roundedCorners(@radius: 5px) {
     -moz-border-radius: @radius;
     -webkit-border-radius: @radius;
     border-radius: @radius;
   }
   ```

2. 在 Less 文件中引用上面这个类

   ```less
   #header {
     .roundedCorners;
   }
   
   #footer {
     .roundedCorners(10px);
   }
   ```

##### Import（导入）

在开发阶段，我们可以将不同的样式放到多个文件中，最后通过 `@import` 的方式合并。如果导入的文件是 `.less` 扩展名，则可以将扩展名省略掉

```less
@import "library";    // library.less
@import "typo.css";
```

##### 内置函数

[Less 函数手册](https://less.bootcss.com/functions/)

##### 在 HTML 中引用 Less

- 方法一：将 Less 文件，编译为 CSS 文件，最后引用这个 CSS 文件

  这种方法，在网页执行时，会多出编译的时间

- 方法二：在代码中直接引用 Less 文件

##### Less 的编译

Less 的编译，是指将 `.less` 文件生成 `.css` 文件

Less 的编译，依赖于 [NodeJS](https://nodejs.org/zh-cn/) 环境

###### 安装 Less 编译环境

```
npm install less -g   // -g 将 lessc 命令安装到全局环境
```

###### 将 `.less` 编译为 `.css`

```
lessc [option option=parameter ...] <source> [destination]
```

- 如果 source 设置为 `-' （破折号或连字符减号），则从 stdin 读取输入
- destination 为空，则保存到 stdout