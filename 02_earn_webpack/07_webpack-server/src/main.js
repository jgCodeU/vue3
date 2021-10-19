import { createApp } from 'vue';
import { sum } from "./js/math";
const { priceFormat } = require("js/format");//此处‘js’使用的是webpack配置中配置的别名

import App from './vue/App';

import "./js/element";
if (module.hot) {
    module.hot.accept("./js/element.js", () => {
        console.log("热更新element文件")
    })
}

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount("#app");

console.log(12312313123231)
