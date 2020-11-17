### 虚拟 DOM 和 Diff 算法

#### 虚拟 DOM

Virtual Dom 可以看作是一个使用 JavaScript 模拟了 DOM 结构的树形结构

虚拟 DOM 最主要的作用是，当组件状态发生变化时，然后触发 Virtual Dom 数据的变化，然后通过 Virtual Dom 和真实 DOM 的比对，再对真实 DOM 中改变了的组件进行更新，而不必更新整个真实 DOM 树

#### Diff 算法

##### tree diff

新旧 DOM 树，逐层对比的方式，就叫做 tree diff。每当我们从前到后，把所有层的节点对比完后，必然能够找到那些需要被更新的元素

##### component diff

在对比每一层的时候，组件之间的对比，叫做 component diff。当对比组件的时候，如果两个组件的类型相同，则暂时认为这个组件不需要被更新，如果组件的类型不同，则立即将旧组件移除，新建一个组件，替换到被移除的位置

##### element diff

在组件中，每个元素之间也要进行对比，那么，元素级别的对比，叫做 element diff

##### key

key 这个属性，可以把*页面上的 DOM节点* 和*虚拟 DOM* 中的对象，做一层关联关系

---

### React 介绍

Facebook 开源的一个 **用于动态构建用户界面** 的 JS 库

- 官网：https://reactjs.org/
- GitHub 地址：https://github.com/facebook/react

#### React 的特点

- Declarative（声明式编码）
- Component-Based（组件化编码）
- Learn Once ，Write Anywhere（支持客户端、服务器端渲染）
- 高效的 DOM Diff 算法，最小化页面重绘
- 单向数据流

#### 生态介绍

##### Vue 生态

**Vue ** +  **Vue-Router**  +  **Vuex**  +  **Axios**  +  **Babel**  +  **Webpack**

##### React 生态

**React**  +  **React-Router**  +  **Redux**  +  **Axios**  +  **Babel**  +  **Webpack**

---

### React 中的模块化、组件化

#### 模块

向外提供特定功能的 JavaScript 程序。一般就是一个 js 文件

#### 组件

用来实现特定功能效果的代码集合（ html / css /js ）

#### 模块化

模块化 是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一

当应用的 js 都以模块来编写，这个应用就是一个模块化的应用

#### 组件化

组件化 是从 UI 界面的角度进行划分的；前端的组件化，方便 UI 组件的重用

当应用是以多组件的方式实现功能，这个应用就是一个组件化的应用

---

### React 环境的搭建

- **react.js**：React 的核心库

  这个包，是专门用来创建 React 组件，组件生命周期等

- **react-dom.js**：操作 DOM 的扩展库

  这个包，主要封装了 DOM 操作相关的包。比如：把组件渲染到页面上

- **babel.js**：将 JSX 语法解析为纯 JS 语法的库

#### 方式一：代码中引入相关的 JS 库

如果是通过 CDN 的方式引入的话，可以使用网站 https://www.bootcdn.cn/ 提供的 CDN 链接

```
ReactDOM.render(要渲染的虚拟DOM对象, 容器 container：要渲染到页面上的哪个位置);
```

#### 方式二：通过 npm 来安装

1. 新建一个空文件夹，作为项目根目录，然后进行项目初始化

   ```
   npm init --yes
   ```

2. 安装 `react.js` 和 `react-dom.js`

   ```
   npm i react react-dom
   ```

---

### JSX 语法介绍

JavaScript XML ，一种类似于 XML 的 JavaScript 扩展语法。也可以理解成：符合 XML 规范的 JS 语法

JSX 语法规范，能够让我们在 JS 文件中，书写类似于 HTML 那样的代码，快速定义出虚拟 DOM 结构

JSX 语法的本质：以 `React.createElement()` 的形式来实现的，并没有直接把书写的 HTML 代码，渲染到页面上

#### babel 转换工具

将 JSX 语法转换为 JS 语法

```
npm i babel-preset-react -D  // 安装开发环境的包
```

#### JSX 基本语法

- 在 JSX 内部书写 JS 代码

  如果要在 JSX 语法内部，书写 JS 代码，那么，所有的 JS 代码必须写在 `{}` 的里面

- 当编译引擎在编译 JSX 代码的时候，如果遇到了 `<`，会把它当作  HTML 代码 去编译；如果遇到了 `{}` ， 会把方括号里面的代码当作普通 JS 代码去编译

- 在 JSX 中，如果要为元素添加 `class` 属性，则必须写成 `className` ，因为 `class` 在ES6中是一个关键字；和 `class` 类似，`<label>` 标签的 `for` 属性需要替换为 `htmlFor`

- 在 JSX 创建 DOM 的时候，所有的节点，必须有唯一的根元素进行包裹

- 如果要写注释，注释必须放到 `{}` 内部

##### class 关键字

###### 使用 class 创建对象

在每个class 类内部，都有一个 constructor 构造器， 如果没有显示定义 构造器，那么类内部默认都有个看不见的 constructor

每当，使用 new 关键字创建 class 类实例的时候，必然会优先调用 constructor 构造器

```javascript
class AClass {
	constructor (name ,age){
    this.name = name;
    this.age = age;
  }
}
```

###### 使用 extends 实现 JS 中的继承

当使用 extends 关键字实现了继承， 子类的 constructor 构造函数中，必须显示调用 super() 方法，这个 super 表示父类中 constructor 的引用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用 class 实现 JS 中的继承</title>
  </head>
  <body></body>

  <script>
    class A {
      constructor(name) {
        this.name = name;
      }

      show() {
        console.log(this.name);
      }
    }

    class B extends A {
      constructor(name, age) {
        super(name);
        this.age = age;
      }

      showAge() {
        console.log(this.age);
      }
    }

    var b = new B("张三", 20);

    b.show();
    b.showAge();
  </script>
</html>
```



---

### 组件

#### 创建组件

##### 构造函数即组件（无状态组件）

在 React 中，构造函数就是一个最基本的组件

如果想要把组件放到页面中，可以把**构造函数的名称**当作**组件的名称**，以 HTML 标签形式引入页面中即可

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>创建组件</title>
    <script type="text/javascript" src="../lib/babel.min.js"></script>
    <script type="text/javascript" src="../lib/react.js"></script>
    <script type="text/javascript" src="../lib/react-dom.js"></script>
  </head>

  <body>
    <div id="box"></div>
  </body>

  <script type="text/babel">
    // 这个构造函数就相当于一个组件
    function Hello() {
      return (
        <div>
          <h3>这是 Hello组件 中定义的元素</h3>
        </div>
      );
    }

    ReactDOM.render(
      <div>
        <Hello></Hello>
      </div>,
      document.getElementById("box")
    );
  </script>
</html>
```

React 在解析所有标签的时候，是以标签的首字母来区分的：如果标签的首字母是小写，就按照普通的 HTML 标签来解析；如果首字母是大写，则按照**组件**的形式来解析

即，**组件的首字母必须大写**

###### 父组件传值给子组件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>父组件传值给子组件</title>
    <script src="../lib/react.js"></script>
    <script src="../lib/react-dom.js"></script>
    <script src="../lib/babel.min.js"></script>
  </head>

  <body>
    <div id="app"></div>
  </body>

  <script type="text/babel">
    // 父组件的数据
    var person = {
      name: "张三",
      age: 20,
    };

    // 在子组件中要使用外部传递过来的数据，必须显示的在构造函数的参数列表中，定义 变量 来接收
    // 子组件获取的数据是只读的
    function Son(props) {
      return (
        <div>
          <h3>父组件的数据是：{props.name}</h3>
        </div>
      );
    }

    // ... obj ：是 ES6 中的属性扩展，表示 把这个对象上的所有属性，展开，放到这个位置上
    var vBox = (
      <div>
        <Son {...person}></Son>
      </div>
    );

    ReactDOM.render(vBox, document.getElementById("app"));
  </script>
</html>
```

##### 使用 class 关键字创建组件（有状态组件）

使用 class 创建的类，通过 extends 关键字，继承 `React.Component` 之后，这个类，就是一个组件的模板了。如果想要引用这个组件，可以把类的名称以**标签的形式**，导入到 JSX 中使用

在 class 实现的组件内部，必须定义一个 render 函数。在 render 函数中，还必须 return 一个东西，如果没有什么需要被 return 的，则需要 return null

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用 class 关键字创建组件</title>
    <script src="../lib/react.js"></script>
    <script src="../lib/react-dom.js"></script>
    <script src="../lib/babel.min.js"></script>
  </head>

  <body>
    <div id="box"></div>
  </body>

  <script type="text/babel">
    class Hello extends React.Component {
      render() {
        return (
          <div>
            <h3>我是一个组件</h3>
          </div>
        );
      }
    }

    const vDom = (
      <div>
        <Hello></Hello>
      </div>
    );

    ReactDOM.render(vDom, document.getElementById("box"));
  </script>
</html>
```

###### 父组件传值给子组件

`this.state` 是固定写法，表示当前组件实例的私有数据对象，就好比 vue 中，组件实例身上的 `data(){ return {} }` 函数

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>父组件传值给子组件</title>
    <script src="../lib/react.js"></script>
    <script src="../lib/react-dom.js"></script>
    <script src="../lib/babel.min.js"></script>
  </head>

  <body>
    <div id="box"></div>
  </body>

  <script type="text/babel">
    class Hello extends React.Component {
      constructor(props) {
        super(props);
        console.log(props);

        this.state = {
          age: 20,
        };
      }

      render() {
        return (
          <div>
            <h3>我是一个组件</h3>
          </div>
        );
      }
    }

    const vDom = (
      <div>
        <Hello name="张三"></Hello>
      </div>
    );

    ReactDOM.render(vDom, document.getElementById("box"));
  </script>
</html>
```

---

### 组件的生命周期

在组件创建，到加载到页面上运行，及组件被销毁的过程中，总是伴随着各种各样的事件。这些在组件特点时期，触发的事件，统称为组件的生命周期

![](https://upload-images.jianshu.io/upload_images/13681871-e886ba8709ad844b.png?imageMogr2/auto-orient/strip|imageView2/2/w/989/format/webp)

#### 生命周期阶段

##### 组件创建阶段

组件创建阶段的生命周期，只执行一次

- `getDefaultProps()`

  初始化 props 属性默认值

- `getInitialState()`

  初始化组件的私有数据。因为 state 是定义在组件的 constructor 构造器当中的，只要 new 了 class 类，必然会调用 constructor 构造器

- `componentWillMount()`

  组件将要被挂载。此时还没有开始渲染虚拟 DOM

  在这个阶段，不能去操作DOM元素，但可以操作属性、状态、function。相当于 Vue 中的Create()函数

- `render()`

  第一次开始渲染真正的虚拟 DOM。当 `render()` 执行完，内存中就有了完整的虚拟 DOM 了

  在这个函数内部，不能去操作 DOM 元素，因为在 return 之前，虚拟 DOM 还没有创建；当 return 执行完毕后，虚拟 DOM 就创建好了，但是还没有挂在到页面上

- `componentDidMount()`

  当组件（虚拟 DOM）挂载到页面上之后，会进入这个生命周期函数

  只要进入到这个生命周期函数，则必然说明，页面上已经有可见的 DOM 元素了。此时，组件已经显示到了页面上，state 上的数据、内存中的虚拟 DOM、以及浏览器中的页面，已经完全保持一致了

##### 组件运行阶段

这个阶段的生命周期，会根据组件的 state 和 props 的改变，有选择性的触发0次或多次

- `componentWillReceiveProps()`

  只有当父组件中，通过某些事件，重新修改了传递给子组件的 props 数据之后，才会触发这个钩子函数

- `shouldComponentUpdate()`

  判断组件是否需要被更新。此时，组件尚未被更新，但是，state 和 props 肯定是最新的

  该函数必须要求返回一个布尔值。如果返回 `false` ，则不会继续执行后面的声明周期函数，而是直接退回到*运行中*的状态。此时后面的 `render()` 没有被调用，所以页面不会更新，但是组件的 state 数据被修改了

- `componentWillUpdate()`

  组件将要被更新。此时，组件还没有被更新，在进入到这个生命周期函数的时候，内存中的虚拟 DOM 还是旧的，页面上的 DOM 元素也是旧的

- `render()`

  根据最新的 state 和 props，重新渲染一棵内存中的虚拟 DOM 树。当 render 调用完毕，内存中的旧 DOM 树，已经被新 DOM 树替换了！此时，虚拟 DOM 树已经和组件的 state 保持一致了，都是最新的；但是页面还是旧的

- `componentDidUpdate()`

  组件完成更新，页面被重新渲染。此时，state、虚拟 DO M 和页面已经完全保持同步

##### 组件销毁阶段

只执行一次

- `componentWillUnmount()`

  组件将要被卸载。此时组件还可以正常使用

---

### 常见的属性和函数

#### 常见属性

##### 使用 defaultProps 设置组件的默认值

如果外界没有传递 name ，那么就使用默认值 “张三”

```javascript
static defaultProps = {
  name: "张三"
};
```

##### 使用 prop-types 对 props 数据类型进行校验

如果要为 传递过来的属性做类型校验，必须安装 React 提供的第三方包：`prop-types.js`

校验时，如果类型不匹配，控制台会打印出警告

```javascript
static propTypes = {
  name: ReactTypes.string
};
```

#### 常见函数

##### 事件绑定

```html
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: props.text,
        };
      }

      static defaultProps = {
        text: "我是默认值",
      };

      static propTypes = {
        text: ReactTypes.string,
      };

      render() {
        return (
          <div>
            {/* 绑定点击事件 */}
            <h2 onClick={this.changeText}>{this.state.msg}</h2>
          </div>
        );
      }

      // 点击后的回调函数
      changeText = () => {
        this.setState({
          text: "我是修改后的值",
        });
      };
    }
```

##### 获取 html 标签的属性

```javascript
this.refs.h3.innerHTML
```

---

### 在 React 的组件中，给函数绑定 this，并给函数传值

在下面的代码中，打印结果为：`undefined` 

```javascript
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: props.text,
        };
      }

      static defaultProps = {
        text: "我是默认值",
      };

      static propTypes = {
        text: ReactTypes.string,
      };

      render() {
        return (
          <div>
            {/* 绑定点击事件 */}
            <h2 onClick={this.changeText}>{this.state.msg}</h2>
          </div>
        );
      }

      // 点击后的回调函数
      changeText() {
        console.log(this);   // undefined
        this.setState({
          text: "我是修改后的值",
        });
      };
    }
```

- 方式一：使用 `bind()`

```html
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: props.text,
        };
      }

      static defaultProps = {
        text: "我是默认值",
      };

      static propTypes = {
        text: ReactTypes.string,
      };

      render() {
        return (
          <div>
            {/* 绑定点击事件 */}
            <h2 onClick={this.changeText.bind(this, "我是修改后的值")}>{this.state.msg}</h2>
          </div>
        );
      }

      // 点击后的回调函数
      changeText(str) {
        console.log(this);   // undefined
        this.setState({
          text: str,
        });
      };
    }
```

- 方式二：在构造函数里面使用 `bind()`

```html
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: props.text,
        };

				this.changeText = this.changeText.bind(this, "我是修改后的值");
      }

      static defaultProps = {
        text: "我是默认值",
      };

      static propTypes = {
        text: ReactTypes.string,
      };

      render() {
        return (
          <div>
            {/* 绑定点击事件 */}
            <h2 onClick={this.changeText}>{this.state.msg}</h2>
          </div>
        );
      }

      // 点击后的回调函数
      changeText(str) {
        console.log(this);   // undefined
        this.setState({
          text: str,
        });
      };
    }
```

- 方式三：使用箭头函数（荐）

```html
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: props.text,
        };
      }

      static defaultProps = {
        text: "我是默认值",
      };

      static propTypes = {
        text: ReactTypes.string,
      };

      render() {
        return (
          <div>
            {/* 绑定点击事件 */}
            <h2 onClick={this.changeText("我是修改后的值")}>{this.state.msg}</h2>
          </div>
        );
      }

      // 点击后的回调函数
      changeText = (str) => {
        this.setState({
          text: str,
        });
      };
    }
```

---

### React 中实现双向数据绑定

React 只支持，把数据从 state 上传输到页面，但是，无法自动实现数据从页面传输到 state 中进行保存：

```html
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: props.text,
        };
      }

      render() {
        return (
          <div>
            <input type="text" value={this.state.msg}>
          </div>
        );
      }
    }
```

上方代码中，运行结果，会弹出警告：

```
Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
```

#### 通过 onChange 实现双向数据绑定

如果针对表单元素做 `value` 属性的绑定，那么，必须同时为表单元素绑定 `readOnly` 或者提供 `onChange` 事件：

- 如果是绑定 `readOnly` ：表示这个元素只读，不能被修改
- 如果是绑定 `onChange` ：表示这个元素的值可以被修改，但是，要自己定义修改的逻辑

##### 绑定 readOnly

```html
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: props.text,
        };
      }

      render() {
        return (
          <div>
            <input type="text" value={this.state.msg} readOnly>
          </div>
        );
      }
    }
```

##### 绑定 onChange

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>defaultProps 和 prop-types</title>
    <script src="../lib/react.js"></script>
    <script src="../lib/react-dom.js"></script>
    <script src="../lib/babel.min.js"></script>
  </head>

  <body>
    <body>
      <div id="box"></div>
    </body>
  </body>

  <script type="text/babel">
    class Hello extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          msg: "我是默认值",
        };
      }

      render() {
        return (
          <div>
            <input
              type="text"
              value={this.state.msg}
              onChange={this.changeText}
              ref="txt"
            />
            <h3>{"实时显示msg中的内容：" + this.state.msg}</h3>
          </div>
        );
      }

      // 点击后的回调函数
      changeText = (e) => {
        // 获取 <input> 文本框中 文本的3种方式：
        //  方式一：使用 document.getElementById

        //  方式二：使用 ref
        // console.log(this.refs.txt.value);

        //  方式三：使用 事件对象的 参数 e 来拿
        // 此时，e.target 就表示触发 这个事件的 事件源对象，得到的是一个原生的JS DOM 对象。在这个案例里，e.target就是指文本框
        // console.log(e.target.value);

        this.setState({
          text: e.target.value,
        });
      };
    }

    ReactDOM.render(
      <div>
        <Hello></Hello>
      </div>,
      document.getElementById(box)
    );
  </script>
</html>
```

---

### React 路由的使用

```html
import React from "react";

import { HashRouter, Route, Link } from "react-router-dom";

import Home from "./Home";
import Home from "./Movie";
import Home from "./About";
import Movie from "./Movie";
import About from "./About";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // 使用 <HashRouter> 标签把根元素包裹起来，网站就已经启用了路由功能
      <HashRouter>
        <div>
          <h1>APP 组件</h1>
          <hr />
          <Link to="/home">首页</Link>
          &nbsp;&nbsp;
          <Link to="/movie">电影</Link>
          &nbsp;&nbsp;
          <Link to="/about">关于</Link>
          <hr />
          <Rout path="/home" component={Home} />
          <Rout path="/movie" component={Movie} />
          <Rout path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}
```

默认情况下，路由中的匹配规则是**模糊匹配**：

```html
<Link to="/movie/top250">电影</Link>

<Route path="/movie" component={Movie} />
```

如果想让路由规则，**进行精确匹配**，可以为 `<Route>` 添加 `exact` 属性：

```html
<Link to="/movie/top250/20">电影</Link>

<Route path="/movie/:type/:id" component={Movie} exact/>
```

#### 获取路由参数

1. 传参

   ```html
   <Link to="/movie/top100/5">电影</Link>
   
   <Route path="/movie/:type/:id" component={Movie} exact/>
   ```

2. 获取参数

   ```html
   export default class Movie extends React.Component {
     constructor(props) {
       super(props);
       this.state = {
         routeParams: props.match.params // 把路由中的参数保存到 state 中
       };
     }
   
     render() {
       console.log(this);
       // 如果想要从路由规则中，提取匹配到的参数，进行使用，可以使用 this.props.match.params.*** 来访问
       return (
         <div>
           {/* Movie --- {this.props.match.params.type} --- {this.props.match.params.id} */}
           Movie --- {this.state.routeParams.type} --- {this.state.routeParams.id}
         </div>
       );
     }
   }
   ```

---

### Ant Design

Ant Design 是基于 React 实现，开发和服务于企业级后台产品

官网：https://ant.design/index-cn

#### 支持环境

- 现代浏览器和 IE9+ （需要 polyfills）

- 支持服务端渲染

- [Electron](https://www.electronjs.org/)

  Electron（原名 Atom Shell）是 GitHub 开发的一个开源框架。它允许使用 Node.js （作为后端）和 Chromium（作为前端），完成桌面 GUI 应用程序的开发

#### Ant Design 的使用

##### 环境安装

```
npm install antd
```

#### Ant Design 的组件

- 表格

  `pagination` 属性可以用来分页

- loading 框

  在数据显示之前，展示 loading ，在数据显示之后，关闭loading

---

### React Native

官网：https://reactnative.cn/docs/getting-started.html

#### 搭建开发环境

- 安装 Node

- 安装 homebrew

  Homebrew 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷

  官网：https://brew.sh/index_zh-cn.html

  ```
  /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
  ```

- 安装 watchman

  ```
  brew install watchman
  ```

#### 安装 React Native 的命令行工具（react-native-cli）

React Native 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务

```
npm install -g react-native-cli
```

#### 创建新项目

```
react-native init MyApp --version 0.44.3编译并运行 React Native 应用
```

#### 编译并运行 React Native 应用

在 IOS 模拟器上运行：

```
react-native run-ios
```

