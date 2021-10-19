import {sum} from './js/math';
const {printFormat} = require('./js/format');
import { createApp } from 'vue'
import App from './vue/App.vue'

import "./js/element"

console.log('sum', sum(20, 30));

const app = createApp({
    template: "<div>VUE渲染出来的内容</div>",
    components: {

    },
    data() {
        return {
        title: "Hello World",
        message: "哈哈哈"
        }
    }
});
app.mount("#app");


