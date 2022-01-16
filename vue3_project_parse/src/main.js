import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import router2 from './router/index'
console.log('main.js--createApp--前')
createApp(App).use(router).mount('#app')
console.log('main.js--createApp--后')

