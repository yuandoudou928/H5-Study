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