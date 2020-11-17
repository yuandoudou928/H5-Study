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