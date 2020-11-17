// 定义没有依赖的模块
define(function (require, exports, module) {
  let name = "我是 module3";
  function showName() {
    console.log(name);
  }

  // 暴露模块：给 exports 对象添加 module3 属性，然后暴露出去
  exports.show = { showName };
});
