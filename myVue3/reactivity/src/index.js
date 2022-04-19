import { initMixin } from "./init.js";

// Vue就是一个构造函数 通过new关键字进行实例化

// 定义Vue构造函数
function Vue(options) {
  // 这里开始进行Vue初始化工作
  // this._init(options);
}
// _init方法是挂载在Vue原型的方法 通过引入文件的方式进行原型挂载需要传入Vue

// 初始化(加工)Vue构造函数，添加方法 
initMixin(Vue);
