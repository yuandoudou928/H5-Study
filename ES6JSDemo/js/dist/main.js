(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

var _module5 = require("./module4");

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 采用默认暴露的方式，名字自己定义
// 采用解构赋值的形式进行导入（括号里的对象名要与 module1 中的对象名一致）
(0, _module.showMsg1)();
// 采用解构赋值的形式进行导入（括号里的对象名要与 module2 中的对象名一致）

(0, _module.showMsg2)();
(0, _module2.showMsg11)();
(0, _module2.showMsg22)();
console.log(_module.arr);
(0, _module4.default)();
console.log(_module6.default);
_module6.default.showMsg();
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showMsg1 = showMsg1;
exports.showMsg2 = showMsg2;
// 暴露模块：采用分别暴露的方式
function showMsg1() {
  console.log("我是 module1.js 的 showMsg1()");
}

function showMsg2() {
  console.log("我是 module1.js 的 showMsg2()");
}

var arr = exports.arr = [1, 2, 3, 4, 5];
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 暴露模块：采用统一暴露的方式
function showMsg11() {
  console.log("我是 module2.js 的 showMsg1()");
}

function showMsg22() {
  console.log("我是 module2.js 的 showMsg2()");
}

// 统一暴露
exports.showMsg11 = showMsg11;
exports.showMsg22 = showMsg22;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// 暴露模块：采用默认暴露的方式
// 默认暴露的方式，可以暴露任意数据类型，暴露的是什么数据，就收到的就收什么数据。默认暴露方式只能进行一次
// 这里暴露的是：一个箭头函数
exports.default = function () {
  console.log("我是 module3.js 的 default 方式暴露的函数");
};
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 暴露方式：默认暴露方式
// 暴露多个属性
exports.default = {
  msg: "我是 module4.js",
  showMsg: function showMsg() {
    console.log(this.msg + " 的 showMsg()");
  }
};
},{}]},{},[1]);
