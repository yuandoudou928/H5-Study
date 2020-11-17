#### Zepto 的介绍

zepto 时轻量级的 javascript 库，专门为移动端定制的框架。与 jQuery 有着类似的 API

- 官网：http://zeptojs.com/

- GitHub：https://github.com/madrobby/zepto

##### Zepto 的特点

- 针对移动端
- 轻量级，压缩版本只有 8KB 左右
- 响应、执行快
- 语法、API 大部分同 jQuery 一样，学习难度低，上手快
- 目前 API 完善的框架中体积最小的一个
- 相当于 jQuery 的子集，都是以 `$` 符号为核心函数

#### Zepto 的使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zepto 的使用</title>
    <style>
      #btn {
        width: 200px;
        height: 200px;
        background: pink;
        margin: 10px auto;
      }
    </style>
  </head>

  <body>
    <div id="btn">我是div</div>
  </body>

  <script src="lib/zepto.js"></script>
  <script src="lib/touch.js"></script>
  <script>
    $(function () {
      $("#btn").on("touchstart", function () {
        alert("hello world");
      });
    });
  </script>
</html>
```

#### Zepto 和 jQuery 的相同点

##### 核心符号 `$`

###### 作为函数使用，参数可以为：

- function
- html 字符串
- DOM code
- 选择器字符串

###### 作为对象，调用其它方法，如：

- $.ajax()
- $.isArray()

作为对象调用函数，返回值就是库本身