let uniq = require('uniq');

let module1 = require('./modules/module1.js')
let module2 = require('./modules/module2')
let module3 = require("./modules/module3")
let module4 = require("./modules/module4")

module1.foo();

module2();

module3.foo1();
module3.foo2();
uniq(module3.arr)
console.log(module3.arr);

require("./modules/httpSer")