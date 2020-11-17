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