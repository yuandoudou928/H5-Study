define(function (require) {
  let m1 = require("./module1");
  console.log(m1.getName());

  let m4 = require("./module4");
  m4.show();
});
