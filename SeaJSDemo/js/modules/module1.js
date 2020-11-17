// 定义没有依赖的模块
define(function (require, exports, module) {
  let name = "我是 module1";
  function getName() {
    return name;
  }

  // 暴露模块：暴露的是对象，对象中的内容是 getName() 这个函数
  module.exports = { getName };
});
