// 暴露模块：采用统一暴露的方式
function showMsg11() {
  console.log("我是 module2.js 的 showMsg1()");
}

function showMsg22() {
  console.log("我是 module2.js 的 showMsg2()");
}

// 统一暴露
export { showMsg11, showMsg22 };
