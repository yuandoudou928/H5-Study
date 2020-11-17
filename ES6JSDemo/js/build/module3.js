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