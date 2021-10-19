
import _ from "lodash-es"
import { sum } from "./js/math.js";
import "./css/style.css"
import "./css/title.less"
import { createApp } from "vue";
import App from "./vue/app.vue";

console.log("hello vite");
 
console.log(sum(10, 20));

console.log(_.join(["abc", "def"],"-"))

const titleEl = document.createElement("div");
titleEl.className = "title";
titleEl.innerHTML = "hello vite";
document.body.appendChild(titleEl)

//vue
createApp(App).mount("#app");