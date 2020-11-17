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