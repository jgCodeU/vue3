# 项目基本组成

```

.
├── README.md
├── index.html           	入口文件
├── package.json
├── public               	资源文件
│   └── favicon.ico
├── src                  	源码
│   ├── App.vue          	单文件组件
│   ├── assets
│   │   └── logo.png
│   ├── components   
│   │   └── HelloWorld.vue
│   └── main.js          	入口
└── vite.config.js        vite工程化配置文件
```



# 安装工具库

```javascript
// 安装vue-router和Vuex
npm install vue-router@next vuex@next
```

![image-20220114104107259](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220114104107259.png)



# 项目目录详细介绍

## src：主要代码及资源存储区域

```

├── src
│   ├── api            数据请求
│   ├── assets         静态资源
│   ├── components     组件
│   ├── pages          页面
│   ├── router         路由配置
│   ├── store          vuex数据
│   └── utils          工具函数
```

### router：路由系统

#### （1）配置路由文件：

在router文件夹的index.js文件中：

```javascript
// createRouter：新建路由实例。creteaWebHashHistory：配置内部使用hash模式的路由，即url上通过#来区分
import { createRouter, creteaWebHashHistory } from 'vue-router'
import  Home from '../pages/Home.vue'
import  About from '../pages/About.vue'

const routes = [
    {
        path: '/', //路由名称（'/'表示默认显示此页面）
        name: 'Home', // ？？
        component: Home // ？？
    },
    {
        path: '/About',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
```

#### （2）建立页面

#### （3）在main.js引入路由,修改App.vue文件



在 <script setup> 语法中，我们使用引入的 ref 函数包裹数字，返回的 count 变量就是响应式的数据，使用 add 函数实现数字的修改。需要注意的是，对于 ref 返回的响应式数据，我们需要修改 .value 才能生效，而在 <script setup> 标签内定义的变量和函数，都可以在模板中直接使用。

使用 Composition API 的逻辑来拆分代码，把一个功能相关的数据和方法都维护在一起。



# 文件加载顺序

```javascript
https://virtual.uplus.com/file:///data/user/0/com.haier.uhome.uplus/app_test-uplus-resource/mPaaS/wash_unNetwork%401.10.2/wash_unNetwork/index.html?prodNo=CE0JPJ00H&deviceType=null&deviceNetType=nonNetDevice&isDeviceResource=1&deviceName=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA5&devicemac=CE0JPJ00H00TNL8V0763&typeid=null&model=EG100B129W&devAppName=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA5&deviceLoca=%E6%B4%97%E6%BC%B1%E9%97%B4&brand=%E6%B5%B7%E5%B0%94&class2=%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA&devNo=CE0JPJ00H&category=%E6%99%BA%E8%83%BD&hybrid_navbar_hidden=true&appId=MB-UZHSH-0000&appVersion=7.7.0&isowner=1&showclean=0&deviceId=CE0JPJ00H00TNL8V0763&serverResourceVersion=1.10.2&resUpgradeMonitor=wash_unNetwork#/
```



## 1.index.html

（1）入口文件是index.html

（2）JavaScript文件的加载不会占用此文件代码的解析

![image-20220120011318336](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220120011318336.png)



## 2.main.js

分为两大部分：外部引入的函数、变量；自身文件中编写的代码

### （1）外部引入的函数、变量

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import router2 from './router/index'
import { tool_1, tool_1_data1 } from './utils/tool-1.js'
import { tool_2 } from './utils/tool-2.js'
import { tool_3 } from './utils/tool-3.js'
```

![image-20220120012049312](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220120012049312.png)

在main.js中，import无论放在哪里，都会先执行，且引入的文件中的代码也会先于main.js自身文件中编写的代码执行。

### （2) 自身文件中编写的代码

```javascript
console.log('main.js--createApp--前')
createApp(App).use(router).mount('#app')
console.log('main.js--createApp--后')
```

![image-20220120011955093](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220120011955093.png)

自身文件中编写的代码会在import完成之后再执行。



![image-20220120012359883](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220120012359883.png)

注意：引入文件中耗时长的任务不会一直占用主线程，详见tool-1.js

项目中使用的是ESModule导入，使用CommonJS会报错，应该是vite没有做处理。在webpack环境中，ESModule和CommonJS均可使用。浏览器支持ESModule，但是CommonJS在Node环境可用。

ESModule和CommonJS具体使用和原理之后再介绍。

## 3.App.vue

```javascript
createApp(App).use(router).mount('#app')
```

先执行App.vue

![image-20220120013446608](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220120013446608.png)

通过点击router-link标签，修改路由，切换router-view组件显示的内容。

![image-20220120014118653](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220120014118653.png)

![image-20220120014156200](/Users/hujianguo/Library/Application Support/typora-user-images/image-20220120014156200.png)

## 4.Home.vue（Vue3生命周期）

# Vue3生命周期

setup在其他生命周期函数之前，也在data等之前

https://juejin.cn/post/6945606524987244558

