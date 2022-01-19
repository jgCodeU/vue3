import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import router2 from './router/index'
import { tool_1 } from './utils/tool-1.js'
import { tool_2 } from './utils/tool-2.js'
import { tool_3 } from './utils/tool-3.js'
// const { tool_3 } = require('./utils/tool-3.js')
console.log('main.js--createApp--前')
createApp(App).use(router).mount('#app')
console.log('main.js--createApp--后')


