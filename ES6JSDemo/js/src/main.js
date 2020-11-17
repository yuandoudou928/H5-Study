// 采用解构赋值的形式进行导入（括号里的对象名要与 module1 中的对象名一致）
import { showMsg1, showMsg2, arr } from "./module1";
// 采用解构赋值的形式进行导入（括号里的对象名要与 module2 中的对象名一致）
import { showMsg11, showMsg22 } from "./module2";
// 采用默认暴露的方式，名字自己定义
import m3 from "./module3";
import m4 from "./module4";

showMsg1();
showMsg2();
showMsg11();
showMsg22();
console.log(arr);
m3();
console.log(m4);
m4.showMsg();
