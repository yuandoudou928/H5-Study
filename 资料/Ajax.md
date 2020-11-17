### 架构

#### C/S 架构

是 Client/Server 这两个单词的首字母，指的是客户端，服务器

##### 优点

- 性能较高：可以将一部分的计算工作放在客户端上，这样服务器只需要处理数据即可
- 界面酷炫：客户端可以使用更多系统提供的效果，做出更为炫目的效果

##### 缺点

- 更新软件：如果有新的功能，就要推出新的版本
- 不同设备访问：如果使用其它的设备，没有安装客户端的话，就无法登录软件

#### B/S 架构

是 Browser/Server 这两个单词的首字母。指的是浏览器，服务器，是 Web 兴起之后的一种架构

现在所有的网站都是 B/S 架构

##### 优点

- 更新简洁：如果需要更新内容，对开发人员而言，需要更改服务器的内容，对用户而言只需要刷新浏览器即可
- 多设备同步：所有数据都在网上，只要能够使用浏览器即可登录使用

##### 缺点

- 性能较低：相比于客户端，应用性能较低，但是随着硬件性能的提升，这个差距在缩小
- 浏览器兼容：处理低版本的浏览器显示问题，一直是前端开发人员头痛的问题之一。移动设备兼容性较好，IE6 已经越来越少人使用了

---

### 服务器分类

#### 项目开发的三套环境

- Development   开发环境
- Test   测试环境
- Production   生产环境

#### 服务器分类

##### 按类型

- 文件服务器
- 数据库服务器
- 邮件服务器
- Web 服务器

##### 按软件

- Apache 服务器
- Nginx 服务器
- IIS 服务器
- Tomcat 服务器
- Node 服务器

##### 按操作系统

- Linux 服务器
- Windows 服务器

#### 服务器软件

提供了某种服务的计算器，我们称之为服务器

常见的服务器软件：

- 文件服务器：Server-U、FileZilla、VsFTP等
- 数据库服务器：Oracle、MySQL、PostgreSQL、MSSQL等
- 邮件服务器：PostFix、Sendmail等
- HTTP 服务器：Apache、Nginx、IIS、Tomcat、NodeJS等

#### 静态网站和动态网站

##### 静态网站

- 访问的是实实在在保存在服务器上的文件。静态资源包括：html页面、css文件、js文件、图片等
- 当内容、图片、界面需要更新时，直接修改 `.html` 文件

##### 动态网站

- 当用户访问网站时，根据 *某些逻辑*，动态生成对应的 html、css、js 代码给用户（这也就是 Web 服务器开发的本质）
- 通过某种手段，当有新的消息时，自动完成网站的更新

###### 实现动态网站的技术

PHP、JSP、.NET、Python等

###### 动态网站的原理

浏览器请求动态网站的页面（比如：*.php），PHP 拼接数据并动态生成 html页面，然后将新生成的页面返回给浏览器

---

### 使用 WampServer 搭建 Http 服务器

#### 集成环境的分类

- AMP：Apache + MySql + PHP
- WAMP：Windows + Apache + MySql + PHP
- XAMPP：WAMP 是针对windows的，而 XAMPP 可以安装在Linux、Windows、MacOS、Solaris这些操作系统上面

#### WampServer 的安装

WampServer 用于在 Windows 平台上，一步完成 Http 服务器的搭建（WAMP）

官网：https://www.wampserver.com/en/

##### 修改 `httpd.conf` 文件

因为 Apache 的配置默认不允许外部访问，我们需要修改配置。

打开文件 `c:\wamp\bin\apache\Apache2.2.21\conf\httpd.conf` ，通过搜索功能找到 `onlineoffline tag - don't remove` 这句话，在第234行的 `Allow from 127.0.0.1` 的下面，加一行：`Allow from all`

然后将第192行的 `Deny from all`改为 `Allow from all`

保存，然后重启 wamp 即可

##### 配置网站根目录

网站的根目录默认是在`D:\wamp\www`。如果想修改这个根目录，可以这样改：

打开 Apache的配置文件 `D:\wamp\bin\apache\Apache2.2.21\conf\http.conf` ，如果是初次安装，找到178行的 `DocumentRoot "d:/wamp/www/"` ，以及205行的 `<Directory "d:/wamp/www/">` ，改这两个位置的路径即可。我们可以通过搜索关键字 `documentRoot` 来定位

---

### PHP

#### PHP 代码执行的方式

在服务端执行，然后将结果返回给用户。如果直接使用浏览器打开，就会解析为文本。即 PHP 代码需要浏览器通过 Http 请求，才能够执行

#### Hello PHP

```php
<?php
	echo "Heool PHP";  
?>
```

#### 注释

```php
<?php
	// 这是单行注释
  
	/*
	 * 这是多行注释
	 */
?>
```

#### 变量

- 变量以 `$` 符号开头，其后是变量的名称。大小写敏感
- 变量名必须以字母或下划线开头

#### 数据类型

- 字符串
  - 单引号：内部的内容只是作为字符串
  - 双引号：如果内部是 PHP 的变量，那么会将该变量的值解析。如果你饿哭是 html 代码，也会解析成 html
  - 字符串拼接：`.`
- 整数
- 浮点数
- 布尔
- 数组
  - 普通数组：`$arr = array('123', 4, true);`
  - 关系型数组：`$arr = $array('name' => '123', 'age' => '20');`
- 对象
- NULL

#### 运算符

- 算数运算符：`+`、`-`、`/`、`*`、`%`
- 赋值运算符：`x = y`、`x += y`、`x -= y` 等

#### 函数

##### 函数的定义

```
function 函数名() {
	// 代码
}
```

- 有参数，无返回值

  ```php
  function fn($name) {
    echo $name;
  }
  
  fn('张三');
  ```

- 有默认值的参数，无返回值

  ```php
  function fn($name = '李四') {
    echo $name;
  }
  
  fn();
  fn('张三');
  ```

- 有参数，有返回值

  ```php
  function fn($a, $b){
    return $a + $b;
  }
  
  fn(1, 2);
  ```

##### `header()` 函数

浏览器访问 http 服务器，收到服务器的响应时，会根据响应报文头的内容进行一些具体的操作。在 PHP 中，我们可以根据 `header()` 来设置这些内容

作用：用来向客户端（浏览器）发送报文头。写在 PHP 代码的第一行

- 设置编码格式

  ```php
  header('content-type:text/html; charset=utf-8');
  ```

  设置返回的内容为 XML：

  ```php
  header('content-type:text/xml; charset= utf-8');
  ```

- 设置页面跳转

  ```php
  header('location:https://www.baidu.com');
  ```

- 设置页面刷新的间隔

  ```php
  header('refresh:3; url=https://www.baidu.com');
  ```

#### 类和对象

PHP 中允许使用 **对象** 这种自定义的数据类型。必须先声明，实例化之后才能够使用

- 定义普通类

  ```php
  // 定义类
  class People {
    public $name = '张三';
    public $age = 20;
  }
  
  // 实例化对象
  $peo = new $People;
  // 获取对象属性的值
  $name = $peo -> name;
  // 对象属性的赋值
  $peo -> name = '李四';
  ```

- 带构造函数的类

  ```php
  class People {
    var $name = '张三';
    var $age = 20;
    
    // 定义方法，用于获取属性
    function Name(){
      return $this -> name;
    }
    
    // 构造函数，可以传入参数
    function People($name) {
      $this -> name = $name;
    }
  }
  ```

#### 内容输出

- `echo`   输出字符串
- `print_r()`   输出复杂的数据类型。比如：数组、对象
- `var_dump()`   输出详细信息

#### 循环语句

##### for 循环

```php
for ($i = 0; $i <= 10; $i++){
  echo "$i <br>";
}
```

##### foreach 循环

```php
$arr = array(1, 2, 3, 4, 5);

foreach ($arr as $value) {
  echo "$value <br>";
}
```

#### get请求 和 post请求

##### get 请求

可以通过 `$_GET` 对象来获取

##### post 请求

可以通过 `$_POST` 对象来获取

#### 文件的操作

##### 上传文件

`$_FILES`

上传文件时，需要在 html 代码中进行如下设置：

1. 在 html 表单中，设置 `enctype="multipart/form-data"`
2. 只能使用 post 方式

##### 保存文件

```
move_uploaded_file($_FILES[''][''], '');
```

- 参数1 ：移动的文件
- 参数2 ：目标路径

##### WampServer 中限制上传文件的大小

1. 打开 `php.ini` 文件

2. 修改

   ```
   file_uploads = On;         		是否允许上传文件 On/Off 默认是On
   upload_max_filesize = 32M; 		设置 上传文件的最大限制
   post_max_size = 32M;       		设置 通过Post提交的最多数据
   ```

考虑网络传输快慢：这里修改一些参数：

```
max_execution_time = 30000; 			脚本最长的执行时间 单位为秒
max_input_time = 600; 						接收提交的数据的时间限制 单位为秒
memory_limit = 1024M; 						最大的内存消耗
```

##### 读取 xml

```
file_get_contents('文件名');
```

#### HTTP 协议

##### 请求

客户端发出的请求，主要由三个组成部分：请求行、请求头、请求主体

###### 请求行

- 请求方法：get 或 post
- 请求的URL
- HTTP 协议的版本

###### 请求头

```
User-Agent：浏览器的具体类型　　如：User-Agent：Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0

Accept：浏览器支持哪些数据类型　　如：Accept: text/html,application/xhtml+xml,application/xml;q=0.9;

Accept-Charset：浏览器采用的是哪种编码　　如：Accept-Charset: ISO-8859-1

Accept-Encoding：浏览器支持解码的数据压缩格式　　如：Accept-Encoding: gzip, deflate

Accept-Language：浏览器的语言环境　　如：Accept-Language zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3

Host：请求的主机名，允许多个域名同处一个IP地址，即虚拟主机。Host:www.baidu.com

Connection：表示是否需要持久连接。
属性值可以是Keep-Alive/close，HTTP1.1默认是持久连接，它可以利用持久连接的优点，当页面包含多个元素时（例如Applet，图片），显著地减少下载所需要的时间。要实现这一点，Servlet需要在应答中发送一个Content-Length头，最简单的实现方法是：先把内容写入ByteArrayOutputStream，然后在正式写出内容之前计算它的大小。如：Connection: Keep-Alive

Content-Length：表示请求消息正文的长度。对于POST请求来说Content-Length必须出现。

Content-Type：WEB服务器告诉浏览器自己响应的对象的类型和字符集。例如：Content-Type: text/html; charset='gb2312'

Content-Encoding：WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip

Content-Language：WEB服务器告诉浏览器自己响应的对象的语言。

Cookie：最常用的请求头，浏览器每次都会将cookie发送到服务器上，允许服务器在客户端存储少量数据。

Referer：包含一个URL，用户从该URL代表的页面出发访问当前请求的页面。服务器能知道你是从哪个页面过来的。Referer: http://www.baidu.com/
```

###### 请求体

指的是提交给服务器的数据

需要注意的是，如果是往服务器提交数据，需要在请求头中设置 `Content-Type: application/x-www-form-urlencoded` (在ajax中需要手动设置)

##### 响应

响应报文是服务器返回给客户端的。组成部分有：响应行、响应头、响应主体

![](https://camo.githubusercontent.com/30434d58535540c195a4bc3dc959bc0a9e3db478/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303232385f313531302e6a7067)

###### 响应行

主要是响应状态等信息

###### 响应头

Cookie、缓存等信息就是在响应头的属性中设置

```
Cache-Control

响应输出到客户端后，服务端通过该报文头属告诉客户端如何控制响应内容的缓存。

下面，的设置让客户端对响应内容缓存3600秒，也即在3600秒内，如果客户再次访问该资源，直接从客户端的缓存中返回内容给客户，不要再从服务端获取（当然，这个功能是靠客户端实现的，服务端只是通过这个属性提示客户端“应该这么做”，做不做，还是决定于客户端，如果是自己宣称支持HTTP的客户端，则就应该这样实现）。

Cache-Control: max-age=3600

ETag

一个代表响应服务端资源（如页面）版本的报文头属性，如果某个服务端资源发生变化了，这个ETag就会相应发生变化。它是Cache-Control的有益补充，可以让客户端“更智能”地处理什么时候要从服务端取资源，什么时候可以直接从缓存中返回响应。

ETag: "737060cd8c284d8af7ad3082f209582d"

Location

我们在Asp.net中让页面Redirect到一个某个A页面中，其实是让客户端再发一个请求到A页面，这个需要Redirect到的A页面的URL，其实就是通过响应报文头的Location属性告知客户端的，如下的报文头属性，将使客户端redirect到iteye的首页中：

Location: http://www.google.com.hk

Set-Cookie

服务端可以设置客户端的Cookie，其原理就是通过这个响应报文头属性实现的。

Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1
```

###### 响应主体

如果请求的是 html 页面，那么返回的就是 html 代码，如果是 js 就是 js 代码

---

### Ajax

#### 同步和异步

##### 同步

必须等待前面的任务完成，才能继续后面的任务

##### 异步

不受当前任务的影响

##### 异步更新网站

在访问一个普通的网站时，当浏览器加载完 html、css、js 以后，网站的内容就固定了。如果想让网站内容发生更改，就必须*刷新*页面才能够看到更新的内容

可如果用到*异步更新*，情况就大为改观了。比如，在访问微博时，看到一大半了，点击底部的*加载更多*，会自动帮我们加载更多的微博，同时页面并没有刷新

#### Ajax 的介绍

在浏览器中，我们可以在不刷新页面的情况下，通过 ajax 的方式去获取一些新的内容

Ajax ：Asynchronous JavsScript And XML（异步 JavaScript 和 XML）。它并不是凭空出现的新技术，而是对于现有技术的结合

Ajax 的核心是 js 对象：**XMLHttp Request**

#### Ajax 发送请求

##### 发送 Ajax 请求的步骤

1. 创建异步对象：XMLHttpRequest

2. 使用 `open(method, url, async)` 设置请求参数

   - method ：请求的方法
   - url ：请求的 url
   - async ：是否异步

3. 发送请求

   使用 `send()` 发送请求

   post 请求时，提交的参数放在 `send()` 里面，格式：`参数名1=参数值1&参数名2=参数值2`

4. 注册事件

   注册 `onreadystatechange` 事件，状态改变时就会调用

   每当 `readyState` 的值发生改变时，就会回调该注册事件

   `readyState` 的值：

   - 0 ：请求未初始化
   - 1 ：服务器连接已建立
   - 2 ：请求已接收
   - 3 ：请求处理中
   - 4 ：请求已完成，且响应已就绪

   `status` 的值：

   - 200 ：请求成功
   - 404 ：未找到页面

5. 获取返回的数据

   - `responseText` ：获得字符串形式的响应数据
   - `responseXML` ：获得 XML 形式的响应数据

post 提交数据，必须添加：`xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");`

##### Ajax 的 get 请求

```html
  <script>
    const baseUrl =
      "https://www.easy-mock.com/mock/5acda34663b2d05900908b65/example";

    var ajaxObj = new XMLHttpRequest();

    ajaxObj.open("get", baseUrl + "/query");

    ajaxObj.send();

    ajaxObj.onreadystatechange = function () {
      if (ajaxObj.readyState == 4 && ajaxObj.status == 200) {
        console.log(ajaxObj.responseText);
      }
    };
  </script>
```

##### Ajax 的 post 请求

```html
  <script>
    const url =
      "https://www.easy-mock.com/mock/5acda34663b2d05900908b65/example/upload";

    var xhr = new XMLHttpRequest();

    xhr.open("post", url, true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send("name=测试post请求");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
      }
    };
  </script>
```

#### Ajax 传输 XML

##### XML 语法

XML （Extensible Markup Language）：可扩展标记语言

###### XML 声明

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

###### XML 标签

XML 中没有默认标签，所有的标签都是我们自己自定义的。并且没有单标签，都是双标签

```
<标签名>值</标签名>
```

###### XML 的根节点

XML 中必须要有一个根节点，所有的子节点都放置在根节点下面

```xml
<?xml version="1.0" encoding="UTF-8"?>
<根节点>
  <子节点1>值</子节点1>
  <子节点2>值</子节点2>
  <子节点3>
    <子节点33>值</子节点33>
  </子节点3>
</根节点>
```

##### XML 解析

因为 XML 就是标签，所以我们可以直接使用解析 DOM 元素的方法解析 XML

``` 
// 通过 XMLHttpRequest 对象的 responseXML() 获取接口返回的 XML 数据
var resXml = xhr.responseXML;

// 通过选择器获取 XML 节点
var 子节点1 = resXml.querySelector("子节点1").innerHTML;
```

#### Ajax 传输 Json

##### Json 语法

JSON（JavaScript Object Notation）：是 ECMAScript 的子集。作用是进行数据的交换。语法更为简洁，网络传输、机器解析都更为迅速

###### 语法规则

- 数据在键值对中
- 数据由逗号分隔
- 花括号保存对象
- 方括号保存数组

###### 数据类型

- 数字：整数或浮点数
- 字符串：在双引号中
- 逻辑值：true 或 false
- 数组：在方括号中
- 对象：在花括号中
- null

```json
{
  "name": "张三",
  "age": 20,
  "爱好": [
    "旅游",
    "游泳"
  ],
  "girlFriend": {
    "name": "李四",
    "age": 19
  }
}
```

##### JavaScript 中 Json 与 对象的转换

- Json 字符串转 js 对象

  ```
  var jsObj = JSON.parse(Json字符串);
  ```

- js 对象转 Json 字符串

  ```
  var jsonStr = JSON.stringify(obj);
  ```

##### PHP 中 Json 与 对象的转换

- Json 转 变量

  ```
  json_decode(Json字符串);
  ```

- 变量转 Json

  ```
  json_encode(变量);
  ```

##### Json 解析

```
// 通过 XMLHttpRequest 对象获取 Json 字符串
var jsonStr = xhr.responseText;

// 通过 JSON.parse() 解析为对象
var jsObj = JSON.parse(jsonStr);
```

#### jQuery 中的 Ajax

jQuery 作为最受欢迎的 js 框架之一，常见的 Ajax 已经帮我们封装好了，只需要调用即可

| 函数                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [jQuery.ajax()](https://www.w3school.com.cn/jquery/ajax_ajax.asp) | 执行异步 HTTP (Ajax) 请求。                                  |
| [.ajaxComplete()](https://www.w3school.com.cn/jquery/ajax_ajaxcomplete.asp) | 当 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxError()](https://www.w3school.com.cn/jquery/ajax_ajaxerror.asp) | 当 Ajax 请求完成且出现错误时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxSend()](https://www.w3school.com.cn/jquery/ajax_ajaxsend.asp) | 在 Ajax 请求发送之前显示一条消息。                           |
| [jQuery.ajaxSetup()](https://www.w3school.com.cn/jquery/ajax_ajaxsetup.asp) | 设置将来的 Ajax 请求的默认值。                               |
| [.ajaxStart()](https://www.w3school.com.cn/jquery/ajax_ajaxstart.asp) | 当首个 Ajax 请求完成开始时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxStop()](https://www.w3school.com.cn/jquery/ajax_ajaxstop.asp) | 当所有 Ajax 请求完成时注册要调用的处理程序。这是一个 Ajax 事件。 |
| [.ajaxSuccess()](https://www.w3school.com.cn/jquery/ajax_ajaxsuccess.asp) | 当 Ajax 请求成功完成时显示一条消息。                         |
| [jQuery.get()](https://www.w3school.com.cn/jquery/ajax_get.asp) | 使用 HTTP GET 请求从服务器加载数据。                         |
| [jQuery.getJSON()](https://www.w3school.com.cn/jquery/ajax_getjson.asp) | 使用 HTTP GET 请求从服务器加载 JSON 编码数据。               |
| [jQuery.getScript()](https://www.w3school.com.cn/jquery/ajax_getscript.asp) | 使用 HTTP GET 请求从服务器加载 JavaScript 文件，然后执行该文件。 |
| [.load()](https://www.w3school.com.cn/jquery/ajax_load.asp)  | 从服务器加载数据，然后把返回到 HTML 放入匹配元素。           |
| [jQuery.param()](https://www.w3school.com.cn/jquery/ajax_param.asp) | 创建数组或对象的序列化表示，适合在 URL 查询字符串或 Ajax 请求中使用。 |
| [jQuery.post()](https://www.w3school.com.cn/jquery/ajax_post.asp) | 使用 HTTP POST 请求从服务器加载数据。                        |
| [.serialize()](https://www.w3school.com.cn/jquery/ajax_serialize.asp) | 将表单内容序列化为字符串。                                   |
| [.serializeArray()](https://www.w3school.com.cn/jquery/ajax_serializearray.asp) | 序列化表单元素，返回 JSON 数据结构数据。                     |

---

### 同源和跨域

#### 同源

同源策略，是浏览器的一种安全策略。所谓同源，是指域名、协议、端口完全相同

![](https://camo.githubusercontent.com/3165fbf430f32a3b3a16c78303f20bf6adc30a6b/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303232385f323233312e706e67)

#### 跨域

从我自己的网站访问别人的网站，就叫跨域

处于安全性考虑，浏览器不允许 Ajax 跨域获取数据

- iframe ：处于安全性考虑，浏览器的开发厂商已经禁止了这种方式
- JSONP ：script 标签的 src 属性传递数据

[js 中几种实用的跨域方法原理详解](https://www.cnblogs.com/2050/p/3191744.html)

##### JSONP

JSONP（JSON with Padding）：带补丁的 json ，本质是利用了 `<script src=""></script>` 标签具有可跨域的特性，由服务端返回一个预先定义好的 JS 函数的调用，并且将服务器数据以该函数参数的形式传递过来。此方法需要前后端配合完成

---

### 模版引擎

将 Json 格式的字符串，将其包装到对应的 Html 代码中，再添加到页面上

#### 模版插件的原理

定义一段文本作为模版，读取文本，使用特殊的符号 **<%=属性名%>** ，通过正则表达式找到这些特殊的符号，再进行替换

#### 常见的模版引擎

- BaiduTemplate
- [ArtTemplate](https://github.com/aui/art-template)
- velocity.js
- Handlebars

#### ArtTemplate

标准语法：

```
{{if user}}
	<h2>{{user.name}}</h2>
{{/if}}
```

渲染模版：

```
var data = {
	title: '标签',
	list: ['文艺', '博客', '摄影']
};

var html = template('test', data);
document.getElementById('content').innerHTML = html;
```

