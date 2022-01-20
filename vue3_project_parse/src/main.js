console.log('开始执行main.js')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import router2 from './router/index'
import { tool_1, tool_1_data1 } from './utils/tool-1.js'
import { tool_2 } from './utils/tool-2.js'
import { tool_3 } from './utils/tool-3.js'
// const { tool_3 } = require('./utils/tool-3.js')
tool_1()
// console.log('tool_1_data1',tool_1_data1)
setTimeout(() => {
    console.log('tool_1_data1',tool_1_data1)
}, 3000)


console.log('main.js--createApp--前')
createApp(App).use(router).mount('#app')
console.log('main.js--createApp--后')

// 1.ESModule 的 import引入方式


