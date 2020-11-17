// 定义有依赖的模块
define(["myDataService"], function (dataService) {
  let msg = "我是 alerter.js 中的内容";
  function showMsg() {
    console.log(dataService.getName());
    console.log(msg);
  }

  return { showMsg };
});
