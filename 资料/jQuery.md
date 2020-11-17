### jQuery

#### 什么是 jQuery

jQuery 是 js 的一个库，封装了在开发过程中常用的一些功能，方便我们调用，提高开发效率

- 官网：http://jquery.com/
- 官网API文档：http://api.jquery.com/
- 中文汉化API文档：http://www.css88.com/jqapi-1.9/

#### 引入 jQuery 的原因

- window.onload 事件有事件覆盖的问题，因此只能写一个事件
- 代码容错性差
- 浏览器兼容性问题
- 书写很繁琐，代码量多
- 代码很乱，各个页面到处都是
- 动画效果很难实现

![](https://camo.githubusercontent.com/9cfe2e165ed0d3b17b189f6e2983f0cb416c180d/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f313731302e706e67)

#### jQuery 的两大特点

##### 链式编程

方法后面使用 `.` 链接另外一个方法

通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this

链式编程原理：return this

- 结束当前链最近的一次过滤操作，并返回匹配元素之前的状态

  ```
  end();
  ```

##### 隐式迭代

在方法内部会为匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环。简化我们的操作，方便我们调用

如果获取的是多元素的值，大部分情况下，返回的是第一个元素的值

#### jQuery 的基本使用

##### 使用 jQuery 的基本步骤

1. 引包

   导包的代码，必须放在 js 代码的最上面

2. 入口函数

3. 事件处理

![](https://camo.githubusercontent.com/d9a0d01014302e787378996e1e5bc34999d259ef/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f313934302e706e67)

##### jQuery 的版本

- 1.X 版本（最终版本：v1.12.4 ）

  兼容 IE6、IE7、IE8 ，使用最为广泛，官方只做 bug 维护，功能不再新增

- 2.X 版本（最终版本：v2.2.4 ）

  不兼容 IE6、IE7、IE8 ，很少有人使用，官方只做 bug 维护，功能不再新增

  如果不考虑兼容低版本浏览器，可以使用

- 3.X 版本

  不兼容 IE6、IE7、IE8 ，只支持最新的浏览器。目前是官方主要更新维护的版本

  除非特殊要求，一般不使用该版本，很多老的 jQuery 插件不支持这个版本

###### 获取当前使用的 jQuery 的版本号

```
$.fn.jquery
```

##### jQuery 的入口函数

原生 js 的入口函数指的是：`window.onload = function(){};` ，要等页面上所有内容（文本、图片等）加载完毕，才执行

- jQuery 入口函数写法1

  文档加载完毕，图片不加载，就可以执行这个函数

  ```javascript
  $(document).ready(function(){
    
  });
  ```

- jQuery 入口函数写法2

  文档加载完毕，图片不加载，就可以执行这个函数

  ```javascript
  $(function(){
    
  });
  ```

- jQuery 入口函数写法3

  文档、图片都加载完毕，才执行这个函数

  ```javascript
  $(window).ready(function(){
  
  });
  ```

##### JavaScript 与 jQuery 入口函数的区别

- 书写个数不同
  - js 的入口函数只能出现一次，出现多次会存在覆盖问题
  - jQuery 的入口函数可以出现任意次，不存在覆盖问题
- 执行时机不同
  - js 的入口函数是在所有的文件资源加载完后才执行。这些文件资源包括：页面文档，外部的 js 文件、外部的 css 文件、图片等
  - jQuery 的入口函数，是在文档加载完后，就执行。文档加载完指的是：DOM 树加载完后，就可以操作 DOM 了，不用等到所有的外部资源都加载完成

文档加载顺序：从上往下，边解析边执行

##### jQuery 的 `$` 符号

jQuery 使用 `$` 符号的原因：书写简洁、相对于其它字符与众不同、容易被记住

jQuery 提供了两个函数：`$` 和 `jQuery` 。这两个函数是完全相等的，即：`$ === jQuery`

这两个函数根据传入的参数不同，进行不同的调用，实现不同的功能，返回值是 jQuery 对象

```
$();																// 调用上面我们自定义的函数 $
$(document).ready(function(){});		// 调用入口函数
$(function(){});										// 调用入口函数
$("#btnShow");											// 获取 id 属性为 btnShow 的元素
$("div");														// 获取所有的 <div> 标签元素
```

##### JavaScript 中 DOM 对象与 jQuery 对象的比较

###### 二者的区别

针对下面的结构来分析

```javascript
<div></div>
<div class="box"></div>
<div id="box"></div>
<div class="box"></div>
<div></div>
```

通过原生 js 获取元素节点的方式：

```javascript
var myBox = document.getElementById("box");           //通过 id 获取单个元素
var boxArr = document.getElementsByClassName("box");  //通过 class 获取的是数组
var divArr = document.getElementsByTagName("div");    //通过标签获取的是数组
```

通过 jQuery 获取元素节点的方式：

```javascript
// 获取的是都是数组，里面包含着原生 JS 中的DOM对象。
var jqBox1 = $("#box");
var jqBox2 = $(".box");
var jqBox3 = $("div");
```

给元素设置 css 属性：

- 元素 js ：`元素.style.属性 = "属性值";`

  例如：`myBox.style.backgroundColor = "black"`

- jQuery ：`jQuery对象.css("属性1": "属性值1", ...);`

  例如：`jqBox1.css({"background-color": "red"});`
  
  ​			`jqBox1.css("background-color, "red");`

###### 二者的相互转换

- DOM 对象 转为 jQuery 对象

  ```
  $(js对象);
  ```

- jQuery 对象 转为 DOM 对象

  ```
  // 方式1
  jquery对象.[index];
  
  // 方式2
  jquery对象.get(index);
  ```


#### jQuery 的选择器

##### jQuery 的基本选择器

![](https://camo.githubusercontent.com/74b72ddbd5cf84e0cc99111d27d43b465b05189f/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323132352e706e67)

![](https://camo.githubusercontent.com/d1128c84f64ea3b9e1f74a3a49602e13b1b26c5e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323132362e706e67)

##### 层级选择器

![](https://camo.githubusercontent.com/b16bed86b170accfa3687eff1a7b346f619a7a91/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323133382e706e67)

![](https://camo.githubusercontent.com/f5f07a04183d063071a3197b67e7107eb63d4db8/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323133392e706e67)

##### 基本过滤选择器

![](https://camo.githubusercontent.com/97f49c3cb2117ab279cddcd9921f469f1156de41/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323135302e706e67)

![](https://camo.githubusercontent.com/99a772e96e0aaa99b517991fbd89cdf96cbac4ae/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323135312e706e67)

##### 属性选择器

![](https://camo.githubusercontent.com/5719ef4f0d667cf15e53da344bbc452d1b59bf6a/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323135352e706e67)

##### 筛选选择器

![](https://camo.githubusercontent.com/ed4051fac4bd0489908ce98f6d453d188db88710/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303230345f323230302e706e67)

#### jQuery 的动画

jQuery 提供的一组网页中常见的动画效果，这些动画是标准的、有规律的效果；同时还提供给我们了自定义动画的功能

##### 显示动画

通过控制元素的宽高、透明度、display属性，逐渐显示

- 无参数

  底层通过 `display: block;` 实现

  ```
  $(selector).show();
  ```

- 一个参数：完成显示的时间

  ```
  $(selector).show([speed]);
  ```

  speed 预设常量：

  - `slow`   慢：600ms
  - `normal`   正常：400ms
  - `fast`   快：200ms

- 两个参数

  参数1 ：完成显示的时间

  参数2 ：完成后，立即执行的回调函数

##### 隐藏动画

参数与 「显示动画」 一致

```
$(selector).hide();
```

##### 显示与隐藏 来回切换

参数与 「显示动画」 一致

先执行 `show()` ，再执行 `hide()`

```
$(selector).toggle();
```

##### 滑入动画

下拉动画，显示元素

```
$(selector).slideDown([speed], [callback]);
```

- 省略参数或传入不合法的字符串，则会使用默认值：4000ms（同样适用于：`fadeIn`、`slideUp`）

##### 滑出动画

上拉动画，隐藏元素

```
$(selector).slideUp([speed], [callback]);
```

##### 滑入、滑出相互切换

```
$(selector).slideToggle([speed], [callback]);
```

##### 淡入动画

让元素由透明变为不透明的方式，显示出来

```
$(selector).fadeIn([speed], [callback]);
```

##### 淡出动画

```
$(selector).fadeOut([speed], [callback]);
```

淡入、淡出相互切换

```
$(selector).fadeToggle([speed], [callback]);
```

##### 自定义动画

```
$(selector).animate({params}, [speed], [callback]);
```

- 参数1 ：动画要执行的 css 属性
- 参数2 ：执行动画的时长
- 参数3 ：动画执行完后，立即执行的回调函数

##### 停止动画

```
$(selector).stop([clearQueue], [jumpToEnd]);
```

- 参数1 ：true 后续动画不执行，false 后续动画会执行

  队列里面的下一个动画将会立即开始。 但是，如果参数clearQueue被设置为 true，那么队列面剩余的动画就被删除了，并且永远也不会执行

- 参数2 ：true 立即执行完当前动画，false 立即停止当前动画

  如果参数jumpToEnd被设置为 true，那么当前动画会停止，但是参与动画的每一个CSS属性将被立即设置为它们的目标值

- 两个参数默认值都为：false

#### jQuery 操作 DOM

##### 样式操作

- 设置样式

  ```
  // 设置单个样式
  $(selector).css("属性名", "属性值");
  
  // 设置多个样式
  $(selector).css({"属性名1": "属性值1", ...});
  ```

- 获取样式

  返回类型为：String
  
  ```
  样式值 = $(selector).css("样式名");
  ```

##### 类操作

- 添加类样式

  ```
  $(selector).addClass("className");
  ```

  - 类名不带 `.` ，所有类操作的方法，类名都不带 `.`

- 移除类样式

  ```
  $(selector).removeClass(["className"]);
  ```

- 判断有没有类样式

  ```
  布尔值 = $(selector).hasClass("className");
  ```

- 切换类样式

  为指定元素切换类 className ，该元素有类则移除，没有指定类则添加

  ```
  $(selector).toggleClass("className");
  ```

##### jQuery 的节点操作

###### 动态创建元素

创建的是 jQuery 对象

- 方式1 

  类似于原生 js 中的 `document.createElement("标签名");`

  ```
  $(content);
  ```

- 方式2（推荐）

  类似于原生 js 中的 `innerHTML`

  ```
  $(selector).html(content);
  ```

###### 添加元素

- `append()`

  在指定元素内部末尾添加元素

  ```
  $(selector).append(content);
  ```
  - 如果页面中存在该元素，调用 `append()` 后，会把这个元素移动到指定位置，原来的位置就没有了
  - 如果是给多个目标追加元素，那么方法的内部会复制多份这个元素，然后追加到多个目标里面去

- `appendTo()`

  在指定元素内部末尾添加元素

  ```
  $(content).appendTo(selector);
  ```

- `prepend()`

  在指定元素开头添加元素

  ```
  $(selector).prepend(content);
  ```

- `after()`

  在指定元素后添加元素（作为兄弟元素）

  ```
  $(selector).after(content);
  ```

- `before()`

  在指定元素前添加元素（作为兄弟元素）

  ```
  $(selector).before(content);
  ```

###### 清空元素

- 清空指定元素的所有子元素

  ```
  $(selector).empty();
  
  $(selector).html("");   // 推荐
  ```

- 删除自己及所有的子元素

  ```
  $(selector).remove();
  ```

###### 复制元素

深层复制

```
复制的新元素 = $(selector).clone();
```

##### jQuery 设置和获取属性

jQuery 无法直接操作节点的属性

参考：https://segmentfault.com/a/1190000002680303

- `attr()`

  attribute 表示 HTML 文档节点的属性。jQuery 1.0 就有

  `attr()` 函数操作的是文档节点的属性，因此设置的属性值只能是字符串类型，如果不是字符串类型，也会调用其 `toString()` 方法，将其转为字符串类型

  `attr()` 函数主要依赖的是 Element 对象的 `getAttribute()` 和 `setAttribute()` 两个方法

  - 设置属性

    ```
    $(selector).attr("属性名", "属性值");
    ```

  - 获取属性

    ```
    属性值 = $(selector).attr("属性名");
    ```

  - 移除属性

    ```
    $(selector).removeAttr("属性名");
    ```

- `prop()`

  property 表示 JS 对象的属性。jQuery 1.06 及其以后版本增加

  `prop()` 函数操作的是 JS 对象的属性，因此设置的属性值可以为包括数组和对象在内的任意类型

  `prop()` 函数主要依赖的则是 JS 中原生的对象属性获取和设置方式

- `val()`

  设置或返回 form 表单元素的 value 值

  - 设置 value 属性的值

    ```
    $(selector).val(value);
    ```

  - 返回 value 属性的值

    返回第一个匹配元素的 value 属性的值

    ```
    $(selector).val()
    ```

- `text()`

  设置或获取匹配元素的文本内容

  - 设置元素的值

    不识别 html 标签
    
    ```
  $(selector).text(content);
    ```
    
  - 获取元素的值
  
    匹配到多个元素，则把所有元素的文本内容拼接为一个字符串，并返回
  
    ```
    字符串 = $(selector).text();
    ```
  
- `width()`

  设置或获取元素的宽度。返回类型为：Number

  ```
  值 = $(selector).width(); 
  
  $(selector).width(number); 
  ```

- `height()`

  设置或获取元素的高度。返回类型为：Number

  ```
  值 = $(selector).height(); 
  
  $(selector).height(number); 
  ```

- `offset()`

  设置或获取元素相对于 document 文档的位置

  ```
  值（{left:num, top:num}）= $(selector).offset();
  
  $(selector).offset({left:横坐标, top: 纵坐标});
  ```

  调用 `offset()` 后，如果元素没有定位（默认值：static），则被修改为relative

- `position()`

  获取相对于其最近的带有定位的祖先元素的位置

  ```
  值（{left:num, top:num}）= $(selector).position();
  ```

- `scrollTop()`

  获取匹配的元素集合中第一个元素的当前垂直滚动条的位置或设置每个匹配元素的垂直滚动条位置

- `scrollLeft()`

  获取匹配的元素集合中第一个元素的当前水平滚动条的位置或设置每个匹配元素的水平滚动条位置

##### 其它方法

- `each()`

  为每个匹配元素规定要运行的函数

  ```
  $(selector).each(function(index, element){
  
  });
  ```

  - 参数1 ：index，当前元素在所有匹配元素中的索引
  - 参数2 ：当前元素，也可以用 this

#### jQuery 的事件

##### jQuery 中常见的绑定事件

- `click()`   单击事件
- `blur()`   失去焦点事件
- `mouseenter()`   鼠标进入事件
- `mouseleave()`   鼠标离开事件
- `dbclick()`   双击事件
- `change()`   改变事件，如：文本框值改变，下拉列表值改变等
- `focus()`   获得焦点事件
- `keydown()`   键盘按下事件

##### 事件的绑定

最早采用的是 `bind`、`delegate` 等方式绑定的。jQuery 1.7版本后，jQuery 用 `on` 统一了所有的事件处理的方法，此方法兼容 zepto（移动端类似于jQuery的一个库）

```
$(document).on("事件1 事件2 事件n", "selector", data, function(event){

});
```

- 参数1 ：events ，绑定事件的名称，多个事件由空格隔开
- 参数2 ：selector ，执行事件的后代元素
- 参数3 ：data ，传递给事件处理函数的数据。通过 `event.data` 来使用
- 参数4 ：callback ，事件的处理函数

##### 解绑事件

- 解绑匹配元素的所有事件

  ```
  $(selector).off();
  ```

- 解绑匹配元素的指定事件

  ```
  $(selector).off("事件名");
  ```

- 解绑匹配元素所有的代理事件，匹配元素本身的事件不会被解绑

  ```
  $(selector).off("事件名", "**");
  ```

##### 事件中的属性

- `event.data`   传递给事件处理程序的额外数据

- `event.currentTarget`   等同于this，当前DOM对象

- `event.pageX`   鼠标相对于文档左部边缘的位置

- `event.target`   触发事件源，不一定 === this

- `event.stopPropagation();`   阻止事件冒泡

- `event.preventDefault();`   阻止默认行为

- `event.type`   事件类型：click，dbclick…

- `event.which`   鼠标的按键类型：左1 中2 右3

- `event.keyCode`   键盘按键代码

#### 多库共存

多库共存，指的是 jQuery 占用了 `$` 和 `jQuery` 这两个变量。当在同一个页面中引用了 jQuery 库和其它的库（不同版本的 jQuery 库）时，恰好其它库中也使用了 `$` 或者 `jQuery` ，那么要保证每个库都能正常使用，就产生了多库共存的问题

- 方法1 

  让 jQuery 放弃对 `$` 的使用权

  ```
  $.noConflict();
  ```

- 方法2

  同时放弃 `$` 和 `jQuery` 的使用权，并定义一个新的关键字来使用

  ```
  var 新关键字 = $.noConflict(true);
  ```

#### jQuery 的插件机制

jQuery 库，虽然功能强大，但也不是面面俱到。jQuery 是通过插件的方式，来扩展它的功能

插件即 jQuery 库的补充库，引入的时候，必须放在 jQuery 库的后面

##### 插件之改变颜色

jQuery 的自定义动画方法 `animate()` ，在执行动画时，是不支持设置背景色这个属性的。

引入插件： `jQuery.color.js`

##### 插件之懒加载

懒加载：当打开一个网页时，只有当我看到某个部分，再加载那个部分；而不是一下子全部加载完毕

懒加载可以优化网页的打开速度

引入插件：`jquery.lazyload.js`