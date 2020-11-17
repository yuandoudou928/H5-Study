// 定义有依赖的模块
define(function (require, exports, module) {
  let name = "我是 module4";

  // 同步方式引入 module2.js ，获取到的是一个函数
  let myModule2 = require("./module2");
  myModule2();

  // 异步方式引入 module3.js
  require.async("./module3", function (m3) {
    m3.show.showName();
  });

  function showName() {
    console.log(name);
  }

  exports.show = showName;
});
