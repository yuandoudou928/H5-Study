### HTML

#### H5中新增的语义标签

- `<section>` 区块
- `<article>` 文章
- `<header>` 页眉
- `<footer>` 页脚
- `<nav>` 导航栏
- `<aside>` 侧边栏
- `<mark>` 标记
- `<progress>` 进度
- `<time>` 日期

#### IE8及其以下版本的浏览器不支持H5和CSS3

解决方法：引入`html5shiv.js`文件

```html
<!-- 条件注释，只有IE能够识别 -->
<!-- [if lte ie 8]>
	<script src="html5shiv.min.js"></script>
<![endif]-->
```

上方代码是*条件注释*，虽然是注释，但是IE浏览器可以识别出来

- l：less	更小
- t：than   比
- e：equal   等于
- g：great 更大

条件注释的作用：当判断条件满足时，就会执行注销中的 html 代码，不满足时，就当作注释忽略掉

##### 条件注释常引入的脚步

- [html5shiv](https://github.com/aFarkas/html5shiv)：让浏览器可以识别 HTML5 的新标签。如header、footer、section等。
- [respond.js](https://github.com/scottjehl/Respond)：让低版本浏览器可以使用 CSS3 的媒体查询

#### DMO操作

##### 获取元素

- document.querySelector("selector")   通过CSS选择器获取符合条件的第一个元素
- document.querySelectorAll("selector")   通过CSS选择器获取符合条件的所有元素

##### 类名操作

- Node.classList.add("class")   添加class
- Node.classList.remove("class")   移除class
- Node.classList.toggle("class")   切换class，有则移除，无则添加
- Node.classList.contains("class")   检测class是否存在

#### 属性

- `draggable="true`   设置此元素可以拖拽

#### Web存储

##### 分类

- 会话存储：`window.sessionStorage`
  - 保存在内存中
  - 关闭窗口时销毁数据
  - 在同一个窗口下共享数据
  - 约5M
- 本地存储：`window.localStorage`
  - 保存在浏览器内存或者硬盘里
  - 永久保存，除非手动删除（比如清理垃圾的时候）
  - 可以多窗口共享数据
  - 约20M

注：只能存储字符串，可以将对象`JSON.stringify()`编码后存储

##### API

- setItem ( key, value )   新增或者更新 item
- getItem ( key )   读取存储内容
- removeItem ( key )   删除存储内容
- clear ()   清空所有存储内容
- key ( n )   根据索引获取存储内容

#### 网络状态

- `window.online`   网络连接时调用
- `window.offline`   网络断开时

#### 工具

- 查看网页大纲
  - http://h5o.github.io/
  - 使用方法
    - 将网址保存到书签栏
    - 去目标网页，点击书签栏中的网址
- 测试CSS在各个IE浏览器版本上的显示效果
  - IETester
- 测试浏览器 CSS3 的兼容性
  - http://www1.pconline.com.cn/pcedu/specialtopic/css3-doraemon/

#### 首行缩进

首行缩进两个汉子

```html
text-indent: 2em;
```

单位 `em` ，就是一个汉子的宽度

---

### CSS

#### CSS概述

Cascading Style Sheet，层叠样式表。

层叠式的含义

- 一个标签可以被多个css选择器选择，共同作用

#### CSS中的单位

##### 绝对单位

- `in`   英寸 Inches（1英寸 = 2.54 厘米）

- `cm`   厘米 Centimeters
- `mm`   毫米 Millimeters
- `pt`   点 Points，或者叫英镑（1英镑 = 1/72 英寸）
- `pc`   皮卡 Picas（1皮卡 = 12 英镑）

##### 相对单位

- `px`   像素。印刷单位相当于12个点
- `%`   百分比
- `em`
- `rem`

#### 字体属性

```css
text {
	font-size: 50px;								/* 字体大小 */
	line-height: 30px;							/* 行高。可以用百分比，表示字号的百分之多少 */
	font-family: "幼圆","黑体";			 /* 字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认 */
	font-style: italic;							/* italic 斜体； normal 不倾斜 */
	font-weight: bold;							/* 粗体:100~900 */
	font-variant: small-caps;				/* 小写变大写 */
}
```

- `vertical-align:middle`   指定行内元素或者表格单元格元素的垂直对齐方式

- 加粗、字号、行高、字体 可以连写。格式：`font:加粗 字号/行高 字体`

  ```css
  /* 400 是 nomal, 不加粗； 700 是 bold, 加粗*/
  /* font属性连写，至少要有 字体 和 字号，否则连写不生效 */
  font:400 14px/24px "宋体"
  
  font: 12px/200% "宋体";
  /* 即为： */
  font: 12px/24px "宋体";
  ```

- ```css
  /* 必须将英文字体放在最前面，这样所有中文就不能匹配英文字体，就会匹配后面的中文字体 */
  font-family: "Times New Roman", "微软雅黑", "宋体";
  ```

#### 文本属性

- `letter-spacing: 0.5;`   单个字母之间的间距
- `word-spacing: 1cm;`   单词之间的间距
- `text-decoration: none;`   字体修饰：none 去掉下划线；underline 下划线； line-through 中划线；overline 上划线
- `test-transform: lowercase;`   单词字体大小写：`uppercase` 大写；`lowercase` 小写；`capitalize` 首字母大写
- `color: red;`   字体颜色
- `text-align: center;`   在当前容器中的对齐方式：`left`、`right`、`center`、`justify`

#### 列表属性

```css
ul li {
  list-style-image: url(images/2.gif);    /* 列表项前设置图片 */
  margin-left: 80px; 											/* 左外边距 */
}
```

#### overflow 属性

- `visible`   默认值。多余的内容不剪切也不添加滚动条，会全部显示出来
- `hidden`     不显示超出部分
- `auto`         如果内容超出，则显示滚动条
- `scroll`     windows 平台下，无论内容是否超出，总是显示滚动条；Mac 平台下，与 `auto` 属性相同

#### 光标属性

```css
p:hover{
  cursor: pointer;   /* 鼠标放在标签上时，光标显示为手状 */
}
```

#### 标签属性

- `display`

  | 值                 | 描述                                                         |
  | :----------------- | :----------------------------------------------------------- |
  | none               | 此元素不会被显示。                                           |
  | block              | 此元素将显示为块级元素，此元素前后会带有换行符。             |
  | inline             | 默认。此元素会被显示为内联元素，元素前后没有换行符。         |
  | list-item          | 此元素会作为列表显示。                                       |
  | run-in             | 此元素会根据上下文作为块级元素或内联元素显示。               |
  | compact            | 此元素会根据上下文作为块级元素或内联元素显示。               |
  | marker             |                                                              |
  | table              | 此元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。 |
  | inline-table       | 此元素会作为内联表格来显示（类似 <table>），表格前后没有换行符。 |
  | table-row-group    | 此元素会作为一个或多个行的分组来显示（类似 <tbody>）。       |
  | table-header-group | 此元素会作为一个或多个行的分组来显示（类似 <thead>）。       |
  | table-footer-group | 此元素会作为一个或多个行的分组来显示（类似 <tfoot>）。       |
  | table-row          | 此元素会作为一个表格行显示（类似 <tr>）。                    |
  | table-column-group | 此元素会作为一个或多个列的分组来显示（类似 <colgroup>）。    |
  | table-column       | 此元素会作为一个单元格列显示（类似 <col>）                   |
  | table-cell         | 此元素会作为一个表格单元格显示（类似 <td> 和 <th>）          |
  | table-caption      | 此元素会作为一个表格标题显示（类似 <caption>）               |

#### 滤镜

```html
<!-- 让图片变成灰度度的效果 -->
<img src="test.png style="filter:grayscale()"/>
```

#### 背景属性

##### Css2.1 中常见背景属性

- `background-color: #ffffff;`   设置背景颜色
- `background-image: url ( abc.gif );`   将图片设置为背景
- `background-repeat: no-repeat;`   设置背景图片如何重复
  - 默认   横向、纵向平铺
  - `no-repeat`   不要平铺
  - `repeat-x`   横向平铺
  - `repeat-y`   纵向平铺
- `background-position: 100px 200px;`   设置背景图片在当前容器中的位置
  - 用像素值描述：`background-position: 向右偏移量 向左偏移量`   值为正数或者负数
  - 用单词描述：`background-position: 描述左右的单词 描述上下的单词`
    - 描述左右的单词：left、center、right
    - 描述上下的单词：top、center、bottom
- `background-attachment: scroll;`   设置背景图片是否跟着滚动条一起移动
  - `scroll`   滚动
  - `fixed`   不滚动

**注：**`background`   将上面多个属性写在一个声明中

##### Css3 中新增的一些背景属性

- `background-origin`   背景图原点
  - `background-origin: padding-box;`   从内边距开始显示背景图
  - `background-origin: border-box;`   从边框开始显示背景图
  - `background-origin: content-box;`   从内容区域开始显示背景图
- `background-clip`   设置背景图的绘制区域
  - `background-clip: border-box;`   默认。背景绘制在边框方框内（剪切成边框方框）
  - `background-clip: padding-box;`   背景绘制在内边距方框内（剪切成衬距方框）
  - `background-clip: content-box;`   背景绘制在内容方框内（剪切成内容方框）
- `background-size: 宽 高`   调整背景图片的尺寸
  - `background-size: 100px 100px;`   宽、高的具体像素值
  - `background-size: 50% 50%;`   相对于容器的大小。两个属性值相同，可以简写 `background-size: 50%;`
  - `background-size: 100% auto;`
  - `background-size: cover;`   图片始终填充满容器，且保证长宽比不变。如果一方有超出部分，则隐藏超出部分
  - `background-size: contain;`   将图片完整的显示在容器中，且保证长宽不变。可能会导致容器的部分区域为空白
- 多重背景

##### 颜色

颜色的表示

css2.1 中颜色的表示方法

- 单词表示法：background-color: red
- rgb表示法：background-color: rgb( 255, 0, 0 )
- 十六进制表示法：background-color: #000

c223 中新增的表示方法

- RGBA：background-color: rgba ( 255, 0, 0, 0.3)
  - 最后一位表示透明度，取值：0~1
- HSLA：background-color: hsla ( 240, 50%, 50%, 0.4 )
  - h：色调，取值0~360。0或360表示红色，120表示绿色，240表示蓝色
  - s：饱和度，取值0%~100%。值越大，越鲜艳
  - l：亮度，取值0%~100%。亮度越大，越白
  - a：透明度，取值0~1

![img](https://camo.githubusercontent.com/11d559d4de0f7f64ebb31cbe36ad94a4a1ab029c/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f313534352e706e67)

[配色宝典](https://www.uisdc.com/how-to-create-color-palettes)

设置透明度的其它方式

- `opacity: 0.3;`   会将整个盒子及其子盒子设置透明度
- `background: transparent;`   设置为完全透明

常有颜色

- #000	黑
- #fff       白
- #f00     红
- #222    深灰
- #333     灰
- #ccc      浅灰

##### 渐变

- 线性渐变：沿着某条直线朝一个方向产生渐变效果

  格式：`background-image:linear-gradient(方向, 起始颜色, 终止颜色)`

  方向可以是：`to left`、`to right`、`to top`、`to bottom` 或者角度 `30deg` （指顺时针方向30°）

  例：`background-image: (to right, yellow, green);`

- 径向渐变：从一个中心点开始，沿四周产生渐变效果

  格式：`background-image: radial-gradient(辐射的半径大小 中心位置, 起始颜色, 终止颜色);`

  中心位置：`to left`、`to right`、`to top`、`to bottom` 、`to center`或者 像素

  例：`background-image: radial-gradient(100px at 50px 50px, red, green);`

- 重复渐变：linear-repeating-gradient

##### clip-path

使用裁剪的方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏

- `clip-path: circle()`   裁剪出圆形区域
- `clip-path:polygon()`   裁剪出多边形区域
- `clip-path: (svg)`   导入 svg 矢量图，实现iOS圆角图标

#### 其它属性

##### 文字换行

- `ovferflow-wrap`   通用属性。用来说明当一个不能被分开的字符串（单词）太长而不能填充其包裹的盒子时，为了防止溢出，浏览器是否允许这样的单词**中断换行**
- `word-break`   指定来怎样在单词内断行
- `white-space`   空白处是否换行

#### CSS样式表

给HTML页面的标签添加各种样式，即**定义网页的显示效果**

语法格式

```
选择器 {
	k: v;
	属性名: 属性值;
}
```

- 选择器代表页面上的某类元素，选择器后一定是大括号
- 属性名后面必须用冒号隔开，属性值后用分号（最后一个属性可以不用分号）
- 多个属性值，用空格隔开

##### 内联样式表

在标签后面使用 `style` 属性。范围为当前标签。适合局部修改

```html
<body>
  <p style="color:white; background-color:green">行内样式表</p>
</body>
```

##### 内嵌样式表

在页面的 `<head>` 里添加 `<style>` 标签。范围为当前页面。适合单个页面设置统一样式

```html
<head>
	<style>
    p {
      font-weight:bold;
      color:red;
    }
	</style>
</head>
<body>
  <p>内嵌样式表</p>
</body>
```

##### 外部样式表

引入样式表文件

- 采用 `<link>` 标签

  ```html
  <link rel="stylesheet" type="text/css" href="a.css">
  ```

  `rel` 属性

  - `stylesheet`   定义的样式表
  - `alternate stylesheet`   候选样式表。在使用的时候 `<link>` 必须添加 `title` 属性

- 采用 `import` 。必须写在 `<style>` 标签中的第一句

  ```html
  <style>
  	@import url(a.css);
  </style>
  ```

##### CSS的继承性

- 关于文字样式的属性，都具有继承性。如：color、text-开头、line-开头、font-开头

- 关于盒子、定位、布局的属性，都不能继承

  ```html
  <style>
    div {
      color: red;
      border: 1px solid red;
    }
  </style>
  
  <body>
    <!-- 运行效果：三段文字都是红色，只有 <div> 有红色边框。即 <p> 继承类 color 属性，没有继承 border 属性  -->
    <div>
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
    </div>
  </body>
  ```

##### CSS的层叠性

层叠性，是css处理冲突的能力。即当不同的选择器，对一个标签的同一个样式，有不同的值，那么该使用哪个值？这时就需要css处理处理这种冲突的能力

当多个选择器，同时选择了某个元素，要按照如下顺序统计权重

1. id 选择器
2. 类选择器、属性选择器、伪类选择器
3. 标签选择器、伪元素选择器

**注：**

- 样式表类型相同（比如都是内嵌样式表）：ID选择器 > 类选择器 > 标签选择器
- 选择器类型相同（比如都是类选择器）：内联样式表 > 内嵌样式表 > 外部样式表
- 外部样式表的 ID选择器 > 内嵌样式表的标签选择器

- 权重不同时：ID选择器 > 类选择器 > 标签选择器
- 权重相同时：越接近匹配元素的样式权重越高
- 权重无穷大：`k: v !important`
  - 提升的只是一个属性的权重
  - 无法提升继承的权重
  - 不影响就近原则

![](https://camo.githubusercontent.com/bb72fdbec3f1f0f01657faff1a6523dce94e6a82/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303732375f323035302e706e67)

#### CSS选择器

指定CSS要作用的标签，那个标签的名称就是选择器。意为：选择哪个容器

| 选择器                                                       | 示例                  | 示例说明                                                  | CSS  |
| :----------------------------------------------------------- | :-------------------- | :-------------------------------------------------------- | :--- |
| [.*class*](https://www.runoob.com/cssref/sel-class.html)     | .intro                | 选择所有class="intro"的元素                               | 1    |
| [#*id*](https://www.runoob.com/cssref/sel-id.html)           | #firstname            | 选择所有id="firstname"的元素                              | 1    |
| [*](https://www.runoob.com/cssref/sel-all.html)              | *                     | 选择所有元素                                              | 2    |
| *[element](https://www.runoob.com/cssref/sel-element.html)*  | p                     | 选择所有<p>元素                                           | 1    |
| *[element,element](https://www.runoob.com/cssref/sel-element-comma.html)* | div,p                 | 选择所有<div>元素和<p>元素                                | 1    |
| [*element* *element*](https://www.runoob.com/cssref/sel-element-element.html) | div p                 | 选择<div>元素内的所有<p>元素                              | 1    |
| [*element*>*element*](https://www.runoob.com/cssref/sel-element-gt.html) | div>p                 | 选择所有父级是 <div> 元素的 <p> 元素                      | 2    |
| [*element*+*element*](https://www.runoob.com/cssref/sel-element-pluss.html) | div+p                 | 选择所有紧接着<div>元素之后的<p>元素                      | 2    |
| [[*attribute*\]](https://www.runoob.com/cssref/sel-attribute.html) | [target]              | 选择所有带有target属性元素                                | 2    |
| [[*attribute*=*value*\]](https://www.runoob.com/cssref/sel-attribute-value.html) | [target=-blank]       | 选择所有使用target="-blank"的元素                         | 2    |
| [[*attribute*~=*value*\]](https://www.runoob.com/cssref/sel-attribute-value-contains.html) | [title~=flower]       | 选择标题属性包含单词"flower"的所有元素                    | 2    |
| [[*attribute*\|=*language*\]](https://www.runoob.com/cssref/sel-attribute-value-lang.html) | [lang\|=en]           | 选择 lang 属性以 en 为开头的所有元素                      | 2    |
| [:link](https://www.runoob.com/cssref/sel-link.html)         | a:link                | 选择所有未访问链接                                        | 1    |
| [:visited](https://www.runoob.com/cssref/sel-visited.html)   | a:visited             | 选择所有访问过的链接                                      | 1    |
| [:active](https://www.runoob.com/cssref/sel-active.html)     | a:active              | 选择活动链接                                              | 1    |
| [:hover](https://www.runoob.com/cssref/sel-hover.html)       | a:hover               | 选择鼠标在链接上面时                                      | 1    |
| [:focus](https://www.runoob.com/cssref/sel-focus.html)       | input:focus           | 选择具有焦点的输入元素                                    | 2    |
| [:first-letter](https://www.runoob.com/cssref/sel-firstletter.html) | p:first-letter        | 选择每一个<p>元素的第一个字母                             | 1    |
| [:first-line](https://www.runoob.com/cssref/sel-firstline.html) | p:first-line          | 选择每一个<p>元素的第一行                                 | 1    |
| [:first-child](https://www.runoob.com/cssref/sel-firstchild.html) | p:first-child         | 指定只有当<p>元素是其父级的第一个子级的样式。             | 2    |
| [:before](https://www.runoob.com/cssref/sel-before.html)     | p:before              | 在每个<p>元素之前插入内容                                 | 2    |
| [:after](https://www.runoob.com/cssref/sel-after.html)       | p:after               | 在每个<p>元素之后插入内容                                 | 2    |
| [:lang(*language*)](https://www.runoob.com/cssref/sel-lang.html) | p:lang(it)            | 选择一个lang属性的起始值="it"的所有<p>元素                | 2    |
| [*element1*~*element2*](https://www.runoob.com/cssref/sel-gen-sibling.html) | p~ul                  | 选择p元素之后的每一个ul元素                               | 3    |
| [[*attribute*^=*value*\]](https://www.runoob.com/cssref/sel-attr-begin.html) | a[src^="https"]       | 选择每一个src属性的值以"https"开头的元素                  | 3    |
| [[*attribute*$=*value*\]](https://www.runoob.com/cssref/sel-attr-end.html) | a[src$=".pdf"]        | 选择每一个src属性的值以".pdf"结尾的元素                   | 3    |
| [[*attribute**=*value*\]](https://www.runoob.com/cssref/sel-attr-contain.html) | a[src*="runoob"]      | 选择每一个src属性的值包含子字符串"runoob"的元素           | 3    |
| [:first-of-type](https://www.runoob.com/cssref/sel-first-of-type.html) | p:first-of-type       | 选择每个p元素是其父级的第一个p元素                        | 3    |
| [:last-of-type](https://www.runoob.com/cssref/sel-last-of-type.html) | p:last-of-type        | 选择每个p元素是其父级的最后一个p元素                      | 3    |
| [:only-of-type](https://www.runoob.com/cssref/sel-only-of-type.html) | p:only-of-type        | 选择每个p元素是其父级的唯一p元素                          | 3    |
| [:only-child](https://www.runoob.com/cssref/sel-only-child.html) | p:only-child          | 选择每个p元素是其父级的唯一子元素                         | 3    |
| [:nth-child(*n*)](https://www.runoob.com/cssref/sel-nth-child.html) | p:nth-child(2)        | 选择每个p元素是其父级的第二个子元素                       | 3    |
| [:nth-last-child(*n*)](https://www.runoob.com/cssref/sel-nth-last-child.html) | p:nth-last-child(2)   | 选择每个p元素的是其父级的第二个子元素，从最后一个子项计数 | 3    |
| [:nth-of-type(*n*)](https://www.runoob.com/cssref/sel-nth-of-type.html) | p:nth-of-type(2)      | 选择每个p元素是其父级的第二个p元素                        | 3    |
| [:nth-last-of-type(*n*)](https://www.runoob.com/cssref/sel-nth-last-of-type.html) | p:nth-last-of-type(2) | 选择每个p元素的是其父级的第二个p元素，从最后一个子项计数  | 3    |
| [:last-child](https://www.runoob.com/cssref/sel-last-child.html) | p:last-child          | 选择每个p元素是其父级的最后一个子级。                     | 3    |
| [:root](https://www.runoob.com/cssref/sel-root.html)         | :root                 | 选择文档的根元素                                          | 3    |
| [:empty](https://www.runoob.com/cssref/sel-empty.html)       | p:empty               | 选择每个没有任何子级的p元素（包括文本节点）               | 3    |
| [:target](https://www.runoob.com/cssref/sel-target.html)     | #news:target          | 选择当前活动的#news元素（包含该锚名称的点击的URL）        | 3    |
| [:enabled](https://www.runoob.com/cssref/sel-enabled.html)   | input:enabled         | 选择每一个已启用的输入元素                                | 3    |
| [:disabled](https://www.runoob.com/cssref/sel-disabled.html) | input:disabled        | 选择每一个禁用的输入元素                                  | 3    |
| [:checked](https://www.runoob.com/cssref/sel-checked.html)   | input:checked         | 选择每个选中的输入元素                                    | 3    |
| [:not(*selector*)](https://www.runoob.com/cssref/sel-not.html) | :not(p)               | 选择每个并非p元素的元素                                   | 3    |
| [::selection](https://www.runoob.com/cssref/sel-selection.html) | ::selection           | 匹配元素中被用户选中或处于高亮状态的部分                  | 3    |
| [:out-of-range](https://www.runoob.com/cssref/sel-out-of-range.html) | :out-of-range         | 匹配值在指定区间之外的input元素                           | 3    |
| [:in-range](https://www.runoob.com/cssref/sel-in-range.html) | :in-range             | 匹配值在指定区间之内的input元素                           | 3    |
| [:read-write](https://www.runoob.com/cssref/sel-read-write.html) | :read-write           | 用于匹配可读及可写的元素                                  | 3    |
| [:read-only](https://www.runoob.com/cssref/sel-read-only.html) | :read-only            | 用于匹配设置 "readonly"（只读） 属性的元素                | 3    |
| [:optional](https://www.runoob.com/cssref/sel-optional.html) | :optional             | 用于匹配可选的输入元素                                    | 3    |
| [:required](https://www.runoob.com/cssref/sel-required.html) | :required             | 用于匹配设置了 "required" 属性的元素                      | 3    |
| [:valid](https://www.runoob.com/cssref/sel-valid.html)       | :valid                | 用于匹配输入值为合法的元素                                | 3    |
| [:invalid](https://www.runoob.com/cssref/sel-invalid.html)   | :invalid              | 用于匹配输入值为非法的元素                                | 3    |

##### 基本选择器

一个标签，可以同时被多个选择器选择

###### 标签选择器

选择的是页面上所有这种类型的标签，所以经常描述的是**共性**，无法描述某一个元素的**个性**

**页面上所有的标签，都可以是选择器**

```css
p {
	font-size: 20px; /* 所有 <p> 标签里面的内容，都将显示 20号 字体 */
}

/* 复合选择器 */
div, p {
  color: red;
}
```

###### ID选择器

针对页面上某一个特定的标签来使用，只能使用一次

**规定使用 `#` 来定义，使用时给标签添加 `id` 属性**

id 属性的命名

- 只能使用：字母、数字、下划线
- 必须以字母开头
- 不能与标签同名
- 同一个页面，不能出现相同的 id，哪怕它们的标签类型不一样

###### 类选择器

针对你想要的所有标签使用

**在样式表中以 `.` 开头，引用时为 `class=""`**

- 类选择器可以被多种类型的标签使用
- 同一个标签可以使用多个类选择器，用**空格**隔开
- 每个类的样式要尽可能的少，让标签使用多个类组合样式
- 尽可能使用类选择器，因为 js 要通过 id 属性得到标签，所有css层面尽量不要使用id，另外，我们认为一个有id属性的元素，有动态效果。即：**类上样式，id上行为**，意思为：`class`属性交给css使用，`id`属性交给js使用

###### 通用选择器

将匹配页面上的任何标签。不建议使用，有些IE版本不支持。页面上标签越多，效率越低

```css
* {
  margin-left: 0px;
}
```

##### 高级（扩展）选择器

###### 后代选择器

用**空格**隔开

```html
<style type="text/css">
  .div1 p {
    color: red;
  }
</style>

<body>
  <div class="div1">
    <p>
      后代选择器
    </p>
  </div>
</body>
```

- 空格表示后代。匹配的两个标签不一定是连续紧挨着的，中间可以间隔其它标签，只要保持一个后代的关联即可。也就是说，选择的是后代，不一定是儿子
- 可以使用标签选择器、ID选择器、类选择器组合
- 如果同一个元素，使用标签选择器后面跟的是这个元素的ID选择器或者类选择器，那么不要添加空格

###### 交集选择器

```
选择器1选择器2... {
	属性名: 属性值;
}
```

- 选择器之间没有任何连接符号
- 选择器可以是标签名、id或者class
- 3个及其以上的选择器，是IE7及以上版本开始兼容

###### 并集选择器

```
选择器1,选择器2,... {
	属性名: 属性值;
}
```

- 选择器之间使用 `,` 连接
- 选择器可以是标签名、id或者class

清除有默认样式的样式表

```css
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{
    margin: 0px;
    padding: 0px;
}
```

##### 其它选择器

###### 子代选择器

IE7及以上版本开始兼容

```css
div>p {
	color: red;
}
```

###### 序选择器

IE8及以上版本开始兼容

```css
<style type="text/css">
	/* 设置无序列表<ul>中的第一个<li>字体为红色 */
  ur li:first-child {
    color: red;
  }
</style>
```

IE7及以下版本使用

```css
<style type="text/css">
	/* 用类选择器来选择第一个和最后一个 */
  ul li.first {
    color: red;
  }
  ul li.last {
    color: red;
  }
</style>

<body>
	<ul>
		<li class="first">列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li class="last">列表4</li>
	</ul>
</body>
```

###### 下一个兄弟选择器

IE7及以上版本开始兼容

```css
<style type="text/css">
	/* 选择的是<h3>后面的第一个兄弟<p> */
  h3+p {
    color: red;
  }
</style>
```

##### 伪类选择器

同一个标签，根据**不同的状态，有不同的样式**。使用 `:` 表示

- 静态伪类

  只能用于**超链接**的样式

  - `:link`   超链接点击之前
  - `:visited`   超链接被访问过后

  **注：**超链接的四种状态，必须按照固定顺序写：`a:link`、`a:visited`、`a:hover`、`a:active`，不然将失效

- 动态伪类

  所有标签都能使用

  - `:hover`   悬停：鼠标放在标签上的时候
  - `:active`   激活：鼠标点击标签，但不松手时
  - `:focus`   标签获得焦点的时候

##### 浏览器选择器的兼容情况

- IE6

  标签选择器、id选择器、类选择器、后代选择器、交集选择器、并集选择器、通配符选择器

- IE7

  子代选择器、下一个兄弟选择器

- IE8

  序选择器

#### CSS变量

##### 自定义变量

```css
--变量名: 变量值;
```

##### 使用自定义变量

```css
--red-background: red;

.box {
  background: var(--red-background, black);  // black：在变量不生效的情况下，的备用值
}
```

##### 层级CSS变量

你创建的变量，不但可以在你声明变量的元素里面使用，同时也可以在该元素的子元素里面使用。这种效应称为 cascading（层叠）

因为层叠的效果，CSS 变量通常会定义在 `:root` 元素里

就像 `html` 是 `body` 的容器一样，你也可以认为 `:root` 元素是你整个 HTML 文档的容器

在 `:root` 创建的变量，在整个网页里面都能生效

```css
:root {
  --red-background: red;
}
```

当你在 `:root` 里创建变量时，这些变量的作用域是整个页面。如果在元素里创建相同的变量，会重写 `:root` 变量设置的值

##### 使用媒体查询更改变量

media query（媒体查询）

CSS 变量可以简化媒体查询的方式。

```css
  @media (max-width: 350px) {
    :root {
      
      /* add code below */
      --penguin-size: 200px;
      --penguin-skin: black;
      /* add code above */
      
    }
  }
```

#### CSS盒子模型

盒子的主要属性

- width 和 height：内容的宽度、高度
- padding：内边距
- margin：外边距
- border：边框

![](https://camo.githubusercontent.com/6baa811cfa63e095e352f34c51596310bb11b991/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30332d6373732d32372e6a7067)

![](https://camo.githubusercontent.com/11bdd927ad5739ea52184ed65513dd89ac66ec5a/687474703a2f2f696d672e736d79687661652e636f6d2f323031352d31302d30332d6373732d33302e6a7067)

##### 盒子的margin

- `<body>`标签也有 margin

  整个网页最大的盒子是 `<document>` ，即浏览器。而 `<body>` 是 `<document>` 的儿子。浏览器给 `<body>` 的默认 margin 是 8px。所以 `<body>` 占据的是页面的一部分区域，而不是全部区域

- 盒子居中

  margin 的值可以为 auto，表示自动。当 left、right 两个方向都为 auto 时，盒子就居中了

  ```css
  margin-left: auto;
  margin-right: auto;
  
  简写：
  margin:0 auto;
  ```

  1. 只有标准流的盒子，才能使用 `margin: 0 auto;`，盒子浮动、绝对定位、固定定位后，都不能使用
  2. 使用 `margin: 0 auto;` 的盒子，必须设置明确的 width
  3. `margin:0 auto;` 是让盒子居中，不是里面的文本居中。让文本居中：`text-align: center;`

- 善用父亲的padding，而不是儿子的margin

  `margin` 这个属性，本质上描述的是兄弟和兄弟之间的距离，最好不要用这个marign表达父子之间的距离

##### 盒子的真实占有宽高

​	真实占有宽度：左border + 左padding + width + 右padding + 右border

​	真实占有高度：上border + 上padding + height + 下padding + 下border

​	*如果想保持一个盒子的真实占有宽度不变，那么加width的时候就要减padding。加padding的时候就要减width*。因为盒子变胖了是灾难性的，这会把别的盒子挤下去

##### 盒子的 padding

padding 就是内边距。在 css2.1 及以下，padding 的背景颜色一定和内容区域的颜色相同，即 `background-color` 将填充 border 以内的区域

设置 padding 的方法

- 写小属性

  ```css
  div {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
  }
  ```

- 写综合属性：顺时针方向，用空格隔开：上、右、下、左

  ```css
  div {
    padding: 10px 20px 30px 40px;   
  }
  ```

  - 如果只写了三个，则为：上、右、下。左和右一样
  - 如果只写了两个，则为：上下、右左

默认带有 padding 的标签

- `<ul>`

  padding-left = 40px

##### 盒子的 border

边框三要素：像素（粗细）、线型、颜色

`border:`的拆分

- 按三要素

  - `border-width: 10px;`   边框宽度
  - `border-style: solid;`   线型
  - `border-color: red;`   颜色

- 按方向

  - `border-top: 10px solid red;`   上边框
  - `border-right: 10px solid red;`   右边框
  - `border-bottom: 10px solid red;`   下边框
  - `border-left: 10px solid red;`   左边框

- 按三要素和方向拆分

  ```css
  div {
    border-top-width: 10px;
  	border-top-style: solid;
  	border-top-color: red;
  	border-right-width: 10px;
  	border-right-style:solid;
  	border-right-color:red;
  	border-bottom-width:10px;
  	border-bottom-style: solid;
  	border-bottom-color: red;
  	border-left-width: 10px;
  	border-left-style: solid;
  	border-left-color: red;
  }
  ```

  ##### border-image 属性

#### CSS的定位属性

##### 相对定位

让元素相对于自己原来的位置，进行位置调整（可用于盒子位置的微调）

相对定位不脱标，真实位置不变

```css
position: relative;   /* 相对定位：相对于自己原来的位置 */
left: 50px;   /* 横坐标：正值表示向右偏移，负值表示向左偏移 */
top: 50px;   /* 纵坐标：正值表示向下偏移，负值表示向上偏移 */

left		盒子右移
right		盒子左移
top			盒子下移
bottom	盒子上移
				负数表示相反方向
```

相对定位的作用

1. 微调元素
2. 做绝对定位的参考，子绝父相

##### 绝对定位

定义横纵坐标。原点在父容器的左上角或左下角。横坐标用 `left` 表示，纵坐标用 `top` 或者 `bottom` 表示

绝对定位会脱离标准文档流。绝对定位后，标签就不区分行内元素和块级元素了，不需要 `display: block` 就可以设置宽、高了

```css
position: absolute;   /* 绝对定位 */
left: 10px;   				/* 横坐标 */
top/bottom: 10px;   	/* 纵坐标 */
```

绝对定位的参考点

- 如果用 `top` 描述，那么参考点就是页面的左上角，而不是浏览器的左上角
- 如果用 `bottom` 描述，那么参考点就是浏览器首屏窗口尺寸，对应页面的左下角
- 如果父辈元素中也使用了定位（无论是相对定位、绝对定位，还是固定定位），那么都将以父辈（不一定 是父亲，也可能是更上一级）的左上角为参考点

绝对定位的元素，无视参考元素的 padding

让绝对定位后的盒子进行居中

```css
div {
  width: 400px;
  height: 400px;
  position: absolute;   /* 绝对定位 */
  left: 50%;						/* 首先，让左边边线居中 */
  top: 0px;
  margin-left: -200px;	/* 然后，向左移动宽度的一半 */
}
```

##### 固定定位

相对于浏览器窗口进行定位。无论页面如何滚动，这个盒子显示的位置都不变

固定定位的用途

1. 网页右下角的“返回到顶部”

   ```css
       <style>
           .backtop {
               width: 60px;
               height: 60px;
               background-color: gray;
               text-align: center;
               line-height: 30px;
               color: white;
               text-decoration: none;
               position: fixed;
               bottom: 100px;
               right: 30px;
           }
       </style>
   ```

2. 顶部导航条

##### z-index 属性

表示谁压着谁。数值大的压盖数值小的

- 属性值大的位于上层，属性值小的位于下层
- 值没有单位，使用正整数。默认值为0
- 如果值一样，代码里后写的压盖先写的
- 定位了的元素，压盖没有定位的元素
- 只有定位了的元素，才能设置 z-index，即相对定位、绝对定位、固定定位都可以使用，浮动的元素不能使用
- 从父现象：父亲怂了，儿子再牛逼也没用。意思是，如果父亲1比父亲2大，那么，即使儿子1比儿子2小，儿子1也能在最上层

#### CSS Hack

- CSS Hack 的方式：不合法，但可以生效的写法
- 可以用来解决一些浏览器的兼容性问题
- 缺点：难理解、难维护、易失效（比如浏览器升级后，hack 可能会失效）
- 替代方案
  - 特性检测
  - 针对性加 class

---

### CSS3

#### CSS3 介绍

##### css3 的现状

- 浏览器支持程度不够好，有些需要添加**私有前缀**
- 移动端支持优于PC端
- 不断改进中
- 应用相对广泛

##### 应用策略：渐进增强

- 坚持**渐进增强**的原则：让低版本浏览器能够正常访问页面，高版本浏览器用户体验更好
- 考虑用户群体
- 遵照产品方案

##### 浏览器版本问题

- Chrome浏览器 version 46+
- Firefox浏览器 firefox 42+

#### CSS3 选择器

##### 属性选择器

属性选择器的标志性符号是 `[]`

匹配含义

```
^:开头	$:结尾	*:包含
```

格式

- `E[title]`   选中页面中的E元素，并且E存在 title 属性
- `E[title = "abc"]`   选中页面中的E元素，并且E需要有 title 属性，且属性值完全等于 abc
- `E[attr ~= val]`   选择具有 attr 属性且属性值为：用空格分隔的字词列表，其中一个等于 val 的E元素
- `E[attr |= val]`   表示要么是一个单独的属性值，要么这个属性值以 `-` 分隔的
- `E[title ^= "abc"]`   选中页面的E元素，并且E需要带有 title 属性，且属性值以 abc 开头
- `E[title $= "abc"]`   选中页面的E元素，并且E需要带有 title 属性，且属性值以 abc 结尾
- `E[title *= "abc"]`   选中页面的E元素，并且E需要带有 title 属性，且属性值任意位置包含 abc

##### 结构伪类选择器

伪类选择器的标志性符号是 `:`

###### 第一类

- `E:first-child`   匹配父元素的第一个子元素E
- `E:last-child`   匹配父元素的最后一个子元素E
- `E:nth-child(n)`   匹配父元素的第n个子元素E。盒子的编号从 1 开始
- `E:nth-child(odd)`   匹配父元素中，编号为奇数的所有子元素
- `E:nth-child(even)`   匹配父元素中，编号为偶数的所有子元素
- `E:nth-last-child(n)`   匹配父元素的倒数第n个子元素E

###### 第二类

- `E:first-of-type`   匹配同类型中，第一个同级兄弟元素E
- `E:last-of-type`   匹配同类型中，最后一个同级兄弟元素E
- `E:nth-of-type(n)`   匹配同类型中，第n个同级兄弟元素E
- `E:nth-last-of-type(n)`   匹配同类型中，倒数第n个同级兄弟元素E

###### 第三类

- `E:empty`   匹配没有任何子元素的元素E（包括空格等text节点）
- `E:target`   匹配相关URL指向的元素E。要配合锚点使用

##### 伪元素选择器

伪元素选择器的标志性符号是 `::`

###### 第一类

前面：依据对象树的逻辑结构

- `E::before`   设置在元素E前面的内容，配合 `content` 属性使用
- `E::after`   设置在元素E后面的内容，配合 `content` 属性使用

第二类

- `E::first-letter`   设置元素E里面，第一个字符的样式
- `E::first-line`   设置元素E里面，第一行的样式
- `E::selection`   设置元素E里面，被鼠标选中区域的样式

#### CSS3 中的属性

- `text-shadow`   设置文本阴影

  ```css
  text-shadow: 10px 10px 20px red;   /* 水平位移 垂直位移 模糊程度 阴影颜色 */
  ```

  例：凹凸文字效果

  ```html
      <style>
          .box1 {
              width: 400px;
              height: 0px auto;
              background-color: #666;
              font-size: 50px;
              text-align: center;
              font-weight: bold;
              color: #666;
          }
  
        /* text-shadow 可以设置多个阴影，每个阴影之间使用逗号隔开 */
          .tu {
              text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
          }
  
          .ao {
              text-shadow: -1px -1px 1px #000, 1px 1px 1px #fff;
          }
      </style>
  
      <body>
          <div class="box1">
              <p class="tu">凸出的文字</p>
              <p class="ao">凹陷的文字</p>
          </div>
      </body>
  ```
  
- 边框

  - 圆角边框：`border-radius`

    ```css
    单个属性的写法：
    border-top-left-radius: 50px 120px;   /* 水平半径 垂直半径 */
    border-top-right-radius: 50px 120px;
    border-bottom-left-radius: 50px 120px;
    border-bottom-right-radius: 50px 120px;
    
    复合写法：
    border-radius: 50px 120px;   /* 水平半径 垂直半径 */
    border-radius: 50px/120px;   /* 水平半径/垂直半径 */
    border-radius: 20px 60px 100px 140px;   /* 从左上开始，顺时针赋值。如果当前角没有值，则去对角的值 */
    
    最简洁的写法：
    border-radius: 60px;   /* 四个角的半径相同 */
    ```

  - 边框的阴影

    ```css
    box-shadow: 15px 21px 48px -2px #fff inset;
    /* 水平偏移 垂直偏移 模糊程度 阴影大小 阴影颜色 阴影方向 */
    ```

    - 水平偏移：正值向右，负值向左
    - 垂直偏移：正值向下，负值向上
    - 模糊程度：不能为负值
    - 阴影方向：inset 表示内阴影，不写默认表示外阴影

    设置边框的阴影不会改变盒子的大小，即不会影响兄弟元素的布局

  - 图片边框

    ```css
    border-image-source: url("123.png");   /* 图片边框的路径 */
    border-image-slice: 20;								 /* 图片边框的裁剪 */
    border-image-width: 27px;							 /* 图片边框的宽度 */
    border-image-repeat: stretch;					 /* 边框图片的重复方式 */
    																			 /* repeat：正常平铺，图片可能显示不完整 */
    																			 /* round：平铺，保证图片显示完整 */
    																			 /* stretch：拉伸显示 */
    缩写：
    border-image:url("123.png") 20/27px round;
    ```

    ![](https://camo.githubusercontent.com/25ee6ab3b5882e155f8be89eda52c614d375deaf/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230375f323035312e706e67)

- 过渡：transition

  过渡是CSS3中具有颠覆性的一个特征，可以实现元素**不同状态间的平滑过渡（补间动画）**。经常用来制作动画效果

  补间动画：自动完成从起始状态到终止状态的过渡。不用管中间的状态

  帧动画：通过一帧一帧的画面，按照固定顺序和速度播放

  - `transition-property: all;`   设置参与过渡的属性。如果希望所有属性的发生过渡，就使用 `all`。其它没有过渡的属性，直接改变
  - `transition-duration: 5s;`   过渡的持续时间
  - `transition-timing-function: linear;`   运动曲线
    - `linear`   线性
    - `ease`   减速
    - `ease-in`   加速
    - `ease-out`   减速
    - `ease-in-out`   先加速后减速
  - `transition-delay: 3s;`   过渡延迟。多长时间后执行这个过渡动画

  综合写法

  ```css
  transition: 让哪些属性进行过渡 过渡持续时间 运动曲线 延迟时间;
  transition: all 5s linear 3s;
  ```

- 2D 转换

  转换是CSS3中具有颠覆性的一个特征，可以实现元素的**位移、旋转、变形、缩放**，甚至支持矩阵方式

  转换配合过渡和动画，可以取代大量早期只能靠Flash才可以实现的效果

  CSS3中通过 `transform` 来实现 2D 或 3D 转换

  2D 转换包括：缩放、位移、旋转

  - 缩放：scale

    ```css
    transform: scale(x, y);
    ```

    - x：水平方向的缩放倍数
    - y：垂直方向的缩放倍数
    - 如果只写一个值，则表示等比例缩放
    - 取值大于1表示放大，小于1表示缩小。不能为百分比

  - 位移：translate

    ```css
    transform: translate(水平位移， 垂直位移);
    ```

    - 参数值为百分比，相对于自身移动
    - 正值：向右和向下移动
    - 负值：向左和向上移动
    - 如果只写一个值，则表示水平移动

    ```css
    让绝对定位后的盒子居中[推荐]：
    .box9 {
      width: 200px;
      height: 200px;
      background-color: coral;
      position: absolute;   					/* 绝对定位的盒子 */
      margin-left: 50%;								/* 首先，让做变线居中 */
      margin-top: 50px;
      transform: translate(-50%);			/* 然后，利用translate，让左位移自己宽度的一半 */
    }
    ```

  - 旋转：rotate

    ```css
    transform: rotate(角度);
    ```

    - 正值：顺时针旋转
    - 负值：逆时针旋转

    设置旋转时的坐标原点：`transform-origin`

    ```css
    transform-origin: 水平坐标 垂直坐标;
    
    transform-origin: center bottom;   /* 旋转时，以盒子底部的中心为坐标原点 */
    ```

  - 倾斜

- 3D 转换

  3D 坐标系（左手坐标系）

  ![](https://camo.githubusercontent.com/bc8575a403326e5e8b0b6181ff626222cbe92b99/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230385f323031302e706e67)

  - 旋转：rotateX、rotateY、rotateZ

    ```css
    transform: rotateX(45deg);   /* 绕 X 轴旋转45度 */
    transform: rotateY(45deg);   /* 绕 Y 轴旋转45度 */
    transform: rotateZ(45deg);   /* 绕 Z 轴旋转45度 */
    ```

    - 所有3D旋转，面向正方向去看，都是顺时针旋转

  - 位移：translateX、translateY、translateZ

    ```css
    transform: translateX(100px);   /* 沿 X 轴移动 */
    transform: translateY(100px);   /* 沿 Y 轴移动 */
    transform: translateZ(100px);   /* 沿 Z 轴移动 */
    ```

  - 透视：perspective

    电脑显示屏是一个2D平面，图像之所以具有立体感（3D效果），其实只是一个视觉上的呈现，通过透视可以实现

    ```css
    perspective: 透视距离;
    ```

    - 透视，设置的是用户的眼睛到平面的距离
    - 透视效果只是视觉上的呈现，并不是真正的3d

  - 3D 呈现：transform-style

    ```css
    transform-style: preserve-3d;   /* 让子盒子位于三维空间里 */
    transform-style: flat;					/* 让子盒子位于此元素所在平面内（子盒子被扁平化） */
    ```


#### CSS3 中的盒子模型

CSS3 中，允许开发人员指定盒子宽度、高度的计算方式

- 外加模式（默认）

  ```css
  box-sizing: content-box;
  ```

  1. 此时设置的 width 和 height 是内容区域的高度
  2. 盒子的实际宽度 = 设置的 width + padding + border
  3. 此时改变 padding 和 border 的大小，内容区域的宽高不变，盒子的宽高会改变

- 内减模式

  ```css
  box-sizing: border-box;
  ```

  1. 此时设置的 width 和 height 是盒子的总宽高
  2. 盒子的实际宽度 = 设置的 width
  3. 此时改变 padding 和 border 的大小，会改变内容的宽高，盒子的总宽高不变

#### CSS3 的兼容问题

处理兼容性问题常见的方法：为属性添加**私有前缀**。如此方法不能解决，应尽量避免使用，无需刻意去处理CSS3的兼容性问题

- `-webkit-`   谷歌、苹果
- `-moz-`   火狐
- `-ms-`   IE
- `-o-`   欧朋

```html
<style>
        .box2 {
            width: 200px;
            height: 200px;
            border: 2px solid red;
            background: -webkit-linear-gradient(left, greenyellow, yellow);
        }
</style>

<body>
  <div class="box2"></div>
</body>
```

#### CSS3 中的动画

动画是CSS3中具有颠覆性的特征，可通过设置多个节点来精确的控制一个或一组动画，常用来实现复杂的动画效果

##### 定义动画的步骤

1. 通过 `@keyframes` 定义动画
2. 将这段动画通过百分比，分割成多个节点
3. 给各个节点分别定义各属性
4. 在指定的元素里，通过 `animation` 属性调用动画

```
定义动画：
@keyframes 动画名 {
	from {初始状态}
	to {结束状态}
}

调用动画：
animation: 动画名 持续时间 执行次数 是否反向 运动曲线 延迟执行的时间(infinite 表示无限次);
```

- `animation-name`   动画名称（必选）
- `animation-duration`   执行一次动画的持续时间（必选）
- `animation-iteration-count`   动画执行的次数，`infinite` 表示无限次
- `animation-direction: alternate;`   动画的方向
  - `normal`   正常
  - `alternate`   反向
- `animation-delay`   动画延迟执行的时间
- `animation-fill-mode: forwards;`   动画结束时，盒子的状态
  - `forwards`   保持动画结束后的状态
  - `backwards`   动画结束后，回到最初的状态
- `animation-timing-function: ease-in`   运动曲线
  - `linear`
  - `ease-in-out`
  - `steps(2)`   动画间断的分成2步执行

```html
    <style>
        /* 定义一组动画 */
        @keyframes move1 {
            from {
                transform: translateX(0px) rotate(0deg);
            }

            to {
                transform: translateX(300px) rotate(500deg);
            }
        }

        /* 定义多组动画 */
        @keyframes move2 {
            0% {
                transform: translateX(0px) translateY(0px);
                background-color: red;
                border-radius: 0;
            }

            25% {
                transform: translateX(500px) translateY(0px);

            }

            /*动画执行到 50% 的时候，背景色变成绿色，形状变成圆形*/
            50% {
                /* 虽然两个方向都有translate，但其实只是Y轴上移动了200px。
                因为X轴的500px是相对最开始的原点来说的。可以理解成此时的 translateX 是保存了之前的位移 */
                transform: translateX(500px) translateY(200px);
                background-color: green;
                border-radius: 50%;
            }

            75% {
                transform: translateX(0px) translateY(200px);
            }

            /*动画执行到 100% 的时候，背景色还原为红色，形状还原为正方形*/
            100% {
                /*坐标归零，表示回到原点。*/
                transform: translateX(0px) translateY(0px);
                background-color: red;
                border-radius: 0;
            }
        }

        .box1 {
            width: 100px;
            height: 100px;
            background-color: red;
            animation: move2 4s;
        }
    </style>

    <body>
        <div class="box1"></div>
    </body>
```

#### Flex 布局

1. flex 布局的子元素不会脱离标准文档流，很好的遵从了“流的特性”

2. flex 是一种现代的布局方式，是W3C第一次提供真正用于布局的CSS规范。flex 提供了非常丰富的属性，非常灵活，让布局的实现更佳多样化，且方便易用

3. 唯一的缺点是不支持低版本的IE浏览器

   ![](https://camo.githubusercontent.com/a3fb6e8113482ba59d49354b96a0ce766a6600fa/687474703a2f2f696d672e736d79687661652e636f6d2f32303139313030355f313230302e706e67)

**弹性盒子：**指的是使用 `display: flex;` 或 `display: inline-flex;` 声明的容器

**子元素/弹性元素：**指的是父容器里面的子元素们（父容器被声明为 flex 的情况下）

**主轴：**flex 容器的主轴，默认是水平方向，从左向右

**侧轴：**与主轴垂直的轴，默认是垂直方向，从上往下

- `flex-direction`   设置盒子中子元素排列的方向
  - `row`   从左到右水平排列子元素（默认）
  - `column`   从上到下排列子元素
  - `row-reverse`   从右到左排列子元素
  - `column-reverse`   从下到上排列子元素
- `flex-wrap`   控制子元素溢出时的换行处理方式
- `justify-content`   控制子元素在主轴上的对齐方式
  - `flex-start`   从主轴的起点对齐（默认）
  - `flex-end`   从主轴的终点对齐
  - `center`   居中对齐
  - `space-around`    在父盒子里平分
  - `space-between`   两端对齐，平分
- `align-items`   设置子元素的侧轴上的对齐方式
  - `flex-start`   从侧轴开始的方向对齐
  - `flex-end`   从侧轴的结束方向对齐
  - `baseline`   基线对齐
  - `center`   居中对齐
  - `stretch`   拉伸
- `flex`   设置子元素的权重

#### Web字体

##### 字体常见格式

###### TureTpe格式：.ttf

.ttf 字体是Windows和Mac中最常见的字体，是一种RAW格式

支持浏览器：IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+

###### OpenType格式：.otf

.otf 字体被认为是一种原始的字体格式，其内置在TureType的基础上

支持浏览器：Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile、Safari4.2+

###### Web Open Font Format格式：.woff

.woff 字体是Web字体中最佳的格式，它是一个开放的TrueType/OpenType的压缩版，同时也支持元数据包的分离

支持浏览器：IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+

###### Embedded Open Type格式：.eot

.eot 字体是IE专用字体，可以从TrueType创建此格式的字体

支持浏览器：IE4+

###### SVG格式：.svg

.svg 字体是基于SVG字体渲染的一种格式

支持浏览器：Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+

##### 常见的字体分类

![](https://camo.githubusercontent.com/240ec77e7986278bc8342cbe03e3a2681a656daa/687474703a2f2f696d672e736d79687661652e636f6d2f32303139313030345f313130312e706e67)

- **serif（衬线体）**

  在字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同

  常见的衬线体

  - 宋体
  - 楷体
  - Times New Roman

- **sans-serif（无衬线体）**

  笔画粗细基本一致，只剩下主干，造型简明有力，起源也很晚。适用于标题、广告等，识别性高

  常见的无衬线体

  - 黑体
  - Windows 平台默认的中文字体：微软雅黑（Microsoft Yahei）
  - Windows 平台默认的英文字体：Arial
  - Mac & iOS 平台默认的中文字体：苹方（PingFang SC）
  - Mac & iOS 平台默认的英文字体：San Francisco
  - Android 平台默认字体：Droid Sans

[如何优雅的选择字体](https://segmentfault.com/a/1190000006110417)

##### 字体族

CSS 中的字体族，可以理解成是某一类字体。常见的字体族可以分为五类

- serif：衬线体

- sana-serif：无衬线体

- monospace：等宽体

  每一个字母所占的宽度是相同的。写代码的字体尽量用等宽体

- cursive：手写体

  比如徐静蕾手写体

- fantasy：梦幻体

  比如一些艺术体

这五类字体族不代表某一个具体的字体，而是当你在 CSS 中指定字体族的时候，系统就有可能在字体族中找出一种字体来显示

![](https://camo.githubusercontent.com/5bbab8956d37713181cb20db04bcbc4cb431a979/687474703a2f2f696d672e736d79687661652e636f6d2f32303139313030345f313133302e706e67)

[参考链接](http://www.ayqy.net/blog/serif%EF%BC%8Csans-serif%EF%BC%8Cmonospace%EF%BC%8Ccursive%E5%92%8Cfantasy/)

##### 多字体 fallback 机制

多字体 fallback 机制：当指定的字体找不到（或者某些文字不支持这个字体）时，那就接着往后找

```css
.div1{
    font-family: "PingFang SC", "Microsoft Yahei", monospace;
}
```

上方 CSS 代码的意思是：让指定标签元素中的文字，在 Mac & iOS 平台用苹方字体，在 Win 平台用微软雅黑字体，如果这两个字体都没有，就随便找一个等宽的字体进行渲染

- 写 CSS 代码时，字体族不需要带引号
- 有些 Mac 用户会安装 Office 等软件，安装这些软件后，系统会顺带安装微软雅黑字体。此时，写 CSS 代码时，如果写成 `"Microsoft Yahei", "PingFang SC"`这种顺序，可能导致有些 Mac 用户用微软雅黑来显示字体

##### 下载字体

- http://www.zhaozi.cn/
- http://www.youziku.com/

##### WebFont的使用步骤

1. 在网站 http://iconfont.cn/webfont#!/webfont/index 下载字体压缩包
2. 参考压缩包里面的 Demo 使用字体

##### 图标字体

1. 打开网站http://iconfont.cn/，找到想要的图标，加入购物车
2. 点击购物车中的"下载代码"
3. 参考压缩包里面的 Demo

##### 相关网站

###### Font Awesome 的使用介绍

- http://fontawesome.dashgame.com/

###### 定制字体图标库

- http://iconfont.cn/
- https://icomoon.io/

###### SVG 素材

- http://www.iconsvg.com/

###### 使用 Bootstrap

- http://www.bootcss.com/p/font-awesome/

  使用步骤

  1. 如图只是想要字体的话，可以把`css`和`font`这两个文件夹拷贝到项目里

  2. 在html文档中的 标签里，引入 font-awesome.min.css 文件

     ```html
     <link rel="stylesheet" href="css/font-awesome.min.css">
     ```

  3. 想在哪个标签里用这个图标，直接在这个标签里加className就行（className都在[网站](http://www.bootcss.com/p/font-awesome/)上列出来了）

##### 字体加粗属性

在 Windows 平台的浏览器中， font-weight 无论是设置300、400，还是500，文字的粗细都没有任何变化，只有到600的时候才会加粗一下，感觉浏览器好像不支持这些数值

**实际上，所有这些数值关键字浏览器都是支持的，之所以没有看到任何粗细的变化，是因为你所使用的字体不支持**

就拿“微软雅黑”来举例，它只支持 400 和 700 这两种粗细，所以当你在代码里写成500的时候，也会被认为是400。但是 Mac 上的“苹方”字体，就支持从100到900之间的各种粗细

###### 各大平台的默认字体加粗效果

- Mac & iOS 平台的“苹方”字体：500 和600，加粗效果是不同的；`>=600`的加粗效果是相同的
- Windows 平台的“微软雅黑”字体：只有 `>=600` 才会加粗，而且加粗效果相同
- Android 平台的 Droid Sans 字体，只有 `>=700`才会加粗；而且加粗效果相同

##### 免费可商用的字体

- 思源黑体

  思源黑体（Source Han Sans）：Adobe 和 Google 在 2014 年 7 月联合推出的针对中日韩的开源字体，在字重（字体粗细程度）上分7个层级

  下载链接：https://github.com/adobe-fonts/source-han-sans/tree/release/

- 思源宋体

  同样也是Adobe 联合 Google经过长达一年半的研发， 在 2019年 4 月 3 日发布了思源宋体（ Source Han Serif，Google 称 Noto Serif CJK）。

  思源宋体包含了简繁日韩四种汉字写法，拥有7种粗细字重，共设计了458745个汉字。也就是说每一种字重包括65535个字形

- 站酷系列字体

- 方正系列

  方正对外提供四款免费字体，楷体、黑体、仿宋、书宋，可以商业发布，只要不进行转换、改编、传播。

  注：方正虽然有四款优秀的免费可商用的字体，但有一点麻烦的是，需要书面授权，感兴趣的同学可以在他们的官网上查看一下授权使用范围

- 文泉驿系列字体

- 郑庆科黄油体

- Font Space

  Font Space有很全的字体，都是用户自己上传的，截至2017年3月有21款免费可商用的字体（包含2款文泉驿中文）

- 濑户字体

- Arual

##### 查询字体是否需要授权

360查字体：https://fonts.safe.360.cn

#### Sass

Sass 最早由 Hampton Catlin 开发和设计。是一种帮助开发者简化CSS工作流程的方式，让开发者更容易维护和开发CSS内容

Sass 是这个世界上最成熟、稳定和强大的专业级CSS扩展语言

Sass 专注的是优雅的创建样式表，而不是内容

##### Sass、Compass、CSS

###### 关系

- Less/Sass 是语法
- Compass 是框架
- CSS 是目标

###### Sass&Compass的好处

- 写出更优秀的CSS
- 解决CSS编写过程中的痛点问题。如精灵图和图、属性的浏览器前缀处理等
- 有效组织样式、图片、字体等项目元素

###### 受众群体

- 重构的时，写了很多CSS，不知如何自动化
- 希望在项目周期内更好地组织项目内容

##### Sass 的安装

1. 安装Ruby

   Sass引擎是用Ruby语言开发的（但是两者的语法没有关系），因此在安装Sass前，需要安装Ruby（Mac下自带Ruby，无需安装）

   ###### Windows下安装

   1. 下载：http://rubyinstaller.org/downloads/

      安装的时候勾选“添加到环境变量”

   2. `ruby -v`   查看版本

   ###### Mac下切换Ruby版本

   Ruby版本管理工具：https://rvm.io

2. 安装Sass

   1. 移除默认镜像，添加淘宝镜像

      ```
      gem sources --remove https://rubygems.org/
      
      // 注意：如果你系统不支持https，请将淘宝源更换成：gem sources -a http://gems.ruby-china.org
      gem sources -a https://ruby.taobao.org/
      ```

   2. 查看当前使用的镜像

      ```
      gem sources -l
      ```

   3. 安装Sass

      ```
      // 如果mac下输入这个命令时没有权限，则需要在前面加上 sudo
      gem install sass
      
      // 查看Sass版本：
      sass -v
      
      // 升级Sass：
      gem update sass
      ```

将 **.scss** 文件转为 **.css**

```
sass filename.scss filename.css
```

##### Compass 简介和安装

###### Compass 简介

Compass是开源的CSS书写框架。官网：http://compass-style.org/

###### Compass 安装

```
// 安装
gem install compass

// 查看版本
compass -v
```

##### Compass 的简单使用

通过 Compass 创建工程目录

```
cd workspace
compass create CompassDemo
```

工程结构如下

- /sass
  - Ie.scss
  - print.scss
  - screen.scss
- /stylesheets
  - ie.css
  - print.css
  - screen.css
- config.rb

为了能够让文件实时编译，我们可以通过 compass watch 监听 sass 文件的变化（当 .scss 文件改动时，会自动生成对应的 .css 文件）

```
cd CompassDemo
compass watch
```

##### Sass 语法

- `.sass`   后缀名的语法

  对空格敏感。不使用大括号和分号，所以每个属性之间通过换行来分割

  ```
  h1
  	color: #000
  	background: #fff
  ```

  这种语法是类 Ruby 语法，和CSS的语法相比，相差较大。所以在3.0版本中就引入了 .scss 语法

- `.scss`   后缀名的语法

  该语法是CSS语法的超集，可以使用大括号和分号

  ```scss
  h1 {
  	color: #000;
  	background: #fff;
  }
  ```

两种格式之间的转换

```
sass-convert test.scss test.sass
```

##### 变量语法

Sass 是通过 `$` 来声明变量的

1. 新建一个文件 **_variables.scss**，这个文件专门用来存放变量，然后在其它文件中引入这个文件

   因为这个文件只需要存放变量，并不需要编译出对应的 css 文件，所以我们给文件名前面加 <u>下划线</u> ，意思为声明为 **局部文件**

   在 **_variables.scss** 文件中声明两个字体变量

   ```scss
   $font1: Braggadocio, Arial, Verdana, Helvetica, sans-serif;
   
   $font2: Arial, Verdana, Helvetica, sans-serif;
   ```

2. 在其它 .scss 文件里面引入 **_variables.scss** 文件

   ```scss
   @import "variables";   /* 引入变量文件 */
   
   /* 使用变量 */
   .div1 {
     font-family: $font1;
   }
   ```

##### 基于 Sass 的既定规则

- 没有文件后缀名时，Sass 会自动添加 `.scss` 或者 `.sass` 的后缀（具体要看已经存在哪个后缀的文件）
- 同一目录下，局部文件和非局部文件不能重名

##### 注释

单行注释

```scss
// 我是单行注释
```

块级注释

```scss
/*
	我是块级注释
*/
```

区别：单行注释不会出现在自动生成的 css 文件中

---

### 文档流

#### 标准文档流

宏观地讲，我们的web页面和photoshop等设计软件有本质的区别：web页面的制作，是个“流”，必须从上而下，像“织毛衣”。而设计软件，想往哪里画个东西，都能画

##### 标准文档流的特性

- 空白折叠现象

  无论多少个空格、换行、Tab，都会折叠为一个空格

- 高矮不齐，底边对齐

  一行的高度，取决于这行内容里面，最高的元素，这些元素底部在一条直线上

##### CSS中脱离标准流

###### 浮动

```html
    <style>
      
      /* 因为<div>是块级元素，会霸占一行。但是加了 float:left 后，两个<div>就并列在一行了 */
        .box1 {
            width: 100px;
            height: 100px;
            background-color: bisque;
            float: left; /* 浮动属性 */
        }

        .box2 {
            width: 100px;
            height: 100px;
            background-color: burlywood;
            float: left; /* 浮动属性 */
        }
    </style>

    <body>
        <div class="box1"></div>
        <div class="box2"></div>
    </body>
```

浮动的三个性质

1. 浮动的元素脱标

   脱标即脱离标准流

   一旦一个元素浮动后，那么，将能够并排了，并且能够设置宽高，无论它是行内元素，还是块级元素。所有标签，浮动之后，已不在区分行内元素和块级元素

2. 浮动的元素互相贴靠

   根据设置的浮动方向，相互紧靠

3. 浮动的元素有“字围”效果

   标准流中的文字，不会被浮动的元素挡住

   浮动的原则：永远不是一个元素单独浮动，浮动都是一起浮动

4. 收缩

   一个浮动的元素，如果没有设置`width`，那么将自动收缩为内容的宽度

   ```html
   <style>
     div {
       float: left;
       background-color: red;
     }
   </style>
   
   <body>
     <div>浮动收缩</div>
   </body>
   
   <!-- div本身是块级元素，如果不设置width，它会独占整行，设置浮动后，它会收缩 -->
   ```

浮动的清除

这里的清除浮动，是指清楚浮动与浮动之间的影响

1. 给浮动元素的祖先元素设置`width`

   ```html
   <style>
     * {
       margin: 0px;
       padding: 0px;
     }
     
     li {
       width: 100px;
       height: 20px;
       background-color: green;
       float: left;
     }
     
   	/* 如果没有个样式，那么“浮动清除1”到“浮动清除8”都将显示在一行中 */
     /* 给祖先元素设置了高度后，"浮动清除1"到“浮动清除4”显示在一行，另外的显示在第二行 */
     div {
       height: 20px;
     }
   </style>
   
   <body>
     <div>
       <ul>
         <li>浮动清除1</li>
         <li>浮动清除2</li>
         <li>浮动清除3</li>
         <li>浮动清除4</li>
       </ul>
     </div>
       <div>
       <ul>
         <li>浮动清除5</li>
         <li>浮动清除6</li>
         <li>浮动清除7</li>
         <li>浮动清除8</li>
       </ul>
     </div>
   </body>
   ```

   如果一个元素要浮动，那么它的祖先元素一定要有高度。有高度的盒子，才能关住浮动

   只要浮动在一个有高度的盒子中，那么这个浮动就不会影响后面的浮动元素。所以就清除了浮动带来的影响

   注：工作上，我们绝对不会给所有的盒子加高度，这是因为麻烦，并且不能适应页面的快速变化

2. clear属性

   - `clear: both;`   清除左、右浮动。即不允许左侧和右侧有浮动对象

   ```html
   <style>
     * {
       margin: 0px;
       padding: 0px;
     }
     
     li {
       width: 100px;
       height: 20px;
       background-color: green;
       float: left;
     }
     
   	/* 如果没有个样式，那么“浮动清除1”到“浮动清除8”都将显示在一行中 */
     /* 给祖先元素设置了高度后，"浮动清除1"到“浮动清除4”显示在一行，另外的显示在第二行 */
     .box2 {
       clear: both;
     }
   </style>
   
   <body>
     <div>
       <ul>
         <li>浮动清除1</li>
         <li>浮动清除2</li>
         <li>浮动清除3</li>
         <li>浮动清除4</li>
       </ul>
     </div>
     <div class="box2">
       <ul>
         <li>浮动清除5</li>
         <li>浮动清除6</li>
         <li>浮动清除7</li>
         <li>浮动清除8</li>
       </ul>
     </div>
   </body>
   ```

   注：这种方法，会使所在标签的 `margin` 属性失效

3. 隔墙法

   在两个浮动的元素中间，新增一个元素，再给这个元素设置 `clear: both;` 属性，并设置 `height`，让两个浮动的元素有 margin 的效果

   ```html
   <style>
     * {
       margin: 0px;
       padding: 0px;
     }
     
     li {
       width: 100px;
       height: 20px;
       background-color: green;
       float: left;
     }
     
     .box {
       clear: both;
       height: 10px;
     }
   </style>
   
   <body>
     <div>
       <ul>
         <li>浮动清除1</li>
         <li>浮动清除2</li>
         <li>浮动清除3</li>
         <li>浮动清除4</li>
       </ul>
     </div>
     
     <div class="box"></div>
     
     <div class="box2">
       <ul>
         <li>浮动清除5</li>
         <li>浮动清除6</li>
         <li>浮动清除7</li>
         <li>浮动清除8</li>
       </ul>
     </div>
   </body>
   ```

   内墙法

   *父元素不能被浮动的子元素撑出高度*

   ```html
       <style>
           div {
               background-color: khaki;
           }
   
           p {
               width: 100px;
               height: 100px;
               background-color: hotpink;
               float: left;
           }
   
           .box {
               clear: both;
           }
       </style>
   
       <body>
           <div>
               <p>内墙法</p>
               <div class="box"></div> <!-- 在父元素里，放一个被清除了浮动的元素 -->
           </div>
       </body>
   ```

   ```html
       <style>
           * {
               margin: 0px;
               padding: 0px;
           }
   
           li {
               width: 100px;
               height: 20px;
               background-color: green;
               float: left;
           }
   
           .box {
               clear: both;
               height: 10px;
           }
       </style>
   
       <body>
           <div>
               <ul>
                   <li>浮动清除1</li>
                   <li>浮动清除2</li>
                   <li>浮动清除3</li>
                   <li>浮动清除4</li>
               </ul>
               <div class="box"></div> <!-- 内墙法 -->
           </div>
   
           <div>
               <ul>
                   <li>浮动清除5</li>
                   <li>浮动清除6</li>
                   <li>浮动清除7</li>
                   <li>浮动清除8</li>
               </ul>
           </div>
       </body>
   ```

4. overflow属性

   所有溢出边框的内容，都要隐藏

   ```html
       <style>
           * {
               margin: 0px;
               padding: 0px;
           }
   
           li {
               width: 100px;
               height: 20px;
               background-color: green;
               float: left;
           }
   
         	/* 一个父亲不能被自己浮动的儿子，撑出高度。但是，只要给父亲加上overflow:hidden; 那么，父亲就能被儿子撑出高了。这是一个偏方 */
           .box {
               overflow: hidden;
           }
       </style>
   
       <body>
           <div class="box">
               <ul>
                   <li>浮动清除1</li>
                   <li>浮动清除2</li>
                   <li>浮动清除3</li>
                   <li>浮动清除4</li>
               </ul>
           </div>
   
           <div>
               <ul>
                   <li>浮动清除5</li>
                   <li>浮动清除6</li>
                   <li>浮动清除7</li>
                   <li>浮动清除8</li>
               </ul>
           </div>
       </body>
   ```

margin塌陷

​	标准文档流中，竖直方向的margin不叠加，取较大值

​	如果不在标准流，比如盒子都浮动了，那么两个盒子之间是没有塌陷现象的

margin重叠

​	水平方向的margin可以叠加

###### 绝对定位

###### 固定定位

#### 标签的分类

##### 从HTML角度来分类

- 文本级标签

  p、span、a、b、i、u、em

  因为p里面只能放文字&图片&表单元素，p里面不能放h和ul，p里面也不能放p，所以是文本级

- 容器级标签

  div、h系列、li、dt、dd

##### 从CSS角度来分类

- 行内元素

  除了p之外，所有的文本级标签，都是行内元素。p是个文本级，但是是个块级元素

- 块级元素

  所有的容器级标签都是块级元素，还有p标签

行内元素与块级元素的区别

- 行内元素
  1. 与其它行内元素并排
  2. 不能设置宽、高。默认的宽度，就是文本的宽度
- 块级元素
  1. 霸占一行，不能与其它任何元素并列
  2. 能设置宽、高。如果不设置宽高，默认为父级的100%

##### 行内元素与块级元素的相互转换

块级元素转换为行内元素：`display: inline;`

行内元素转换为块级元素：`display: block;`

---

### 浏览器的兼容

- IE6后门

  只要在CSS属性之前，加上**下划线**，那么这个属性就只有IE6能够识别，这个属性对其它浏览器无效

  ```css
  _background-color: red;
  ```

- IE6 不支持小于 12px 的盒子（微型盒子）

  解决方案：将盒子的字号大小，设置为**小于盒子的高**

  ```css
  height: 5px;
  _font-size: 4px; /* 只有IE6才有微型盒子的问题，所以要加_ */
  ```

- IE6 不支持 `overflow: hidden;` 来清除浮动

  解决方案：

  ```css
  overflow: hidden;
  _zoom: 1; /* 触发浏览器 hasLayout 机制 */
  ```

- IE6 的双倍margin （面试）

  出现连续浮动的元素，携带与浮动方向相同的margin时，队首的元素，会双倍marign

  ```html
  <ul>
    <li class="no1"></li>
    <li></li>
    <li></li>
  </ul>
  ```

  ![](https://camo.githubusercontent.com/5a4a72ed1048cad3f7f31613337ec43c162bb5eb/687474703a2f2f696d672e736d79687661652e636f6d2f32303137303830365f313535382e706e67)

  解决方案：

  1. 使浮动的方向与margin的方向，相反

     ```css
     float: left;
     margin-right: 40px;
     ```

  2. 使用 hack，单独给队首元素，写其它margin值的一半

     ```css
     ul li.no1 {
       _margin-left: 20px;
     }
     ```

- IE6 的3px

  右浮动后，如果设置了 `margin-right: 10px;` ，那么将显示 13px

  解决方案：不用管，因为根本就不允许用儿子踹父亲（即描述父子之间的距离，请用padding，而不是margin）。所以，如果你出现了3px bug，说明你的代码不标准
  
- IE6 不兼容固定定位