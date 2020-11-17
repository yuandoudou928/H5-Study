// 暴露方式：默认暴露方式
// 暴露多个属性
export default {
  msg: "我是 module4.js",
  showMsg() {
    console.log(this.msg + " 的 showMsg()");
  },
};
