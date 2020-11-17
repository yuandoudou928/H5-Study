// 定义没有依赖的模块
define(function (require, exports, module) {
  let name = "我是 module2";
  function showName() {
    console.log(name);
  }

  // 暴露模块：暴露的是 showName() 这个函数
  module.exports = showName;
});
