requirejs.config({
  // baseUrl: "js/",   // 基本路径
  paths: {
    myDataService: "./modules/dataService",
    myAlerter: "./modules/alerter",
  },
});

requirejs(["myAlerter"], function (alerter) {
  alerter.showMsg();
})();
